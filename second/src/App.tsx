import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Photo from '../components/Photo';
import NavBar from '../components/NavBar';
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_HOST,
    'X-RapidAPI-Key': import.meta.env.VITE_KEY
  }

};

function App() {

  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=dog&pageNumber=1&pageSize=20&autoCorrect=true', options)
      .then(response => response.json())
      .then(response => setSearchResult(response.value))
      .catch(err => console.error(err));
  }, [])



  return (
    <div className="App">
      <NavBar setSearchResult={setSearchResult} />
      <div className='grid'>
        {searchResult && searchResult.map((el: any, idx) => {
          return <Photo key={idx} url={el.url} />
        })}
      </div>
    </div>
  )
}

export default App
