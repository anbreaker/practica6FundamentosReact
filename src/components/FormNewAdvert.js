import React from 'react';
import {Form, Button, Jumbotron, Container} from 'react-bootstrap';

function FormNewAdvert({uploadImage = false, onFilterChange = () => {}}) {
  return (
    <React.Fragment>
      <Container className="p-4 form-sign">
        <h1>New Advert</h1>
        <Jumbotron>
          <Form onSubmit={() => onFilterChange({})}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Advert Name</Form.Label>
              <Form.Control type="text" placeholder="Enter advert name" required />
            </Form.Group>

            <Form.Row>
              <Form.Group className="col-8" controlId="formBasicPassword">
                <Form.Label>Buy or Sell</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter true for buy an false for Sell"
                  required
                />
              </Form.Group>
              <Form.Group className="col-4" controlId="formBasicPassword">
                <Form.Label>Cost €</Form.Label>
                <Form.Control type="text" placeholder="Enter Cost €" required />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group className="col-5" controlId="formBasicRange">
                <Form.Label>Select Tags:</Form.Label>
                {['checkbox'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Tecnology"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Developer"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check inline label="Work" type={type} id={`inline-${type}-2`} />
                    <Form.Check
                      inline
                      label="lifestyle"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form.Group>

              <Form.Group className="col-7" controlId="formBasicRange">
                <Form.Label>Photo (with extension: jpeg | jpg | png | gif)</Form.Label>
                <Form.File
                  id="custom-file"
                  label="Select Photo, file must be smaller than 1mb"
                  custom
                />
              </Form.Group>
            </Form.Row>
            <div className="text-center">
              <Button className="btn btn-info btn-lg mt-2" type="submit">
                Upload New Advert
              </Button>
            </div>
          </Form>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
}

export default FormNewAdvert;
