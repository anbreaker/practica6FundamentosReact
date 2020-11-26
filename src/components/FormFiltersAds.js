import React, {useState} from 'react';
import {Form, Button, Container, Jumbotron} from 'react-bootstrap';

function FormFiltersAds({uploadImage = false, onFilterChange = () => {}}) {
  const [adName, setAdName] = useState('');
  const [onSale, setOnSale] = useState(true);
  const [cost, setCost] = useState(0);
  const [file, setFile] = useState();
  const [tags, setTags] = useState('');

  function moveRange() {
    const slider = document.getElementById('myRange');
    const output = document.getElementById('demo');
    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
      setCost(this.value);
    };
  }

  function onChangeCostAdvert(event) {
    setAdName(event.target.value);
  }

  function onChangeSaleSearch(event) {
    //Uno u otro...
    setOnSale(true);
  }

  console.log(cost, adName);
  return (
    <React.Fragment>
      <Container className="p-4">
        <h1>Filters Adverts</h1>
        <Jumbotron>
          <Form onSubmit={() => onFilterChange({})}>
            <Form.Row>
              <Form.Group className="col-6" onChange={onChangeCostAdvert}>
                <Form.Label>Advert Name</Form.Label>
                <Form.Control type="text" placeholder="Enter advert name" />
              </Form.Group>
              <Form.Group className="col-6 slidecontainer" controlId="formBasicEmail">
                <Form.Label>Range</Form.Label>
                <Form.Control
                  className="slider"
                  type="range"
                  min="1"
                  max="10000"
                  id="myRange"
                  onChange={moveRange}
                  custom
                />
                <p>
                  Value: <span id="demo"></span>
                </p>
              </Form.Group>{' '}
            </Form.Row>

            <Form.Row>
              <Form.Group className="col-6" controlId="formBasicRange">
                <Form.Label>Select On Sale or Search Product:</Form.Label>
                {['checkbox'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="On Sale"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Search Product"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form.Group>

              <Form.Group className="col-6" controlId="formBasicRange">
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
            </Form.Row>

            <div className="text-center">
              <Button className="btn btn-info btn-lg mt-2" type="submit">
                Apply Filters
              </Button>
            </div>
          </Form>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
}

export default FormFiltersAds;
