import { useEffect, useState } from 'react'

const Cart = () => {
    const [cartItems, setCartItems] =useState([])
    useEffect(()=>{
        const cart = localStorage.getItem("cart")
            if(cart){
                const toArrayCart = JSON.parse(cart);
                setCartItems(toArrayCart)
            }
        
    },[])

    const removeFromCart =(id)=>{
        const updateCart = cartItems.filter((item)=>item.id !== id);
        setCartItems(updateCart);

        localStorage.setItem("cart",JSON.stringify(updateCart))
    }
  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-gray-300 py-4">
              <div className='items-center'>
                <p className="font-semibold">{item.head}</p>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart