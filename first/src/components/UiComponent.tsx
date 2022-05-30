import React from 'react'
import './UiStyle.css'
const UiComponent = ({ textValue, index }: any) => {
    const setStyle = (value: string) => {
        let node: any = document.getElementById(index)
        if (value === 'bold') {
            node.style = 'font-weight:700'
        }
        if (value === 'Italic') {
            node.style = 'font-style:italic'
        }
        if (value === 'Underline') {
            node.style = 'text-decoration:underline'
        }
        if (value === 'font-size') {
            node.style = 'font-size:20px'
        }
        if (value === 'color') {
            node.style = 'color:blue'
        }
    }

    return (
        <div className='container'>
            <div className='btn-collection'>
                <button className='btn' onClick={() => setStyle('bold')}>Bold</button>
                <button className='btn' onClick={() => setStyle('Italic')}>Italic</button>
                <button className='btn' onClick={() => setStyle('Underline')}>Underline</button>
                <button className='btn' onClick={() => setStyle('font-size')}>font-size</button>
                <button className='btn' onClick={() => setStyle('color')}>color</button>
            </div>
            <div id={index} style={{ textOverflow: 'ellipsis' }}>
                {textValue}
            </div>
        </div >
    )
}

export default UiComponent