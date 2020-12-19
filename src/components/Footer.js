import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true} className="">
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        © 2020 by Nile Camai
                    </Col>
                    <Col classname="p-0 d-flex justify-content-end" md={3} sm={12}>
                        Created with love by Nile Camai
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;