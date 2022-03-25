import React from 'react'

const GifComp = ({title, url}) => {
    return (
        <>
            <h1>{title}</h1>
            <img src={url} alt={title} />
        </>
    )
}

export default GifComp