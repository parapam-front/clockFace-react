import React from 'react'
import './Selector.scss'

const Selector = (props) => {


    return (
            <select onChange={(e) => props.change(e)}>
                <option value="7">Красноярск</option>
                <option value="2">Калининград</option>
                <option value="10">Владивосток</option>
                <option value="3">Москва</option>
            </select>
    )
}



export default Selector