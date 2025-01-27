import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import publicApiService from './services/publicApi.service';
const Dashboard = () => {
  const [details,setDetails] = useState(null);

  useEffect(()=>{
    const fetchDetails = async ()=>{
      const data = await publicApiService.getDashboardDetails();
      setDetails(data);
    }
    fetchDetails();
  },[])
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>

      { details && details.map((item)=>( <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title> 
              <Card.Text>{item.country}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))
  }
        </Row>
        {/* <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Column 2</Card.Title>
              <Card.Text>
                Content for the second column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Column 3</Card.Title>
              <Card.Text>
                Content for the third column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Column 4</Card.Title>
              <Card.Text>
                Content for the fourth column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Column 5</Card.Title>
              <Card.Text>
                Content for the fifth column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Dashboard;
