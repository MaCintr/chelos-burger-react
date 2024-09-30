import { useState } from "react"
import { Button, Card, ListGroup } from "react-bootstrap"

const Item = ({ name, desc, price, img, isVegan, containsGluten }) => {

    const [imgClass, setImgClass] = useState('filter: none')

    return (
        <div>
            <Card style={{ width: '18rem', height: '28rem' }} className="border-secondary m-3">
                <div className="overflow-hidden rounded-top" style={{ height: '200px' }}>
                    <Card.Img variant="top" style={{ transform: 'translateY(-40px)' }} src={img} />
                </div>
                <Card.Body>
                    <Card.Title className="fs-4">{name}</Card.Title>

                    <Card.Text className="d-flex justify-content-between align-items-center border-start-0 border-end-0">
                        <h3 className="m-1 fs-3">R${price}</h3>
                        <div>
                            {isVegan && <img className="m-1" style={{ filter: 'invert(85%)' }} src="images/vegan-burger.png" alt="Vegan" width={35} />}
                            {containsGluten && <img className="m-1" style={{ filter: 'invert(85%)' }} src="images/gluten-free.png" alt="Vegan" width={35} />}
                        </div>
                    </Card.Text>


                    <Card.Text>{desc}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button variant="primary">Detalhes</Button>
                        <Button variant="primary"><i className="bi bi-plus-circle"></i></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item