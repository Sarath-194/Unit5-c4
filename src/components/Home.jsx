import './Home.css'
// import { useState } from 'react'

export function Home () {
  


  return(<div >
    <div id='home'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
      <br/>
      <input type="text" className="search-box" placeholder="Enter Query" />
      <br/>
      <button onClick={ async () => {
        const url = 'https://fast-reef-22226.herokuapp.com/data';

        const res = await fetch(url);
        const data = await res.json()
        
        console.log(data)

        data.map((ele) => {
          return (
            <div className='result'>
              <h2>Title : {ele.title}</h2>
              <h4>Author: {ele.author}</h4>
              <p>Data: {ele.creation_date}</p>
              <p>Description : {ele.description}</p>
              <p>explicit: {ele.explicit ? 'True':'Flase'}</p>
              <p>id :{ele.id}</p>
              <p>Quality : {ele.quality} </p>
              <p>URL : {ele.url}</p>

            </div>)
          
        })


      }}

      >Enter</button>
      <div>
    </div>
    </div>
    

  </div>)
}; 