import { Container } from "react-bootstrap"
import Item from "./Item"

const ItemsList = ({ title, items }) => {
    return (
        <Container className="my-5">
            <h1 className="fw-normal">Ofertas do dia</h1>
            <Container className="overflow-x-scroll d-flex">
               {items.forEach(item => {
                 <Item
                 name={item.name}
                 desc={item.desc}
                 price={item.price}
                 img={item.img}
             />
               });}
            </Container>
        </Container>
    )
}

export default ItemsList