import { TOGGLE_MODAL, TOGGLE_QUANTITY_INPUT_EMPTY } from '@actions/ui/ui.type'

const initialState = {
    modal: false,
    quantityInputEmpty: false
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            return { ...state, modal: !state.modal }
        case TOGGLE_QUANTITY_INPUT_EMPTY:
            return { ...state, quantityInputEmpty: !state.quantityInputEmpty }
        default:
            return { ...state }
    }
}

export {uiReducer}