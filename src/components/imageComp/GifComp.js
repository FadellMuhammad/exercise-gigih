import React from 'react'

const GifComp = ({data}) => {

  console.log(data)
  return (
    <>
      <h1>{data.title}</h1>
      <img src={data.images.original.url} alt={data.title} />
    </>
  )
}

export default GifComp