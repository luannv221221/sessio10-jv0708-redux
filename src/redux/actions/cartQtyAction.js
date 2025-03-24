export const increaseQty = (value) => {
    return {
        type: "increase",
        payload: value
    }
}
export const decreaseQty = (value) => {
    return {
        type: "decrease",
        payload: value
    }
}