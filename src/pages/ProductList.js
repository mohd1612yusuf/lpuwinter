import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";

const products = [
  { id: 1, name: "Smartphone", price: 699 },
  { id: 2, name: "Laptop", price: 1299 },
  { id: 3, name: "Headphones", price: 199 },
  { id: 4, name: "Smartwatch", price: 299 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-50">
      {products.map((product) => (
        <Card key={product.id} className="p-4 shadow-md">
          <CardContent>
            <Typography variant="h6" className="font-semibold">{product.name}</Typography>
            <Typography className="text-gray-700 mb-2">${product.price}</Typography>
            <Button variant="contained" color="secondary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
