// import WordCloud from '@/components/wordclouds/cloud';
import React ,{ useState,useEffect} from 'react';
import dynamic from 'next/dynamic'
import Wrapper from '@/components/common/Wrapper';
import { ToastContainer } from 'react-toastify';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WordCloud = dynamic(
  () => import('react-d3-cloud'),
  { ssr: false }
)
const data = [
  { text: 'facebook.com', value: 1000 },
  { text: 'instagram.com', value: 200 },
  { text: 'slack.com', value: 800 },
  { text: 'nimful.com', value: 100 },
  { text: 'duck.com', value: 1000 },
  { text: 'microsoft.com', value: 100 },
  { text: 'google.com', value: 200 },
  { text: 'facebook.com', value: 800 },
  { text: 'twitter.com', value: 100 },
  { text: 'stackoverflow.com', value: 1000 },
  { text: 'linkedin.com', value: 100 },
  { text: 'indeed.com', value: 2000 },
  { text: 'stickler.com', value: 800 },
  { text: 'pihr.com', value: 100 },
  { text: 'moron.com', value: 1000 },
  { text: 'stripe.com', value: 200 },
  { text: 'youtube.com', value: 800 },
  { text: 'chatgpt.com', value: 100 },
  { text: 'blabla.com', value: 1000 },
  { text: 'oracle.com', value: 100 },
  { text: 'beam.com', value: 200 },
  { text: 'codealgo.com', value: 800 },
  { text: 'nabisco.com', value: 100 },
  { text: 'stock.com', value: 1000 },
  { text: 'football.com', value: 100 },
  { text: 'mangrove.com', value: 200 },
  { text: 'maxflow.com', value: 800 },
  { text: 'future.com', value: 1000 }
]
const ParentComponent = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        toast.error('Please login!');
        setTimeout(() => {
          window.location.href = '/login'; 
        }, 3000);
      }
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
       <div className="webcloud-page">
       <ToastContainer />
        <div className="webcloud-container">
        <WordCloud data={data} />
        </div>
      </div>
    </Wrapper>
    
  );
};

export default ParentComponent;
