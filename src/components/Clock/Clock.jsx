import React from 'react'
import './Clock.scss'

const array = [1,2,3,4,5,6,7,8,9,10,11,12]


const Clock = ({data}) => {





    return (
            <div>
                {data != undefined
                        ? <div className="clock">
                            <div style={data.clock.sec} className="clock__second"></div>
                            <div style={data.clock.min} className="clock__minute"></div>
                            <div style={data.clock.hrs} className="clock__hour"></div>
                            <div className="clock__axis"></div>
                            { array.map( (lol, i) => {
                                return (
                                    <section key={i} className="clock__indicator"></section>
                                )
                            })}

                        </div>
                        : ''
                }
            </div>
    )
}


export default  Clock