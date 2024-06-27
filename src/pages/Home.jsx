import { Container } from "react-bootstrap";
import { ListaProdutos } from "../components/ComponenteListaProdutos";
import CarouselComponent from "../components/ComponenteCarousel";
import { Col, Row } from "react-bootstrap";
import { ComponenteNavbar } from "../components/ComponenteNavBar";

function Home() {
    return (
        <>

                <ComponenteNavbar></ComponenteNavbar>
           
                <CarouselComponent></CarouselComponent>
            
            
           <Container>
            <ListaProdutos></ListaProdutos>
           </Container>
            
            
        </>
        
    );
}

export { Home }