import React, {useState} from 'react';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container,
  Form,
  FormCheck,
  Jumbotron,
} from 'react-bootstrap';
import {SelectTags} from './SelectTags';

export const FormFiltersAds = ({onFilterChange = () => {}}) => {
  const [adName, setAdName] = useState('');
  const [onSale, setOnSale] = useState(true);
  const [cost, setCost] = useState([1, 40]);
  const [tags, setTags] = useState([]);

  function onChangeAdvertName(event) {
    setAdName(event.target.value);
  }

  function onChangeSaleBuy(event) {
    if (event.target.id === 'buyBtn') setOnSale(false);
    if (event.target.id === 'saleBtn') setOnSale(true);
    if (event.target.id === 'allAds') setOnSale('');
  }

  function clickTags(event) {
    if (event.target.checked === false) {
      setTags(tags.filter((tag) => tag !== event.target.id));
    } else {
      setTags((tags) => [...tags, event.target.id]);
    }
  }

  // function Slider
  function log(value) {
    setCost([value[0], value[1]]);
  }

  return (
    <React.Fragment>
      <Container className="p-4">
        <h1>Filters Adverts</h1>
        <Jumbotron>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              onFilterChange({adName, onSale, cost, tags});
            }}>
            <Form.Row>
              <Form.Group className="col-6" onChange={onChangeAdvertName}>
                <Form.Label>Advert Name</Form.Label>
                <Form.Control type="text" placeholder="Enter advert name" />
              </Form.Group>

              <Form.Group className="col-6 slidecontainer">
                <Form.Label>Value Max</Form.Label>
                <Range allowCross={false} defaultValue={[20, 50]} onChange={log} />
                <br />
                <h5 className="text-xl-center">
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

              <Form.Group className="col-6" name="tags">
                <Form.Label>Select Tags:</Form.Label>

                <div className="mt-2 mb-3">
                  <Form.Check
                    inline
                    label="technology"
                    type="checkbox"
                    name="technology"
                    checked={tags.includes('technology')}
                    onChange={clickTags}
                  />
                  <Form.Check
                    inline
                    label="developer"
                    type="checkbox"
                    name="developer"
                    checked={tags.includes('developer')}
                    onChange={clickTags}
                  />
                  <Form.Check
                    inline
                    label="Work"
                    type="checkbox"
                    name="work"
                    checked={tags.includes('work')}
                    onChange={clickTags}
                  />
                  <Form.Check
                    inline
                    label="Lifestyle"
                    type="checkbox"
                    name="lifestyle"
                    checked={tags.includes('lifestyle')}
                    onChange={clickTags}
                  />
                </div>
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
};
