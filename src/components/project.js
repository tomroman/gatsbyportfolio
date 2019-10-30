import React from 'react'; 
import { Link } from 'gatsby' 
import Image from 'gatsby-image'


const Project = ({title, description, url, imageData}) => (

    <div className="project" >
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
   
        <h1>{title}</h1>
        
        </div>
        <Image 
        
        fluid={imageData} alt={title} />
        <p>{description}</p>
        <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
        <p>
            <a href={url}> View this project online &rarr;</a>
           
        </p>
        </div>

       
        <p>
            <Link to= "/">&larr; back to all projects </Link>
        </p>
        

    </div>
)



export default Project; 