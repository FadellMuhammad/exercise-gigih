import React, { useEffect, useState } from "react";
import GifComp from "../../components/imageComp/GifComp"

const Trending = () => {

  const [trending, setTrending] = useState("");

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=a7o7uMaZyfICKK7sBoww5UXHPbXMTS2p&limit=12")
      .then(res => res.json())
      .then(data => setTrending(data))
  }, [])


  return (
    <div>
      <h1>Trending</h1>
      {
        trending && trending.data.map(gif => (
          <GifComp key={gif.id} data={gif} />
        ))
      }
    </div>
  )
}

export default Trending