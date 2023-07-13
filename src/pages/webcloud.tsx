import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import Wrapper from '@/components/common/Wrapper';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const WordCloud = dynamic(
  () => import('react-d3-cloud'),
  { ssr: false }
)

const ParentComponent = () => {
  const [can_show_cloud,setCloud] = useState(false)

  const [data, setData] = useState([
    { text: 'login.com', value: 1000 },
    { text: 'signup.com', value: 200 },
    { text: 'no-cloud.com', value: 800 },
    { text: 'hurry-up.com', value: 100 },
    { text: 'nimful.com', value: 1000 },
    { text: 'no-visits.com', value: 100 },
    { text: 'nothing.com', value: 200 },
    { text: 'go-fast.com', value: 800 }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        toast.error('Please login!');
        setTimeout(() => {
          window.location.href = '/login';
        }, 4000);
      }
      else{
        setCloud(true)
      }
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/web-cloud`, {
      headers: {
        'access_token': `${access_token}`
      }
    })
      .then(response => response.json())
      .then(responseData => {
        // Check if the response data is an empty array
        if (Array.isArray(responseData) && responseData.length === 0) {
          // If the response data is an empty array, keep the existing data as it is
          setData(data);
        } else {
          // If the response data is not an empty array, assign the response data to the data variable
          setData(responseData);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper hasLeftSidebar={true} hasRightWrapper={false}>
      <div className="webcloud-page">
        <ToastContainer />
        <div className="webcloud-container">
        {can_show_cloud ? (
        <WordCloud data={data} />
      ) : <div className='centered-container'>
          <img src="/images/webcloud/show-fixed.png" alt="Profile"></img>
      </div> }
        </div>
      </div>
    </Wrapper>
  );
};

export default ParentComponent;
