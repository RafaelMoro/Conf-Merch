import { TOGGLE_MODAL } from "./ui.type"

const toggleModal = (payload) => ({
    type: TOGGLE_MODAL,
    payload
})

export { toggleModal }