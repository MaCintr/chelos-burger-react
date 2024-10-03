import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ItemModal from "./ItemModal";

const Item = ({ name, desc, price, discount, img, isVegan, containsGluten }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card style={{ width: '18rem', height: '28rem' }} className="border-secondary m-3">
                <div className="overflow-hidden rounded-top" style={{ height: '200px' }}>
                    <Card.Img variant="top" style={{ transform: 'translateY(-30px)' }} src={img} />
                </div>
                <Card.Body>
                    <Card.Title className="fs-4">{name}</Card.Title>

                    <Card.Text className="d-flex justify-content-between align-items-center border-start-0 border-end-0">
                        {discount === 0 ? (
                            <h3 className="m-1 fs-3">R${price.toFixed(2)}</h3>
                        ) : (
                            <h5 className="m-1">
                                <span className="text-decoration-line-through">R${price.toFixed(2)}</span><br />
                                <span className="text-success fs-3">R${(price * (100 - discount) / 100).toFixed(2)}</span>
                            </h5>
                        )}
                        <div>
                            {isVegan && (
                                <img
                                    className="m-1"
                                    style={{ filter: 'invert(85%)' }}
                                    src="images/vegan-burger.png"
                                    alt="Vegan"
                                    width={35}
                                    title="Vegano"
                                />
                            )}
                            {!containsGluten && (
                                <img
                                    className="m-1"
                                    style={{ filter: 'invert(85%)' }}
                                    src="images/gluten-free.png"
                                    alt="Sem Glúten"
                                    width={35}
                                    title="Não contém glúten"
                                />
                            )}
                        </div>
                    </Card.Text>

                    <Card.Text
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {desc}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button onClick={handleShow} variant="primary">Detalhes</Button>
                        <Button variant="primary"><i className="bi bi-plus-circle"></i></Button>
                    </div>
                </Card.Body>
            </Card>
            <ItemModal
                show={show}
                onHide={() => setShow(false)}
                name={name}
                desc={desc}
                price={price}
                discount={discount}
                img={img}
                isVegan={isVegan}
                containsGluten={containsGluten}
            />
        </div>
    );
};

export default Item;
