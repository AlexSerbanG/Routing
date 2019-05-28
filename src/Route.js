// Packages
import React from 'react';
import PropTypes from 'prop-types';
// Utils
import { matchPath } from './utils';

export class Route extends React.Component {
  static propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string,
    component: PropTypes.func,
    render: PropTypes.func,
  }

  componentWillMount() {
    addEventListener("popstate", this.handlePop);
  }

  componentWillUnmount() {
    removeEventListener("popstate", this.handlePop);
  }

  handlePop = () => {
    this.forceUpdate();
  }

  render() {
    const {
      path,
      exact,
      component,
      render,
    } = this.props;

    const match = matchPath(location.pathname, { path, exact });

    if (!match) {
      return null;
    }

    if (component) {
      return React.createElement(component, { match });
    }

    if (render) {
      return render({ match });
    }

    return null;
  }
}
