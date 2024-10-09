import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemQtt = ({ size, qtt, onQuantityChange, item }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (qtt) {
      setQuantity(qtt);
    }
  }, [qtt]);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (item) {
        item.quantity = quantity
        console.log(item)
      }
    }
  };
  
  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      if (item) {
        item.quantity = quantity
        console.log(item)
      }
    }
  };

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(quantity);
    }
  }, [quantity, onQuantityChange]);

  return (
    <ButtonGroup>
      <Button onClick={decrement} size={size} variant="primary">
        <i className='bi bi-dash'></i>
      </Button>
      <Button variant="primary" id="item-qtt" size={size} style={{ width: '50px' }}>{quantity}</Button>
      <Button onClick={increment} size={size} variant="primary">
        <i className='bi bi-plus'></i>
      </Button>
    </ButtonGroup>
  );
}

export default ItemQtt;
