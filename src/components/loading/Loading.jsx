import React from 'react'
import ReactLoading from 'react-loading'

const Example = ({ type, color }) => (
  <div className='h-screen w-screen flex items-center justify-center'>
    <ReactLoading type={type} color={color} height={667} width={250} />
  </div>
);

export default Example;
