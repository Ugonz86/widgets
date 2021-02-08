import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
// import './App.css';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework'
//   },
//   {
//     title: 'Why is React?',
//     content: 'React is a favorite JS library among engineers'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components'
//   }
// ];

const options = [
  {
      label: 'The color Red',
      value: 'red'
  },
  {
      label: 'The color Green',
      value: 'green'
  },
  {
      label: 'A shade or Blue',
      value: ''
  },

];

const App = () => {
  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options}/>
    </div>
  )
};

export default App;

