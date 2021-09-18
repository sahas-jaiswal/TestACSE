import React,{useEffect} from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Basket from '../components/Basket';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAllProducts } from '../Actions/product.action';

const Home = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
    
    let products = product.products;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <div className="Home">
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
                <Main products={products} onAdd={onAdd}></Main>
                <Basket
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                ></Basket>
            </div>
        </div>
    )
}

export default Home
