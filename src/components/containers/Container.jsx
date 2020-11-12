import React from 'react'
import Clock from "../Clock/Clock.jsx";
import Time from "../Time/Time.jsx";
import Selector from "../selector/Selector.jsx";
import './Container.scss'

const Container = ({data, change}) => {
    return (
            <div className='container'>
                <Clock data={data}/>
                <Time data={data}/>
                <Selector change={change}/>
            </div>
    )
}

export default Container