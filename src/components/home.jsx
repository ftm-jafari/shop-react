import Products from './products';
import { Slideshow } from './slider/slider';
import '../css/style.css'

const Home = () => { 
    return (
         <>
              <Slideshow/>
              <Products/>
         </>
    );
}
 
export default Home;