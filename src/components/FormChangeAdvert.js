import React, {useState} from 'react';
import {
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Jumbotron,
  Container,
} from 'react-bootstrap';

function FormChangeAdvert({uploadImage = false, onFilterChange = () => {}}) {
  const [adName, setAdName] = useState('');
  const [onSale, setOnSale] = useState(true);
  const [cost, setCost] = useState(0);
  const [file, setFile] = useState();
  const [tags, setTags] = useState([]);

  function onChangeAdvertName(event) {
    setAdName(event.target.value);
  }

  function onChangeCost(event) {
    setCost(event.target.value);
  }

  function onChangeSaleBuy(event) {
    if (event.target.id === 'buyBtn') setOnSale(false);
    if (event.target.id === 'saleBtn') setOnSale(true);
  }

  console.log(cost);

  return (
    <React.Fragment>
      <Container className="p-4 form-sign">
        <h1>New Advert</h1>
        <Jumbotron>
          <Form onSubmit={() => onFilterChange({})}>
            <Form.Group onChange={onChangeAdvertName}>
              <Form.Label>Advert Name</Form.Label>
              <Form.Control type="text" placeholder="Enter advert name" required />
            </Form.Group>

            <Form.Row>
              <Form.Group className="col-8" onChange={onChangeCost}>
                <Form.Label>Cost €</Form.Label>
                <Form.Control type="number" placeholder="Enter Cost €" required />
              </Form.Group>

              <Form.Group className="col-4">
                <Form.Label>Select Buy or Sale Product:</Form.Label>
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="mr-2" aria-label="First group">
                    <Button
                      className="btn btn-sm btn-secondary"
                      onClick={onChangeSaleBuy}
                      id="buyBtn">
                      Buy
                    </Button>
                    <Button
                      className="btn btn-sm btn-primary"
                      onClick={onChangeSaleBuy}
                      id="saleBtn">
                      Sale
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group className="col-5">
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

              <Form.Group className="col-7">
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

export default FormChangeAdvert;
