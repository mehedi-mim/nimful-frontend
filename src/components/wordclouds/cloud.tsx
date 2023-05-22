import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

interface WordCloudProps {
  data: { text: string; value: number }[];
}
const wordCloudData = [
  { text: 'Facebook', value: 10 },
  { text: 'slack', value: 7 },
  { text: 'youtube', value: 5 },
  // Add more words...
];
const WordCloud = ({ data }:{data:WordCloudProps}) => {
  console.log(data)
  return (
    <div className="word-cloud-container">
      {!!wordCloudData.length &&
      <ReactWordcloud words={wordCloudData} /> }
    </div>
  );
};

export default WordCloud;
