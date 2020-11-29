import React, {useState} from 'react';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container,
  Form,
  Jumbotron,
} from 'react-bootstrap';

function FormFiltersAds({onFilterChange = () => {}}) {
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
              <Form.Group className="col-6">
                <Form.Label>Select On Sale or Search Product:</Form.Label>
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
                    <Button
                      className="btn btn-sm btn-primary"
                      onClick={onChangeSaleBuy}
                      id="allAds">
                      All
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Form.Group>

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
