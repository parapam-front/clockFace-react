import {FIRSTBELT, SECONDBELT, TIMEFIRST, TIMESECOND} from "../actions/actionTypes";

const initialState = {
    time: {},
    beltFirst: 7,
    beltSecond: 7

}


export default function timeReducer(state = initialState, action) {
    switch (action.type) {
        case FIRSTBELT:
            return {
                ...state, beltFirst: action.val
            }
            case SECONDBELT:
            return {
                ...state, beltSecond: action.val
            }
        case TIMEFIRST:
            return {
                ...state, timeFirst: action.data, loading: false
            }
        case TIMESECOND:
            return {
                ...state, timeSecond: action.data, loading: false
            }
        default:
            return state
    }
}