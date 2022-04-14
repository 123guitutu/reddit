import React from 'react';

interface TopProps {
  color: string;
  width: string;
  height: string;
}

const Top: React.FC<TopProps> = props => {
  const { color, width, height } = props

  return (
    <svg style={{ width, height }} fill={color} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4048" ><path d="M885 780H165c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM400 325.7h73.9V664c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V325.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 171c-3.2-4.1-9.4-4.1-12.6 0l-112 141.7c-4.1 5.3-0.4 13 6.3 13z" p-id="4049"></path></svg>
  )
}


export default Top
