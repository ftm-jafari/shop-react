import React from 'react';
import'./slide.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CarouselControl,Carousel,CarouselItem, CarouselIndicators, Container,Row} from 'reactstrap';
import { Link } from 'react-router-dom';

  
export function Slideshow () {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const items = [
      {
          src: 'images/slide/cake-space.png',
          caption: 'اسلایس کیک'
          },
          {
          src: 'images/slide/chocolate-cake.png',
          caption: 'کیک شکلاتی براونی'
          },
          {
          src: 'images/slide/chocolate-curl-wood.png',
          caption: 'دونات'
          },
    ];
  
    const itemLength = items.length - 1
  
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem  key={item.src}  onExited={() => setAnimating(false)} onExiting={() => setAnimating(true)} >
              <img src={item.src} alt="img" style={{width:'100%' , height: '400px'}}  className='rounded'/>
            </CarouselItem>
        );
    });
  
    return (
      <Container>
        <Row>
        <div className="mt-4 col-sm-12 col-md-8 col-xl-9 col-lg-8">
            <Carousel previous={previousButton} next={nextButton} activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </div >
       
        <div className='col-sm-12 col-md-4 col-xl-3 col-lg-4 mt-4'>
            <div className='h5'>
                <Link to="/cakes" className='text-decoration-none text-black'>
                   <div className='p-3 baner rounded'>
                      <img className='rounded' src="images/slide/cake1.png" alt=""  style={{width: '85px' , height: '85px'}}/>
                      <span className='m-4 fw-bold'>کیک</span>
                   </div>
                </Link><br/>
                <Link to="/cupcake" className='text-decoration-none text-black'>
                    <div className='p-3 baner rounded'>
                       <img className='rounded' src="images/slide/capcake1.png" alt="" style={{width: '85px' , height: '85px'}} />
                       <span className='m-4 fw-bold'>کاپ کیک</span>
                    </div>
                </Link><br/>
                <Link to="/dessert" className='text-decoration-none text-black'>
                    <div  className='p-3 baner rounded'>
                       <img  className='rounded' src="images/slide/deser1.png" alt=""  style={{width: '85px' , height: '85px'}}/>
                       <span className='m-4 fw-bold'>دسر</span>
                    </div>
                </Link>
             </div>
          </div>
        </Row>
      </Container>
    );
}
  
