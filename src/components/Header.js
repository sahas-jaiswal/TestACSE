import React,{useState} from 'react';
import { Modal, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Header(props) {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const[username,setUsername]= useState('');
  const[password,setPassword]= useState('');
  const[error,setError]= useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const login=()=>{
    if(username && password){
      if(username=='john@doe' && password == '1234'){
        window.localStorage.setItem('username',username);
        history.push('/dashboard');
    }else{
      setError('Invalid credential')
    }
    }else{
      setError('Please fill credential')
    }
  }
  return (
    <>
      <header className="Header">
        <div>
          <a href="#/">
            <h1>Small Shopping Cart</h1>
          </a>
        </div>
        <div className="nav-link">
          <a href="#/cart">
            Cart{' '}
            {props.countCartItems ? (
              <button id="btn" className="badge">{props.countCartItems}</button>
            ) : (
              ''
            )}
          </a>{' '}
          <a href="#/signin" onClick={handleShow}></a>
        </div>
      </header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(error)?<p style={{color:'red'}}>{error}</p>:null}
          <form>
            <fieldset>
            <label>Username</label>
            <input type="text" onChange={(e)=> setUsername(e.target.value)}/>
            </fieldset>
            <fieldset>
            <label>Password</label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
            </fieldset>
           
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>login()}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
</>
  );
}
