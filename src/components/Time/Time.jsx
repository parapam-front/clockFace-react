import React from 'react'
import './Time.scss'

const Time = ({data}) => {


        return (
                <div className='timeBox'>
                    {data != undefined
                            ? data.time
                            : ''
                    }

                </div>
        )



}






export default Time