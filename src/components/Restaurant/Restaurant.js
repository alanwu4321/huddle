import React from 'react';

const Restaurant = (props) => {

    
  return (
    <div>
      <div className='white f3'>
        <h1>this is Restaurant PAGE</h1>
      </div>
      <div className='white f1'>
      <h1>your current entry count is...</h1>
      </div>
      <div className="lh-copy mt3">
              <p  onClick={() => props.onRouteChange('betting')} className="f6 link dim black db pointer">GO TO BETTING PAGE</p>
    </div>
    </div>
  );
}

export default Restaurant;