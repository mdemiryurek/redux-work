import { VISIBILITY_MODE } from "../constants/VisibilityMode";

const INITIAL_STATE = {
    visible: true
}

const visibilityMode = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VISIBILITY_MODE.SHOW:
            return {...state, visible: true}
        case VISIBILITY_MODE.HIDE:
            return {...state, visible: false}
        default:
            return state;
    }
}

export default visibilityMode;