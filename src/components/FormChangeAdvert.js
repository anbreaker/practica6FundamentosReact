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

  const token = localStorage.getItem('token');
  const url = `http://127.0.0.1:3001/api/ads?token=${token}`;

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

  function clickTags(event) {
    if (event.target.checked === false) {
      setTags(tags.filter((tag) => tag !== event.target.id));
    } else {
      setTags((tags) => [...tags, event.target.id]);
    }
  }

  function formSubmit(event) {
    event.preventDefault();
    const form = new FormData();
    form.append('name', adName);
    form.append('onSale', onSale);
    form.append('cost', cost);
    form.append('image', file);
    tags.forEach((tag) => form.append('tags', tag));

    fetch(url, {
      method: 'POST',
      body: form,
    })
      .then((response) => response.json())
      .catch(console.error)
      .then(() => (window.location.href = '/adverts'));
  }

  console.log(adName, cost, onSale, tags);

  return (
    <React.Fragment>
      <Container className="p-4 form-sign">
        <h1>Change Advert</h1>
        <Jumbotron>
          <Form onSubmit={formSubmit}>
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
                      label="technology"
                      type="checkbox"
                      id="technology"
                      onClick={clickTags}
                    />
                    <Form.Check
                      inline
                      label="Developer"
                      type="checkbox"
                      id="developer"
                      onClick={clickTags}
                    />
                    <Form.Check
                      inline
                      label="Work"
                      type="checkbox"
                      id="work"
                      onClick={clickTags}
                    />
                    <Form.Check
                      inline
                      label="lifestyle"
                      type="checkbox"
                      id="lifestyle"
                      onClick={clickTags}
                    />
                  </div>
                ))}
              </Form.Group>

              <Form.Group className="col-7">
                <Form.Label>Photo (with extension: jpeg | jpg | png | gif)</Form.Label>
                <Form.File
                  label="Select Photo, file must be smaller than 1mb"
                  custom
                  onChange={(ev) => setFile(ev.target.files[0])}
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
