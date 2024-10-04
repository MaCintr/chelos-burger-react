import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemQtt = () => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <ButtonGroup>
      <Button onClick={decrement} variant="primary">
        <i className='bi bi-dash'></i>
      </Button>
      <Button variant="primary" style={{width: '50px'}}>{quantity}</Button>
      <Button onClick={increment} variant="primary">
        <i className='bi bi-plus'></i>
      </Button>
    </ButtonGroup>
  );
}

export default ItemQtt;
