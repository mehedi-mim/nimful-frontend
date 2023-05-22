import WordCloud from '@/components/wordclouds/cloud';
import React from 'react';

const ParentComponent: React.FC = () => {
  const wordCloudData = [
    { text: 'Lorem', value: 10 },
    { text: 'ipsum', value: 7 },
    { text: 'dolor', value: 5 },
    // Add more words...
  ];

  return (
    <div>
      <h1>Word Cloud Example</h1>
      <WordCloud data={wordCloudData} />
    </div>
  );
};

export default ParentComponent;
