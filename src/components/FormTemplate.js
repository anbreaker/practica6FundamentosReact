import React from 'react';
import {Form, Button} from 'react-bootstrap';

function FormTemplate() {
  return (
    <React.Fragment>
      <div className="container container p-4 form-sign">
        <div className="jumbotron">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Advert Name</Form.Label>
              <Form.Control type="text" placeholder="Enter advert name" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Buy / Sell</Form.Label>
              <Form.Control type="text" placeholder="Enter buy or sell" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Cost</Form.Label>
              <Form.Control type="text" placeholder="Enter Cost" />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
              <Form.Label>Photo (with extension: jpeg | jpg | png | gif)</Form.Label>
              <Form.File
                id="custom-file"
                label="Select Photo, file must be smaller than 1mb"
                custom
              />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormTemplate;
