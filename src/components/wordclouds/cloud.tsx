import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

interface WordCloudProps {
  data: { text: string; value: number }[];
}

const WordCloud: React.FC<WordCloudProps> = ({ data }) => {
  console.log(data)
  return (
    <div className="word-cloud-container">
      <ReactWordcloud words={data} />
    </div>
  );
};

export default WordCloud;
