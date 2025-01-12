// import React from 'react';
import css from './Feedback.module.css';

export default function Feedback({ 
  good, 
  neutral, 
  bad, 
  total, 
  positivePercentage, 
}) { 
  return ( 
    <div className={css.feedcontainer}> 
      <ul className={css.feedlist}> 
        <li className={css.feeditem}>Good: {good}</li> 
        <li className={css.feeditem}>Neutral: {neutral}</li> 
        <li className={css.feeditem}>Bad: {bad}</li> 
        <li className={css.feeditem}>Total: {total}</li> 
        <li className={css.feeditem}>Positive: {positivePercentage}%</li> 
      </ul> 
    </div> 
  ); 
}