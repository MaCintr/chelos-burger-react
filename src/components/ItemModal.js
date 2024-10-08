import { Modal, Button, Image, FloatingLabel, Form } from "react-bootstrap";
import ItemQtt from "./ItemQtt";
import { useState } from "react";
import AlertComponent from "./AlertComponent";

const ItemModal = ({ show, onHide, name, desc, price, discount, img, isVegan, containsGluten, setShowAlert }) => {

    const handleSubmit = () => {
        setShowAlert(true)
        onHide()
    }

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={onHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Detalhes do Produto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column flex-md-row align-items-center">
                    <div>
                        <Image width={300} rounded src={img} alt={name} />
                    </div>
                    <div className="d-flex flex-column m-3">
                        <h2>{name}</h2>
                        <div className="d-flex align-items-center">
                            {discount === 0 ? (
                                <h3 className="m-1 fs-3">R${price.toFixed(2)}</h3>
                            ) : (
                                <h5 className="m-1">
                                    <span className="text-decoration-line-through">R${price.toFixed(2)}</span><br />
                                    <span className="text-success fs-3">R${(price * (100 - discount) / 100).toFixed(2)}</span>
                                </h5>
                            )}
                            <div>
                                {isVegan && <img className="m-2" style={{ filter: 'invert(85%)' }} src="images/vegan-burger.png" alt="Vegan" width={35} title="Vegano" />}
                                {!containsGluten && <img className="m-2" style={{ filter: 'invert(85%)' }} src="images/gluten-free.png" alt="Não contém glúten" width={35} title="Não contém glúten" />}
                            </div>
                        </div>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="w-100 mt-3">
                    <h5>Observações</h5>
                    <Form.Control className=""
                        as="textarea"
                        placeholder="Exemplo: Sem tomate, sem maionese..."
                        style={{ height: "100px" }}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <div>
                    <p>Imagens da internet</p>
                </div>
                <div>
                    <ItemQtt />
                    <Button className="ms-2" onClick={handleSubmit}>Adicionar à Sacola <i className="bi bi-plus-circle"></i></Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default ItemModal;
