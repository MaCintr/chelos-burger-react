import { Modal, Button, Image } from "react-bootstrap";

const ItemModal = ({ show, onHide, name, desc, price, discount, img, isVegan, containsGluten }) => {

    // const handleClose = () => setShow(false);

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
            <Modal.Body className="d-flex align-items-center">
                <Image width={300} rounded fluid src={img} alt={name}/>
                <div className="ms-3">
                    <h2>{name}</h2>
                    <div className="d-flex">
                        {discount === 0 ? (<h3 className="m-1 fs-3">R${price.toFixed(2)}</h3>) : (
                            <h5 className="m-1"><span className="text-decoration-line-through">R${price.toFixed(2)}</span><br /><span className="text-success fs-3">R${(price * (100 - discount) / 100).toFixed(2)}</span></h5>
                        )}
                        <div>
                            {isVegan && <img className="m-1" style={{ filter: 'invert(85%)' }} src="images/vegan-burger.png" alt="Vegan" width={35} title="Vegano" />}
                            {!containsGluten && <img className="m-1" style={{ filter: 'invert(85%)' }} src="images/gluten-free.png" alt="Vegan" width={35} title="Não contém glúten" />}
                        </div>
                    </div>
                    <p>
                        {desc}
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <p>Imagens da internet</p>
                <Button onClick={onHide}>Adicionar à Sacola <i className="bi bi-plus-circle"></i></Button>
            </Modal.Footer>
        </Modal>
    );
}


export default ItemModal