import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import os from 'os';

import Slider from 'react-slick';
import {Row, Col, Image} from 'react-bootstrap';

import ProductHome from './Product.home'

const network = os.networkInterfaces();
const banner = [
    {url:'http://192.168.43.14:5000/image/banner/1.webp'},
    {url:'http://192.168.43.14:5000/image/banner/2.webp'},
    {url:'http://192.168.43.14:5000/image/banner/3.webp'},
    {url:'http://192.168.43.14:5000/image/banner/1.webp'},
    {url:'http://192.168.43.14:5000/image/banner/2.webp'},
    {url:'http://192.168.43.14:5000/image/banner/3.webp'},
];

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
};

const category = [
    {url:'http://192.168.43.14:5000/image/product/product1.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product2.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product3.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product1.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product2.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product3.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product1.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product2.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product3.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product1.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product2.jpg'},
    {url:'http://192.168.43.14:5000/image/product/product3.jpg'},
];

const Home = () => {
    console.log(network)
    return (
        <Row >
            <Col>
                <Slider {...settings}>
                    {banner.map(v => <div><Image  fluid className="pt-2" src={v.url} rounded/></div>)}
                </Slider>
            </Col>
            
            {category.map((v,i) => {
                return <Col xs={4} className="p-1">
                            <ProductHome image={v.url}/>
                        </Col>
            })}        
            
        </Row>
    )
}

export default Home;