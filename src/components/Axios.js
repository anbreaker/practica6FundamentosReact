import React from 'react';
import axios from 'axios';

const client = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const getAdverts = () => {
  const url = '/api/v1/tweets';
  return client.get(url);
};

class Axios extends React.Component {
  state = {
    adverts: null,
  };

  async componentDidMount() {
    const result = await getAdverts();
    console.log(result, '<-esto');

    this.setState({adverts: result.data});
  }

  render() {
    console.log(this.state);

    const {adverts} = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div>{JSON.stringify(adverts)} ver</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Axios;
