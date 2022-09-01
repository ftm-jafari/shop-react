import {Row , Col} from 'reactstrap';
import Skeleton ,{ SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const LoadingCard = () => {
    return (    
        <Col className='mt-4'> 
        <div className=" rounded overflow-hidden shadow-lg" style={{Height: 500}}>
          <SkeletonTheme baseColor='#e3e4e6' highlightColor='#d4d5d6' >
          <Skeleton className="mb-4" height={200} />
          <Skeleton className="m-2" width={"30%"} height={15}/>
          <Skeleton className="m-2" width={"94%"} height={60} /><br/>
          <Skeleton className="m-2" width={"94%"} height={50}/>
          <Skeleton className="m-2" width={"94%"} height={30}/>
          </SkeletonTheme>
        </div>
        </Col>
       );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6, 7, 8];
    return(
       <>
        <Row  md={4} xs={1} sm={2}>
          {loadPages.map((num , index) => {return <LoadingCard key={index}/>})}
          </Row>
       </>
    );
}