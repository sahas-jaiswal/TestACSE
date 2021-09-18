import React,{useEffect, useState} from 'react';
import data from '../data';
import {Button} from 'react-bootstrap';

export default function Basket(props) {
  const { offers } = data;
  const { cartItems, onAdd, onRemove } = props;
  let itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const[promocode, setPromocode] = useState('');
  const[discount, setDiscount] = useState('');
  
  let totalPrice = itemsPrice + taxPrice + shippingPrice;

  useEffect(()=>{
    if(totalPrice>5000){
      setPromocode('PROMO10');
      setDiscount('10%')
      totalPrice = totalPrice- (totalPrice*0.10);
      if(totalPrice>10000){
        setPromocode('PROMO20');
        setDiscount('20%')
          totalPrice = totalPrice- (totalPrice*0.10);
      }
  }else{
    setPromocode('');
    setDiscount('');
   }
  },[totalPrice]);
      
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button id="btn" onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button id="btn" onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            {(promocode)?<div className="row">
              <div className="col-2">Promocode</div>
              <div className="col-1 text-right">
                {promocode} {discount}
              </div>
            </div>:null}

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>


            <hr />
            <div className="row">
              <Button variant="success">Checkout</Button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
