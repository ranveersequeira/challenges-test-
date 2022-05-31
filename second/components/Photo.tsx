import React from 'react'

const Photo = ({ url }: any) => {
    return (
        <div>
            <img src={url} alt="image" style={{ width: "150px", height: "150px", objectFit: 'contain' }} />
        </div>
    )
}


export default Photo