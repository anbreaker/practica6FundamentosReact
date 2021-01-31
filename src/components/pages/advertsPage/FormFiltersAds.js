import React, {useState} from 'react';
import {Button, Container, Form, Jumbotron} from 'react-bootstrap';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

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

  const applyFilters = (event) => {
    event.preventDefault();

    if (onSale === 'buy') onFilterChange({adName, onSale: true, cost, tags});
    if (onSale === 'sale') onFilterChange({adName, onSale: false, cost, tags});
    if (onSale === 'all') onFilterChange({adName, onSale: '', cost, tags});
  };

  return (
    <React.Fragment>
      <Container className="p-4">
        <h1>Filters Adverts</h1>
        <Jumbotron>
          <Form onSubmit={applyFilters}>
            <Form.Row>
              <Form.Group className="col-6">
                <Form.Label>Advert Name</Form.Label>
                <Form.Control
                  name="adName"
                  value={adName}
                  type="text"
                  placeholder="Enter advert name (It is Sensitive Case)"
                  onChange={handleInputChange}
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
                  <Form.Check
                    label="All Products"
                    className="ml-4 mt-2"
                    inline
                    type="radio"
                    name="onSale"
                    value="all"
                    checked={onSale === 'all'}
                    onChange={handleInputChange}
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
