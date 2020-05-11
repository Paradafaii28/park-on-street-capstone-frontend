import React, { Component } from 'react'
import './Homepage.css'
import BgHomePage from '../Photo/bg1.png'


export default class Homepage extends Component {
    render() {
        return (
            <div>
                <div className='bg-homepage-container'>
                    {<img src={BgHomePage}/>}
                </div>
            </div>
        )
    }
}

