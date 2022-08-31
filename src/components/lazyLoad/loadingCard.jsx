import {Container , Row , Col, Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
// import './loading.css';

export const LoadingCard = () => {
    return (
        <Col className='mb-4'> 
            <div class="w-full rounded overflow-hidden shadow-lg m-2">
            <div class="w-full h-64 bg-gray-300 animate-pulse"></div>
            <div class="px-6 py-4 items-center">
                <div class="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
        </Col>
    );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6, 7, 8];
    return(
      <>
        <Container>
          <Row md={4} xs={1} sm={2}> 
            {loadPages.map(num => {return <LoadingCard/>})}
          </Row>
        </Container>
        </>
    );
}