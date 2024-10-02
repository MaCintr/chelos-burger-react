import LoadingItem from "./LoadingItem"
import { Container, Placeholder } from "react-bootstrap"

const LoadingItemList = () => {
    return (
        <Container className="my-5 z-3">
            <Placeholder className='placeholder-lg' xs={3}/>
            <Container className="overflow-x-scroll d-flex">
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
            </Container>
        </Container>

    )
}

export default LoadingItemList