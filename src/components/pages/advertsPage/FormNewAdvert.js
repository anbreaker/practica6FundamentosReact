import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Jumbotron,
  Container,
} from 'react-bootstrap';

import {useGetSessionDetails} from '../../../context/AuthContext';
import {createNewAdvert} from '../../../helpers/fetchApi';

export const FormNewAdvert = ({uploadImage = false, onFilterChange = () => {}}) => {
  const history = useHistory();
  const [adName, setAdName] = useState('');
  const [onSale, setOnSale] = useState(true);
  const [cost, setCost] = useState(0);
  const [file, setFile] = useState();
  const [tags, setTags] = useState([]);

  const {token} = useGetSessionDetails();

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

  const formSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append('name', adName);
    form.append('onSale', onSale);
    form.append('cost', cost);
    form.append('image', file);
    tags.forEach((tag) => form.append('tags', tag));

    await createNewAdvert(token, form);

    setTimeout(() => {
      history.push('/adverts');
    }, 500);
  };

  return (
    <React.Fragment>
      <Container className="p-4 form-sign">
        <h1>New Advert</h1>
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
              <Form.Group className="col-6">
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

              <Form.Group className="col-6">
                <Form.Label>Photo (with extension: jpeg | jpg | png | gif)</Form.Label>
                <Form.File
                  htmlFor="Select Photography"
                  className="form-control form-control"
                  id="formFileLg"
                  type="file"
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
};
