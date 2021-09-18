import React from 'react';
import { Button } from 'react-bootstrap';
import '../Assets/Style/Product.scss';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <h4>{product.id}</h4>
      <div>${product.price}</div>
      <div>
        <Button onClick={() => onAdd(product)}>Add To Cart</Button>
      </div>
    </div>
  );
}
