import React, { Component } from 'react'
import './Homepage.css'
import BgHomePage from '../Photo/bg3.png'


export default class Homepage extends Component {
    render() {
        return (
            <section>
                <div className='bg-homepage-container'>
                    <div className='bg-text-homepage'>
                       <h1>PARK - ON - STREET</h1>
                       <h5>find a perfect spot to park.</h5>
                    </div>
                    {<img src={BgHomePage}/>}
                </div>
            </section>
        )
    }
}

