import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button,Modal} from 'react-bootstrap';
import '../Assets/Style/Dashboard.scss';
import { updateProduct } from '../Actions/product.action';
import { Redirect } from 'react-router';



const UpdateProduct = ({Show,data}) => {
    console.log(Show)
    console.log(data)
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    setShow(Show);
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

    const update = () =>{
       
        if(name || id || price){
            
          let confirm = window.confirm('Do you want to create');
          if(confirm){
            let datas ={
              id,
              name,
              price
            }
            dispatch(updateProduct(datas));
          }
        }else{
            setError('Please fill all fields');
        }
    }
    return (
        <div>
             
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
            <input defaultValue={data.name} type="text" onChange={(e)=> setName(e.target.value)}/>
            </fieldset>
            <fieldset>
            <label>Id</label>
            <input defaultValue={data.id} type="text" onChange={(e)=> setId(e.target.value)}/>
            </fieldset>
            <fieldset>
            <label>Price</label>
            <input defaultValue={data.price} type="text" onChange={(e)=> setPrice(e.target.value)}/>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>update()}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default UpdateProduct

