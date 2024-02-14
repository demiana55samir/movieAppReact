import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosConfig/instance';
const Details = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    async function getProductById() {
        try {
            const res = await axiosInstance.get(`/products/${id}`)
            // console.log(res);
            setProduct(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {


        getProductById()

    }, [])

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Details;
