import React, { useState } from 'react'
import buyButtonHandler from '../purchase'
import { useOutletContext } from 'react-router-dom';




function Product({ productImage, productName, price}) {

    // addtocart Button
    const {incrementCart, decrementCart } = useOutletContext();

    const [enableAddToCart, setEnableAddToCart] = useState(false)

    const addToCartHandler = () => {
        if (!enableAddToCart) {
           incrementCart();
        } else {
            decrementCart();          
        }
        setEnableAddToCart(!enableAddToCart)
    }

    return (
        <div className='shadow-xl transition-transform duration-200 hover:-translate-y-3'>
            <img className='md:w-[40vw] md:h-[40vh] '
                src={productImage} />
            <div className='text-center md:my-2'>
                <p className='text-[20px] font-bold font-serif'>{productName}</p>
                <p className='text-gray-600 font-semibold'><i class="fa-solid fa-indian-rupee-sign"></i>{price}</p>
                <div className='flex my-2 justify-around md:mt-8'>
                    <button
                        onClick={buyButtonHandler}
                        className='buyButton text-white bg-red-900 rounded-[4px] font-bold p-[6px] cursor-pointer mb-4'>Buy Now</button>
                    <button
                        onClick={addToCartHandler}
                        // enableAddToCart={enableAddToCart}
                        className='buyButton text-white bg-red-900 rounded-[4px] font-bold p-[6px] cursor-pointer mb-4'>{!enableAddToCart ? "Add to Cart" : "Remove from Cart"}</button>
                </div>
            </div>
        </div>
    )
}

export default Product
