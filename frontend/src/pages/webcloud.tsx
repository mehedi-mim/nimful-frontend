import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import Wrapper from '@/components/common/Wrapper';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
const WordCloud = dynamic(
  () => import('react-d3-cloud'),
  { ssr: false }
)

const ParentComponent = () => {
  const [can_show_cloud, setCloud] = useState(false)

  const [data, setData] = useState([
    { text: 'login.com', value: 1000 },
    { text: 'signup.com', value: 200 },
    { text: 'no-cloud.com', value: 800 },
    { text: 'hurry-up.com', value: 100 },
    { text: 'nimful.com', value: 1000 },
    { text: 'nazia.com', value: 100 },
    { text: 'nothing.com', value: 200 },
    { text: 'linkedin.com', value: 800 },
    { text: 'google.com', value: 100 },
    { text: 'stackoverflow.com', value: 200 },
    { text: 'netflix.com', value: 800 }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        toast.error('Please log in to stay more time...!');
        setTimeout(() => {
          window.location.href = '/login';
        }, 4000);
      }
      else {
        setCloud(true)
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
            setData(data);
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
          ) : <div className='centered-container-webcloud'>
            <img src="/images/webcloud/show-fixed.png" alt="Profile"></img>
          </div>}
        </div>
      </div>
    </CenterWrapper>

  );
};

export default ParentComponent;
