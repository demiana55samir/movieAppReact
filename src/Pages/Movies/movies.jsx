import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';

const Movies =()=>{
    const [movies,setMovies] = useState([])
     const navigate = useNavigate()

     useEffect(() => {
    
        axiosInstance.get('/products',{
          headers:{'content-type': 'application/json'},
          params:{
            limit:5
          }

        }).then((res)=>{
        //    console.log(res.data);
        setProducts(res.data)
        }).catch((err)=>{
          console.log(err);
        })


    }, [])
    return(
        <Row xs={1} md={4} className="g-4">
        {products.map((prd) => (
          <Col key={prd.id}>
            <Card>
              <Card.Img variant="top" src={prd.image}/>
              <Card.Body>
                <Card.Title>{prd.title}</Card.Title>
                <Card.Text>
                {prd.description}
                </Card.Text>
                <button className="btn btn-primary" onClick={()=>{
                    navigate(`/details/${prd.id}`)
                }}>Details</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
}

export default Movies;