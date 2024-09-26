import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const NavBarComponent = () => {
    return (
        <div className="d-flex" style={{ width: '100%' }}>
            <Navbar expand={'lg'} className="bg-body-tertiary w-100">
                <Container>
                    <Navbar.Brand><img className="rounded-pill" alt="Chelo's Burger" src="images/chelos-logo.jpg" height={80} width={80} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={'basic-navbar-nav'}></Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Burgers</Nav.Link>
                            <Nav.Link href="#">Acompanhamentos</Nav.Link>
                            <Nav.Link href="#">Bebidas</Nav.Link>
                            <Nav.Link href="#">Sobremesas</Nav.Link>
                            <Nav.Link href="#">Contato</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pesquisar item..."
                                className="me-2"
                                aria-label="Pesquisar"
                            />
                            <Button variant="outline-dark">
                                Pesquisar
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand={'false'} className="bg-body-tertiary">
                <Navbar.Toggle className="me-4" aria-controls={'offcanvasNavbar-expand-false'}><i className="bi bi-bag"></i></Navbar.Toggle>
                <Navbar.Offcanvas
                    aria-labelledby={'offcanvasNavbar-expand-false'}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <h2>Minha Sacola</h2>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="text-center mt-5">
                            <h4>A sacola está vazia...</h4>
                            <i class="bi bi-bag-x" style={{ fontSize: '100px' }}></i>
                            <h5 className="fw-normal">Os itens adicionados aparecerão aqui.</h5>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </div>
    )
}

export default NavBarComponent
