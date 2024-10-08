import React, { useState } from 'react';
import { ListGroup, Form, InputGroup } from 'react-bootstrap';
import ItemModal from './ItemModal';

const FormSearch = ({ items }) => {

    const nullItem = {
        "id": 99,
        "image": "none",
        "name": "none",
        "description": "none",
        "price": 0.0,
        "discount": 0,
        "isVegan": false,
        "containsGluten": true
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [currentItem, setCurrentItem] = useState(nullItem)
    const [filteredItems, setFilteredItems] = useState([]);
    const [show, setShow] = useState(false);
    const handleShow = (item) => {
        setCurrentItem(item)
        setShow(true)

    }
    if (items) {
        const products = [
            ...items.Burgers,
            ...items.Aperitivos,
            ...items.Saladas,
            ...items.Sobremesas,
            ...items.Bebidas
        ];

        const handleInputChange = (event) => {
            const term = event.target.value;
            setSearchTerm(term);

            if (products && term !== '') {
                const allItems = Object.values(products).flat();
                const normalizedTerm = term.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                const results = allItems.filter(item => {
                    const normalizedItemName = item.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    return normalizedItemName.toLowerCase().includes(normalizedTerm.toLowerCase());
                });
                setFilteredItems(results);
            } else {
                setFilteredItems([]);
            }
        };

        return (
            <div className="me-2">
                <div>
                    <InputGroup>
                        <Form.Control
                            type="search"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="Pesquisar item..."
                            aria-label="Pesquisar"
                        />
                    </InputGroup>
                </div>
                <div className='position-absolute z-3'>
                    {filteredItems.length > 0 && (
                        <div className='z-3' style={{ maxHeight: '200px', overflowY: 'auto', cursor: 'pointer' }}>
                            <ListGroup>
                                {filteredItems.map(item => (
                                    <ListGroup.Item
                                        onClick={() => handleShow(item)}
                                        key={item.id}>
                                        <img src={item.image} alt={item.name} width="50" className="me-2" />
                                        {item.name} - R$ {(item.price * (100 - item.discount) / 100).toFixed(2)}
                                    </ListGroup.Item>

                                ))}
                            </ListGroup>
                        </div>
                    )}
                </div>
                <ItemModal
                    show={show}
                    onHide={() => setShow(false)}
                    name={currentItem.name}
                    desc={currentItem.description}
                    price={currentItem.price}
                    discount={currentItem.discount}
                    img={currentItem.image}
                    isVegan={currentItem.isVegan}
                    containsGluten={currentItem.containsGluten}
                />
            </div>
        );
    }

    return null;
}

export default FormSearch;
