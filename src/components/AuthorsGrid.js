import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';



function AuthorsGrid() {
  const authors = [
    { name: 'Theodore Roosevelt', image: 'https://cdn.britannica.com/13/119413-050-CA628E88/Portrait-canvas-oil-Theodore-Roosevelt-John-Singer-1903.jpg?w=400&h=300&c=crop' },
    { name: 'Robert Frost', image: 'https://cdn.britannica.com/77/11677-050-42940CFD/Robert-Frost-1954.jpg?w=400&h=300&c=crop' },
    { name: 'Edward Bulwer-Lytton', image: 'https://cdn.britannica.com/08/30708-050-BC5182C8/oil-painting-detail-Edward-George-Earle-Bulwer-Lytton-1831.jpg?w=400&h=300&c=crop' },
    { name: 'Mahatma Gandhi', image: 'https://cdn.britannica.com/91/82291-050-EB7A276A/Mohandas-K-Gandhi-leader-Mahatma-Indian.jpg?w=400&h=300&c=crop' },
    { name: 'Nelson Mandela', image: 'https://cdn.britannica.com/67/75567-050-4EBBE84D/Nelson-Mandela.jpg?w=400&h=300&c=crop' },
    { name: 'Thomas Edison', image: 'https://cdn.britannica.com/56/156-050-7C1C1C60/Thomas-Alva-Edison-tinfoil-phonograph-photograph-Mathew-1878.jpg?w=400&h=300&c=crop' },
    { name: 'Albert Einstein', image: 'https://cdn.britannica.com/09/75509-050-86D8CBBF/Albert-Einstein.jpg?w=400&h=300&c=crop' },
    { name: 'Winston Churchill', image: 'https://cdn.britannica.com/35/7535-050-06374DF8/Winston-Churchill-Yousuf-Karsh-1941.jpg?w=400&h=300&c=crop' },
  ];

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Card style={{}}>
            <Card.Img variant="top" src={authors[0].image} />
            <Card.Body>
              <Card.Title>{authors[0].name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={authors[1].image} />
            <Card.Body>
              <Card.Title>{authors[1].name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={authors[2].image} />
            <Card.Body>
              <Card.Title>{authors[2].name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={authors[3].image} />
            <Card.Body>
              <Card.Title>{authors[3].name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={authors[4].image} />
            <Card.Body>
              <Card.Title>{authors[4].name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={authors[5].image} />
            <Card.Body>
              <Card.Title>{authors[5].name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={authors[6].image} />
            <Card.Body>
              <Card.Title>{authors[6].name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={authors[7].image} />
            <Card.Body>
              <Card.Title>{authors[7].name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthorsGrid;