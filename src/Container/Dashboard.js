import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import {Card, Table, Button,Modal} from 'react-bootstrap';
import '../Assets/Style/Dashboard.scss';
import { deleteProduct, getAllProducts, updateProduct } from '../Actions/product.action';
import { Redirect } from 'react-router';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

const Dashboard= () =>{
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [id, setId] = useState('');
    const [updatedId, setUpdatedId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   
    let data = [];
    data = product.products;

    let item =[];
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    if(!window.localStorage.getItem('username')){
        return <Redirect to='/'/>;
    }

    const handleUpdate = (data)=>{
      item = data;
      setUpdatedId(data._id);
      setShow(true);
    }
    
    if(!window.localStorage.getItem('username')){
        return <Redirect to='/'/>;
    }

    const update = () =>{
       
        if(name || id || price){
            
          let confirm = window.confirm('Do you want to update');
          if(confirm){
            let data ={
              updatedId,
              id,
              name,
              price
            }
            dispatch(updateProduct(data));
          }
        }else{
            setError('Please fill all fields');
        }
    }
    const handleDelete = (data) =>{
      const confirm = window.confirm('Do you really want to delete ',data.name)
      if(confirm){
        dispatch(deleteProduct(data._id));
      }
    }
    return (
        <div className="dashboard">
            <Header/>
            <AddProduct/>
            <Card >
              <Card.Header>
                <Card.Title tag="h4">All Products</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table className="tablesorter" responsive>
                  <thead style={{ color: "#0DB8DE" }}>
                    <tr>
                      <th>Action</th>
                      <th>Name</th>
                      <th>Id</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <thead style={{ color: "#6C6C6C" }}>
                    {data.map(data => {
                      return (
                        <tr key={data._id}>
                          <th><i class="fa fa-trash" aria-hidden="true" onClick={()=>handleDelete(data)}></i><i class="fa fa-pencil" aria-hidden="true" onClick={()=>handleUpdate(data)}></i></th>
                          <td>{data.name}</td>
                          <td>{data.id}</td>
                          <td>{data.price}</td>
                        </tr>
                      );
                    })}
                  </thead>
                </Table>
              </Card.Body>
          </Card > 

           <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(error)?<p style={{color:'red'}}>{error}</p>:null}
          {(product.message)?<p style={{color:'green'}}>{product.message}</p>:null}
          {(product.error)?<p style={{color:'red'}}>{product.error}</p>:null}
          <form>
            <fieldset>
            <label>Name</label>
            <input defaultValue={item.name} value={name} type="text" onChange={(e)=> setName(e.target.value)}/>
            </fieldset>
            <fieldset>
            <label>Id</label>
            <input defaultValue={item.id} value={id} type="text" onChange={(e)=> setId(e.target.value)}/>
            </fieldset>
            <fieldset>
            <label>Price</label>
            <input defaultValue={item.price} value={price} type="text" onChange={(e)=> setPrice(e.target.value)}/>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>update()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>        
        </div>
    )
}

export default Dashboard
