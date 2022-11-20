import React from 'react';
import './App.css';

// itemMap can be named anything

let List = (props) => 
 (  <>
      <h1>{props.headerTitle}</h1>
      <ul>
        {props.listStories.map(function(itemMap) {
          return (<Item item={itemMap} headerTitle = "headerTitleItem" />);  
        })}
      </ul>
    </>
  )

const Item = (props) => {
  return (
    <li key={props.item.objectID}>
      <span> 
        <a href={props.item.url}>{props.item.title }</a> 
      </span>
      <span>author: {props.item.author} </span>
      <span>comments: {props.item.num_comments}</span>
      <span>points: {props.item.points} </span>
      <span>reviews: {props.item.reviews} </span>
      <h2>{props.headerTitle}</h2>
    </li>
  )
} 

function Search(props) {
  
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  }
 
  const handleMouseOver = (event) => {
    console.log(event);
  }
  return (
    <>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handleChange} onMouseOver={handleMouseOver} />
    <p>
      Searching for <strong>{searchTerm}</strong>
    </p>
    </>
  )
}

function App() {

  const stories = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    reviews: 333,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    reviews: 246,
    objectID: 1,
    },
  ];

  const handleSearch = (event)  => {
    console.log(event.target.value);
  }
  // listStories can be named anything, in the props component, it must be the same, e.g. props.listStories.title

  return (
    <div>
      <h1>My Hacker Stories</h1>   
      <Search onSearch={handleSearch} />     
      <hr />
      <List listStories={stories} headerTitle = "headerTitleList" />
    </div>
  );
}

export default App