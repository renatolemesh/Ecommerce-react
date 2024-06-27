import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { GerenciarLogin } from './ComponenteGerenciarLogin';

function ComponenteNavbar() {
  return (
    <div>
      {/* Começo do cabeçalho */}
      <Navbar expand="lg" bg="warning">
        <div className="container align-self-center">
          <Navbar.Brand className="ml-5" href="#">
            <img src="imagens/logo.png" width="50" height="50" alt="E-Shop" />
          </Navbar.Brand>

          <div style={{ width: '50%' }}>
            <Form className="d-flex" role="search">
              <FormControl type="search" placeholder="Pesquise seu produto aqui" aria-label="Search" />
              <Button variant="outline-success" type="submit">Pesquisar</Button>
            </Form>
          </div>

          <Nav className="mr-auto mb-2 mb-lg-0">
            <NavDropdown title={<><span className="bold">R$ 0,00</span> <img src="imagens/carrinho.png" width="20px" alt="" /></>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>

      <div style={{ width: '100%' }} className="bg-warning">
        <div className="container align-self-center">
          <Navbar expand="lg" bg="warning">
            <div className="container-fluid">
              <Navbar.Toggle aria-controls="navbarNavDropdown" />
              <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="me-auto">
                  <NavDropdown title="Todas as categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#" className="dropdown-item dropend">
                      <NavDropdown title="Medicamentos" id="basic-nav-dropdown" className="dropdown-item dropdown-toggle">
                        <NavDropdown.Item href="#">Anti-inflamatórios</NavDropdown.Item>
                        <NavDropdown.Item href="#">Antidepressivos</NavDropdown.Item>
                        <NavDropdown.Item href="#">Anticoncepcionais</NavDropdown.Item>
                        <NavDropdown.Item href="#">Antigripais</NavDropdown.Item>
                        <NavDropdown.Item href="#">Asma</NavDropdown.Item>
                        <NavDropdown.Item href="#">Hipertensão</NavDropdown.Item>
                        <NavDropdown.Item href="#">Colesterol</NavDropdown.Item>
                        <NavDropdown.Item href="#">Calmante</NavDropdown.Item>
                        <NavDropdown.Item href="#">Vitaminas</NavDropdown.Item>
                      </NavDropdown>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" className="dropdown-item dropend">
                      <NavDropdown title="Perfumaria" id="basic-nav-dropdown" className="dropdown-item dropdown-toggle">
                        <NavDropdown.Item href="#">Shampoo</NavDropdown.Item>
                        <NavDropdown.Item href="#">Condicionador</NavDropdown.Item>
                        <NavDropdown.Item href="#">Máscara</NavDropdown.Item>
                        <NavDropdown.Item href="#">Maquiagem</NavDropdown.Item>
                        <NavDropdown.Item href="#">Limpeza de pele</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sabonetes</NavDropdown.Item>
                        <NavDropdown.Item href="#">Perfumes</NavDropdown.Item>
                        <NavDropdown.Item href="#">Desodorantes</NavDropdown.Item>
                        <NavDropdown.Item href="#">Protetor solar</NavDropdown.Item>
                      </NavDropdown>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" className="dropdown-item dropend">
                      <NavDropdown title="Conveniência" id="basic-nav-dropdown" className="dropdown-item dropdown-toggle">
                        <NavDropdown.Item href="#">Bombons</NavDropdown.Item>
                        <NavDropdown.Item href="#">Barras de cereal</NavDropdown.Item>
                        <NavDropdown.Item href="#">Bebidas</NavDropdown.Item>
                        <NavDropdown.Item href="#">Chás</NavDropdown.Item>
                        <NavDropdown.Item href="#">Suplementos</NavDropdown.Item>
                      </NavDropdown>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">Medicamentos</Nav.Link>
                  <Nav.Link href="#">Perfumaria</Nav.Link>
                  <Nav.Link href="#">Conveniência</Nav.Link>
                  <Nav.Link href="#">Manipulação</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                <GerenciarLogin></GerenciarLogin>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
      </div>

      
    </div>
  );
}

export {ComponenteNavbar};
