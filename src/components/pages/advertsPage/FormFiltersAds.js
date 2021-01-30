import React, {useState} from 'react';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Button, Container, Form, Jumbotron} from 'react-bootstrap';

import {SelectTags} from './SelectTags';
import {useForm} from '../../../hooks/useForm';

export const FormFiltersAds = ({onFilterChange = () => {}}) => {
  const [filterValues, handleInputChange] = useForm({
    adName: '',
    onSale: 'buy',
    tags: [],
  });
  const [cost, setCost] = useState([1, 40]);

  const {adName, onSale, tags} = filterValues;

  const clickTags = (event) => {
    const {checked, name} = event.target;
    if (checked) {
      handleInputChange({target: {value: [...tags, name], name: 'tags'}});
    } else {
      handleInputChange({target: {value: [], name: 'tags'}});
    }
  };

  const valueSlider = (value) => {
    setCost([value[0], value[1]]);
  };

  return (
    <React.Fragment>
      <Container className="p-4">
        <h1>Filters Adverts</h1>
        <Jumbotron>
          <Form>
            <Form.Row>
              <Form.Group className="col-6">
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

              <Form.Group className="col-6 slidecontainer">
                <Form.Label>Value Max</Form.Label>
                <Range
                  className="mt-3"
                  allowCross={false}
                  defaultValue={[20, 50]}
                  onChange={valueSlider}
                />
                <br />
                <h5 className="text-center text-xl">
                  Value between: {`${cost[0] * 100} - ${cost[1] * 100}`}
                </h5>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group className="col-6" name="tags">
                <Form.Label>Select On Buy / Sale or Search all Products:</Form.Label>

                <div className="mt-2 mb-3">
                  <Form.Check
                    inline
                    label="Buy Products"
                    type="checkbox"
                    name="buy"
                    // checked={tags.includes('technology')}
                    // onChange={clickTags}
                  />
                  <Form.Check
                    inline
                    label="Sale Products"
                    type="checkbox"
                    name="sale"
                    // checked={tags.includes('developer')}
                    // onChange={clickTags}
                  />
                  <Form.Check
                    inline
                    label="All Products"
                    type="checkbox"
                    name="all"
                    // checked={tags.includes('developer')}
                    // onChange={clickTags}
                  />
                </div>
              </Form.Group>

              <SelectTags clickTags={clickTags} />
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
};
