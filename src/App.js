import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why is React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'Ho do you use React?',
    content: 'You use React by creating components'
  }
];

export default () => {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  )
};
