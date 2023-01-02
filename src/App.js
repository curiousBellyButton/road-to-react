import React from 'react';
import './App.css';

// itemMap can be named anything

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
    {
      title: 'react latest version',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments:65,
      points: 5,
      reviews: 6565,
      objectID: 2,
    },
  ];

  // searchTerm, setSearchTerm can be named anything  
  const [searchTerm, setSearchTerm] = 
    React.useState(localStorage.getItem('search') || 'defaultSearchValue');
    // console.log(searchTerm);
  
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);
  

  const handleSearch = (event)  => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  }

  const searchedStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })
  
  // listStories can be named anything; in the props component, it must be the same, e.g. props.listStories.title

  return (
    <div>
      <h1>My Hacker Stories</h1>   
      <Search onSearch={handleSearch} search={searchTerm} searchTerm={searchTerm}/>     
      <hr />
      <List listStories={searchedStories} headerTitle = "React" />
    </div>
  );
}

const List = ({ headerTitle, listStories }) => 
 (  <>
      <h1>{headerTitle}</h1>
      <ul>
        {listStories.map((itemMap) => (
          <Item key={itemMap.objectID} item={itemMap} />  
        ))}
      </ul>
    </>
  )

const Item = ({ item }) => {
  return (
    <li key={item.objectID}>
      <span> 
        <a href={item.url}>{item.title }</a> 
      </span>
      <span> author: {item.author} </span>
      <span>comments: {item.num_comments}</span>
      <span>points: {item.points} </span>
      <span>reviews: {item.reviews} </span>
      
    </li>
  )
} 

const Search = ({ search, onSearch, searchTerm }) => {
  
  const handleChange = (event) => {
    onSearch(event);
  }
 
  return (
    <>
      <label htmlFor="search">Search</label>
      <input 
        id="search" 
        type="text" 
        // retains the typed input in search box
        value={search}
        onChange={handleChange} 
        
      />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </>
  )
}

export default App