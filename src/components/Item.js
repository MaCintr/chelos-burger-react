import { useState } from "react"
import { Button, Card } from "react-bootstrap"

const Item = ({ name, desc, price, discount, img, isVegan, containsGluten }) => {

    const [imgStyle, setImgStyle] = useState('filter: none')

    return (
        <div>
            <Card style={{ width: '18rem', height: '28rem' }} className="border-secondary m-3">
                <div className="overflow-hidden rounded-top" style={{ height: '200px' }}>
                    <Card.Img variant="top" style={{ transform: 'translateY(-40px)' }} src={img} />
                </div>
                <Card.Body>
                    <Card.Title className="fs-4">{name}</Card.Title>

                    <Card.Text className="d-flex justify-content-between align-items-center border-start-0 border-end-0">
                        {discount === 0 ? (<h3 className="m-1 fs-3">R${price.toFixed(2)}</h3>) : (
                            <h3 className="m-1 fs-3"><span className="text-decoration-line-through">R${price.toFixed(2)}</span><br/><span className="text-success">R${(price*(100-discount)/100).toFixed(2)}</span></h3>
                        )}
                        <div>
                            {isVegan && <img className="m-1" style={{ filter: 'invert(85%)' }} src="images/vegan-burger.png" alt="Vegan" width={35} />}
                            {!containsGluten && <img className="m-1" style={{ filter: 'invert(85%)' }} src="images/gluten-free.png" alt="Vegan" width={35} />}
                        </div>
                    </Card.Text>


                    <Card.Text
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >{desc}</Card.Text>
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