import React, { useEffect, useRef, useState,useMemo } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import publicApiService from './services/publicApi.service';
import PageNotFound from './pageNotFound';
import { fetchPlacesAction } from './redux/placesAction';
import { useDispatch } from 'react-redux';
import useCounter from './hooks/customHooks/useCounter';
import Mydate from './utils/Mydate';
const Dashboard = () => {
  const [details,setDetails] = useState(null);
  const dispatch = useDispatch();
  const [refresh,setRefresh] = useState(0);
  const clickRefresh = ()=>{
    setRefresh(refresh+1);
  }
  // const {counter,setCounter} = useCounter()
  // const clickIcon = (e)=>{
  //   const element = e.target.getAttribute("data-name");
  //   console.log(element);
  // }
  const componentRef = useRef();
  const currentElement = componentRef.current;
  const clickIcon = useCounter(0,currentElement?.getAttribute("data-name"))


  useEffect(()=>{
    const fetchDetails = async ()=>{
      const data = await publicApiService.getDashboardDetails();
      console.log(data);
      dispatch(fetchPlacesAction(data))
      setDetails(data);
    }
    fetchDetails();
  },[refresh]);

  const memoizedData = useMemo(() => {
    if (!details) return null;

    return details;
  }, [details]);
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <h1>Dashboard</h1>
          <Mydate/>
          <button onClick={clickRefresh}>Refresh</button>
        </Col>
      </Row>
      <Row>

      { memoizedData ? memoizedData.map((item,index)=>( <Col key ={`${'item-'+index}`} md={4}>
          <Card  className="mb-4">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title> 
              <Card.Text>{item.country}<a data-name={item.name} ref={componentRef} href='#' onClick={clickIcon}>+</a>{}</Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
        )):<PageNotFound/>
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
