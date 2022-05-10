import { TOGGLE_MODAL,TOGGLE_QUANTITY_INPUT_EMPTY } from "./ui.type"

const toggleModal = (payload) => ({
    type: TOGGLE_MODAL,
    payload
})
const toggleQuantityEmpty = (payload) => ({
    type: TOGGLE_QUANTITY_INPUT_EMPTY,
    payload
})

export { toggleModal, toggleQuantityEmpty }