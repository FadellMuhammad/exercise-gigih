import React from 'react'
import GifComp from '../../components/imageComp/GifComp'
import gifs from '../../data/gifs'
// import gif from '../../data/gif'


const Index = () => {
  return (
    <div>
        <input type="text" style={{margin:20}}/>
        <button>Button</button> <br />
        {/* Task 4 */}
        {/* <GifComp title={gif.title} url={gif.url} /> */}
      
        {
          gifs.filter(gif => gif.rating==='g').map(gif => {
            return <GifComp key={gif.id} title={gif.title} url={gif.url} />
          })
        }
    </div>
  )
}

export default Index