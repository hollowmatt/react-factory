import React from 'react';
import ReactDOM from 'react-dom';

const world = React.createElement('em', null, 'world');
const title = React.createElement('h1', null, 'Hello ', world, '!');
const link = React.createElement('a', {href: '//reactjs.org'}, 'Read More');
const group = React.createElement('div', null, title, link);
const domElement = document.getElementById('root');
ReactDOM.render(group, domElement);
