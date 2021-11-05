import React from 'react';
import { Container } from 'react-bootstrap';


const Page = ({ content }) => {
    return (
        <Container
            fluid
            className='content d-flex flex-column min-vh-100'
        >   
            {content()}
        </Container>
    );
};

export default Page;
