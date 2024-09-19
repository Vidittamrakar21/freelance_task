import './blog.css'
import { useState } from 'react';

import {Link,useParams} from 'react-router-dom';
import Navbar from '../nav/nav';

import { useSelector } from 'react-redux';

function Blogpage () {
 
    
    const [data, showdata] = useState("");
   

    const { bid } = useParams();
  
    const blogs = useSelector(state => state.allblog.blogs); 



    const bbdata = blogs.find((item)=> item.id === Number(bid));


    

 
    

            
    return (

        <div id="blog">
        <Navbar/>
       

            <div id="card">
                <div id="fro">
                    <img src= {bbdata.url} alt="" />
                </div>
                <h1 className='text-[19px] mt-2 font-bold'>{bbdata.title}</h1>
                <div id="content" dangerouslySetInnerHTML={{__html: bbdata.bdata}} />
                  

                <div id="operate">
                    <div id='like' className='vi' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
                       <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>

                      <h5>{data.likes}</h5>
                    </div>

                   

                    <div id="save" className='vi' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                    </div>
   
                </div>

         

            </div>


        </div>
        
        
    
    )
}

export default Blogpage;