import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {HomeTwoTone, TagsTwoTone, ShoppingTwoTone, AlertTwoTone, ProfileTwoTone} from '@ant-design/icons';
function Footer(){
    return (
        <div className="fixed-bottom" style={{overflow:'hidden'}}>
            <Container>
                <Row className="justify-content-center">
                    <Col sm={7} lg={5} className="border-top bg-white" style={{height:55}}>
                        <Row style={{height:"100%",fontSize:25, textAlign:'center'}}>
                            <Col  as={Link} to="/">
                                <HomeTwoTone/>
                            </Col>
                            <Col as={Link} to="/promo">
                                <TagsTwoTone />
                            </Col>
                            <Col  as={Link} to="/user/cart">
                                <ShoppingTwoTone />
                            </Col>
                            <Col  as={Link} to="/user/favourite">
                                <AlertTwoTone />
                            </Col>
                            <Col  as={Link} to="/user/profile">
                                <ProfileTwoTone/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;