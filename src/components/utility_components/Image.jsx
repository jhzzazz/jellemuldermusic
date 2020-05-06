import React from 'react';

let Image = (props) => (

<div className="flex-container">
  <img src={props.src} alt="logo" style={{height:props.height}} />
</div>
);

export default Image;
