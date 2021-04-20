import React from 'react';
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory();
  console.log(history);
  return (
    <>
      <h2> Страница информации. </h2>
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex dolorem ad, officia, fuga quaerat minima corrupti, voluptates totam incidunt nihil temporibus ducimus sunt assumenda. Inventore facere est officiis corporis. </p>
      <button className='btn' onClick={() => history.push('/')} > Вернуться к списку дел. </button>
    </>
  )
}