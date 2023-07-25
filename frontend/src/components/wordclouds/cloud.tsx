import React from 'react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

interface WordCloudProps {
  data: { text: string; value: number }[];
}

const WordCloud: React.FC<WordCloudProps> = ({ data }) => {
  console.log(data)
  return (
    <div className="word-cloud-container">
      <p>Not in Use</p>
    </div>
  );
};

export default WordCloud;
