import { MODIFY_QUANTITY_PRODUCT, DELETE_PRODUCT_CART } from '@actions/products/products.type'

const analyzeModifyAction = store => next => actionInfo => {
    if(actionInfo?.type === MODIFY_QUANTITY_PRODUCT) {
        //if the action type is modify a quantity of a product and the new quantity is 0, delete the product
        if(actionInfo?.payload?.newQuantity === "0") {
            const newActionInfo = {
                type: DELETE_PRODUCT_CART,
                payload: { ...actionInfo.payload.product}
            }
            next(newActionInfo)
        }
    }
    next(actionInfo)
}

export {analyzeModifyAction}