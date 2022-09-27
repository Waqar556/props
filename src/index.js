import React from 'react';
import ReactDOM from 'react-dom';
import Foam from './Foam';
import data from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Foam data={data}/>
  </React.StrictMode>
);

