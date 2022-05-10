import {TOGGLE_MODAL} from '@actions/ui/ui.type'

const initialState = {
    modal: false
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            return { ...state, modal: !state.modal }
        default:
            return { ...state }
    }
}

export {uiReducer}