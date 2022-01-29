import React from 'react';
import './Details.css'


const Details = ({
    recent,
    company,
    featured,
    position,
    postedAt,
    contract, 
    location,
    languages,
    tools,
    filter
}) => {
  return(
      <div className="details">
        <div className="card-labels">
          <div className="details-title">
             <p className="title-company">{company}</p>
             {recent?<span className="new-label">new</span>:<p></p>}
             {featured?<span className="featured-label">featured</span>:<p></p>}
          </div>
          <p className="title-postition">{position}</p>
          <div className="footer-details">
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div>
        </div>
        
      </div>
    );
}

export default Details;