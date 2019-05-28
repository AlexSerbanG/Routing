import React, { Component } from 'react';
import { Link } from './Link';
import { Route } from './Route';
import { Home } from './Home';
import { About } from './About';
import { TopicList } from './TopicList';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={TopicList} />
      </div>
    );
  }
}

export default App;
