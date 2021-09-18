import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { Button,Modal} from 'react-bootstrap';
import '../Assets/Style/Dashboard.scss';
import { createProduct } from '../Actions/product.action';
import { Redirect } from 'react-router';



const AddProduct = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let data = [];
    data = product.products;
    useEffect(()=>{
        if(!product.loading){
            setId('');
            setName('');
            setPrice('');
            setError('');
        }
    },[product.loading]);



    if(!window.localStorage.getItem('username')){
        return <Redirect to='/'/>;
    }

    const create = () =>{
       
        if(name || id || price){
            
          let confirm = window.confirm('Do you want to create');
          if(confirm){
            let data ={
              id,
              name,
              price
            }
            dispatch(createProduct(data));
          }
        }else{
            setError('Please fill all fields');
        }
    }
    return (
        <div>
             <Button className='dash-btn' onClick={handleShow}>Create Product</Button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(error)?<p style={{color:'red'}}>{error}</p>:null}
          {(product.message)?<p style={{color:'green'}}>{product.message}</p>:null}
          {(product.error)?<p style={{color:'red'}}>{product.error}</p>:null}
          <form>
            <fieldset>
            <label>Name</label>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            </fieldset>
            <fieldset>
            <label>Id</label>
            <input type="text" onChange={(e)=> setId(e.target.value)}/>
            </fieldset>
            <fieldset>
            <label>Price</label>
            <input type="text" onChange={(e)=> setPrice(e.target.value)}/>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>create()}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddProduct
