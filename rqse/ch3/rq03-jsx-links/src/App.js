import React, { Component, Fragment } from 'react';

class Link extends Component {
  render() {
    return <p><a href={this.props.url}>{this.props.children}</a></p>;
  }
}

class DateTimeNow extends Component {
  render() {
    const dateTimeNow = new Date().toLocaleString();
    return (
      <span>
          Current date and time is {dateTimeNow}.
      </span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <Link url="//reactjs.org"><strong>react</strong></Link>
        <Link url="//vue.js"><strong>Vue</strong></Link>
        <Link url="//angular.io"><strong>Angular</strong></Link>
        <DateTimeNow />
      </Fragment>
    );
  }
}


export default App;