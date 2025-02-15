import React from "react";
import { Card, CardContent, Button, Typography, IconButton } from "@mui/material";
import { Minus, Plus, Trash } from "lucide-react";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Typography variant="h5" className="font-bold mb-4">Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        cart.map((item) => (
          <Card key={item.id} className="p-4 mb-4 shadow-md flex justify-between items-center">
            <CardContent>
              <Typography variant="h6" className="font-semibold">{item.name}</Typography>
              <Typography className="text-gray-700">${item.price}</Typography>
            </CardContent>
            <div className="flex items-center gap-2">
              <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <Minus />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <Plus />
              </IconButton>
              <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                <Trash />
              </IconButton>
            </div>
          </Card>
        ))
      )}
      {cart.length > 0 && <Button variant="contained" color="primary">Checkout</Button>}
    </div>
  );
};

export default Cart;
