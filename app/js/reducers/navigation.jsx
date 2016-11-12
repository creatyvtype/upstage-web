const initialState = {
    currentLocation: "Productions"
}

export default function navigation(state=initialState, action) {
    switch (action.type) {
        case "NAVIGATE_TO_PRODUCTIONS":
            return Object.assign({}, state, {currentLocation: "Productions"})
        case "NAVIGATE_TO_COMPANIES":
            return Object.assign({}, state, {currentLocation: "Companies"})
        case "FETCH_SESSION_FULFILLED":
            return Object.assign({}, state)
        default: 
            return state
    }
}