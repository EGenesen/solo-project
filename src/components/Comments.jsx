import React from 'react';
import React, {useState} from 'react';

const Comments = ({ comment: { date, text } }) => {
  return (
    <div className='Comments'>
      <h6>{date}</h6>
      <p>
        {text}
      </p>
    </div>
  );
}




export default Comments;