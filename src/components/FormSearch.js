import React, { useState } from 'react';
import { ListGroup, Form, InputGroup } from 'react-bootstrap';

const FormSearch = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

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
                const normalizedTerm = term.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos
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
            <div className="me-2 position-fixed">
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
                {filteredItems.length > 0 && (
                    <div className='z-3' style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        <ListGroup>
                            {filteredItems.map(item => (
                                <ListGroup.Item key={item.id}>
                                    <img src={item.image} alt={item.name} width="50" className="me-2" />
                                    {item.name} - {item.description} - R$ {item.price}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                )}
            </div>
        );
    }

    return null; // Adicione um retorno padrão se `items` não estiver disponível
}

export default FormSearch;
