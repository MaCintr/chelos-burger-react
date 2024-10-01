import { Container } from "react-bootstrap"
import Item from "./Item"

const ItemsList = ({ title, items }) => {
    return (
        <Container className="my-5">
            <h1 className="fw-normal">{title}</h1>
            <Container className="overflow-x-scroll d-flex">
                {items.map(item => (
                    <Item
                        key={item.id}
                        name={item.name}
                        desc={item.description}
                        price={item.price}
                        isVegan={item.isVegan}
                        img={item.image}
                        discount={item.discount}
                        containsGluten={item.containsGluten}
                    />
                ))}
            </Container>
        </Container>
    )
}

export default ItemsList