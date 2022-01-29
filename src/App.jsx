import React,{ useState,useEffect } from 'react'
import Header from './components/Header/Header'
import './app.css';
import Data from './services/data.json';
import Card from './components/Card/Card';


function App() {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    setListings(Data)
  },[])
 



  return (
    <div className="App">
      <Header/>
      <div id='content'>
        {
          listings.map(listing => (
            <Card listing={listing} key={listings.company}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
