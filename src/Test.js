import React from 'react'
import './test.css'
import Nav from './components/Nav'
const Test = () => {
    return (
        <>
        <Nav/>
            <div className="container">
                <div className="content-item">
                    <img src="./images/zoro.jpg" alt=""/>
                </div>
                <div className="content-item">
                    <img src="./images/nami.jpg" alt=""/>
                </div>
            </div>

        </>
    )
}

export default Test
