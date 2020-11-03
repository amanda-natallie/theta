import React from "react";
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div style={{height: '100%', width: '100%', zIndex: 1000, position: 'absolute', 
    backgroundColor: 'white', 
    opacity: 0.8, 
    cursor: 'not-allowed', 
    pointerEvents: 'none'}}>
      <div style={{margin: '50%'}}>
        <ReactLoading type='spin' color='#7643FF' />
      </div>
    </div>
  );
};

export default Loading;
