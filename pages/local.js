import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10, quantity: 2 },
    { id: 2, name: "Item 2", price: 15, quantity: 1 },
    { id: 3, name: "Item 3", price: 20, quantity: 3 },
  ]);

  // Load cart items from local storage on mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart-value");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    // Check if item is already in cart
    const index = cartItems.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      // Item already in cart, update quantity
      const newItems = [...cartItems];
      const updatedItem = { ...newItems[index] };
      updatedItem.qty++;
      newItems[index] = updatedItem;
      setCartItems(newItems);
    } else {
      // Item not in cart, add new item
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeItem = (item) => {
    const index = cartItems.findIndex((i) => i.id === item.id);
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const decrementQuantity = (item) => {
    const index = cartItems.findIndex((i) => i.id === item.id);
    const newItems = [...cartItems];
    const updatedItem = { ...newItems[index] };
    if (updatedItem.qty > 1) {
      updatedItem.qty--;
      newItems[index] = updatedItem;
      setCartItems(newItems);
    }
  };

  const incrementQuantity = (item) => {
    const index = cartItems.findIndex((i) => i.id === item.id);
    const newItems = [...cartItems];
    const updatedItem = { ...newItems[index] };
    updatedItem.qty++;
    newItems[index] = updatedItem;
    setCartItems(newItems);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>
              <button onClick={() => decrementQuantity(item)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => incrementQuantity(item)}>+</button>
            </span>
            <span>{item.price * item.qty}</span>
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal()}</p>
      <button onClick={() => addToCart({ id: 4, name: "Item 4 ", price: 25 })}>
        Add Item 4
      </button>
    </div>
  );
};

export default Cart;
