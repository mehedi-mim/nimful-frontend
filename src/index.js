import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const PORT = 3030; // Port number

ReactDOM.render(<App />, document.getElementById('root'), () => {
  console.log(`Server is running on port ${PORT}`);
});