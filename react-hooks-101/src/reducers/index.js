import React from 'react';

const event = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const id = state.length + 1;

      return [...state, { id: id, ...event }];
    case 'DELETE_EVENT':
      return state;
    case 'DELETE_ALL_EVENT':
      state = [];
    default:
      return [];
  }
  return <div></div>;
};

export default event;
