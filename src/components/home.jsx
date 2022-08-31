import Products from './products';
import { Slideshow } from './slider/slider';
import '../css/style.css'
import { LoadingPosts } from './lazyLoad/loadingCard';

const Home = () => { 
    return (
         <>
              <Slideshow/>
              <Products/>
         </>
    );
}
 
export default Home;