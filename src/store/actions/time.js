import {FIRSTBELT, SECONDBELT, TIMEFIRST, TIMESECOND} from "./actionTypes"
import {f} from "../../func";

export function currentValueTime(first, second) {
    return dispatch => {
        const mainInt = setInterval(() => {
            dispatch(firstValues(f(first)))
            dispatch(SecondValues(f(second)))
            for (let i = 0; i < mainInt; i ++) {
                    clearInterval(mainInt)
            }
        },1000)
            for (let i = 0; i < mainInt; i ++) {
                clearInterval(i)
            }

    }
}

export function firstBelt(val) {
    return {
        type:FIRSTBELT,
        val
    }
}
export function secondBelt(val) {
    return {
        type:SECONDBELT,
        val
    }
}

export function firstValues(data) {
    return {
        type: TIMEFIRST,
        data: data
    }
}
export function SecondValues(data) {
    return {
        type: TIMESECOND,
        data
    }
}
