import React from 'react';
import {Form} from 'react-bootstrap';

export const SelectTags = (props) => {
  const {onChange, value} = props;
  console.log(value, '<--');

  //{target:{value, name}}

  return (
    <Form.Group className="col-6" name="tags">
      <Form.Label>Select Tags:</Form.Label>

      <div className="mt-2 mb-3">
        <Form.Check
          inline
          label="technology"
          type="checkbox"
          name="technology"
          checked={value.includes('technology')}
          onChange={onChange}
        />
        <Form.Check
          inline
          label="developer"
          type="checkbox"
          name="developer"
          checked={value.includes('developer')}
          onChange={onChange}
        />
        <Form.Check
          inline
          label="Work"
          type="checkbox"
          name="work"
          checked={value.includes('work')}
          onChange={onChange}
        />
        <Form.Check
          inline
          label="Lifestyle"
          type="checkbox"
          name="lifestyle"
          checked={value.includes('lifestyle')}
          onChange={onChange}
        />
      </div>
    </Form.Group>
  );
};
