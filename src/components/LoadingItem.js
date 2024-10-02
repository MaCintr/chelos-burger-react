import { Card, Placeholder } from "react-bootstrap"

const LoadingItem = () => {
    return (

        <div>
            <Card style={{ width: '18rem', height: '28rem' }} className="border-secondary m-3">
                <div className="overflow-hidden rounded-top" style={{ height: '200px' }}>
                    <Card.Img variant="top" src="images/grey-placeholder.jpg" />
                </div>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    </Placeholder>
                    <div className="d-flex justify-content-between">
                        <Placeholder.Button variant="primary" xs={5} />
                        <Placeholder.Button variant="primary" xs={2} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LoadingItem