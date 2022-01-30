import React,{ useState,useEffect } from 'react'
import Header from './components/Header/Header'
import './app.css';
import Data from './services/data.json';
import Card from './components/Card/Card';
import FilterItem from './components/FilterItem/FilterItem'

function App() {
  const [listings, setListings] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => {
    if(filters.length == 0)
      setListings(Data)
  }, [filters])
  
  const filterListings = (filter_by = null) => {

    if (!filters.includes(filter_by) && filter_by !== null)
      setFilters([...filters, filter_by])

    setListings(listings.filter(listing => [...listing.languages, listing.tools, listing.level, listing.role].includes(filter_by)))
  }

  const removeFilter = (removed_filter) => {
    setFilters( filters.filter( item => item !== removed_filter ) )
  }
 
  const haveFilters = filters<1?'noFilter':'filter'

  return (
    <div className="App">
      <Header/>
    
      <div id='content'>
     
      <div id={haveFilters}>
         { filters.map(filter => <FilterItem item={filter} _callback={removeFilter} key={filter} />)}
      </div>
        {
          listings.map(listing => (
            <Card listing={listing} key={listings.id} filter={filterListings}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
