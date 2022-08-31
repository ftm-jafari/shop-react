import {Container , Row , Col, Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
// import './loading.css';

export const LoadingCard = () => {
    return (
         <div className="w-full rounded overflow-hidden shadow-lg m-2">
            <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
            <div className="px-6 py-4 items-center">
                <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
       );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6, 7, 8];
    return(
       <>
          {loadPages.map((num , index) => {return <LoadingCard key={index}/>})}
       </>
    );
}