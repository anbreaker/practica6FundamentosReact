import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Form, FormCheck, Button, Jumbotron, Container} from 'react-bootstrap';

import {useGetSessionDetails} from '../../../context/AuthContext';
import {createNewAdvert} from '../../../helpers/fetchApi';
import {useForm} from '../../../hooks/useForm';
import {SelectTags} from './SelectTags';

export const FormNewAdvert = ({uploadImage = false, onFilterChange = () => {}}) => {
  const history = useHistory();

  const {token} = useGetSessionDetails();

  const [file, setFile] = useState();
  const [filterValues, handleInputChange] = useForm({
    adName: '',
    onSale: 'buy',
    cost: 0,
    tags: [],
  });

  const {adName, onSale, cost, tags} = filterValues;

  const clickTags = (event) => {
    const {checked, name} = event.target;

    if (checked) {
      handleInputChange({target: {value: [...tags, name], name: 'tags'}});
    } else {
      handleInputChange({target: {value: [], name: 'tags'}});
    }
  };

  const formSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();

    form.append('name', adName);
    form.append('onSale', onSale === 'buy' ? true : false);
    form.append('cost', cost);
    form.append('image', file);
    tags.forEach((tag) => form.append('tags', tag));

    console.log(form.get('tags'));

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
            <Form.Group>
              <Form.Label>Advert Name</Form.Label>
              <Form.Control
                name="adName"
                value={adName}
                type="text"
                placeholder="Enter advert name"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Row>
              <Form.Group className="col-8">
                <Form.Label>Cost €</Form.Label>
                <Form.Control
                  name="cost"
                  value={cost}
                  type="number"
                  placeholder="Enter Cost €"
                  autoComplete="off"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="col-4">
                <Form.Label className="ml-4">Select Buy or Sale Product:</Form.Label>
                <FormCheck className="form-check ">
                  <Form.Row>
                    <Form.Check
                      label="Buy"
                      className="ml-4 mt-2"
                      type="radio"
                      name="onSale"
                      inline
                      value="buy"
                      checked={onSale === 'buy'}
                      onChange={handleInputChange}
                    />

                    <Form.Check
                      label="Sale"
                      className="ml-4 mt-2"
                      inline
                      type="radio"
                      name="onSale"
                      value="sale"
                      checked={onSale === 'sale'}
                      onChange={handleInputChange}
                    />
                  </Form.Row>
                </FormCheck>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <SelectTags clickTags={clickTags} useForm={useForm} />

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
