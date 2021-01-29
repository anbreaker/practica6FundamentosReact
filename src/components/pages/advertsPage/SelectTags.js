import React from 'react';
import {Form} from 'react-bootstrap';

export const SelectTags = () => {
  return (
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
  );
};
