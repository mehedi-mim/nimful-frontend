import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import Wrapper from '@/components/common/Wrapper';

const WordCloud = dynamic(
  () => import('react-d3-cloud'),
  { ssr: false }
);

const ParentComponent = () => {
  const [can_show_cloud, setCloud] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        toast.error('Please log in to stay more time...!');
        setTimeout(() => {
          window.location.href = '/login';
        }, 4000);
      } else {
        setCloud(true);
      }
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (process.env.NEXT_PUBLIC_BACKEND_BASE_URL) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/web-cloud`, {
        headers: {
          'Authorization': `${access_token}`
        }
      })
        .then(response => response.json())
        .then(responseData => {
          if (Array.isArray(responseData) && responseData.length === 0) {
            setData([]);
            setCloud(false);
          } else {
            setData(responseData);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  return (
    <CenterWrapper>
      <div className="webcloud-page">
        <ToastContainer />
        <div className="webcloud-container">
          {can_show_cloud ? (
            <WordCloud data={data} />
          ) : (
            <div className='centered-container-webcloud'>
              <p>No data stored yet!</p>
            </div>
          )}
        </div>
        {can_show_cloud && (
          <div className='webcloud-clear-history'>
            <button
              className='clear-history-button'
              onClick={() => {
                const access_token = localStorage.getItem('access_token');
                if (process.env.NEXT_PUBLIC_BACKEND_BASE_URL) {
                  fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/clear-history`, {
                    method: 'GET',
                    headers: {
                      'Authorization': `${access_token}`
                    }
                  })
                    .then(response => response.json())
                    .then(responseData => {
                      toast.success('History cleared successfully.');
                    })
                    .catch(error => {
                      console.log(error);
                      toast.error('Error clearing history.');
                    });
                }
              }}
            >
              Clear History
            </button>
          </div>
        )}
      </div>
    </CenterWrapper>
  );
};

export default ParentComponent;
