import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { increaseQty } from './redux/actions/cartQtyAction';

function UpdateQtyCart() {
    const dispath = useDispatch();
    const handleClick = () => {
        dispath(increaseQty(1))
    }
    return (
        <>
            <input></input>
            <Button onClick={handleClick}>Thêm vào giỏ hàng</Button>
        </>
    )
}

export default UpdateQtyCart