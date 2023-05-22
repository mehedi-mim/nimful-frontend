// import WordCloud from '@/components/wordclouds/cloud';
import React from 'react';
import dynamic from 'next/dynamic'
import {render} from 'react-dom';
import Wrapper from '@/components/common/Wrapper';

const WordCloud = dynamic(
  () => import('react-d3-cloud'),
  { ssr: false }
)
const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

const ParentComponent= () => {
  return (
    <Wrapper>
     <div className='word-cloud-container'>
      <WordCloud data={data} />
    </div>
    </Wrapper>
    
  );
};

export default ParentComponent;
