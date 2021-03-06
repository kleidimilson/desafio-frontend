import React from 'react';
import Details from '../Details/Details';
import Image from '../Image/Image';
import './Card.css'

const Card = ({listing, filter}) => {

  
  const cardType = listing.featured?'card featured': 'card'
  
  
  return(
      <div className={cardType}>
          <Image logo={listing.logo} desc={listing.campany}/>
          <Details 
          recent={listing.new} 
          company={listing.company} 
          featured={listing.featured} 
          position={listing.position} 
          postedAt={listing.postedAt}
          contract={listing.contract} 
          location={listing.location}
          role={listing.role}
          level={listing.level}
          languages={listing.languages}
          tools={listing.tools}
          filter={filter}
          />
      </div>
  );
}

export default Card;