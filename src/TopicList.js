import React from 'react';
import { Link } from './Link';
import { Route } from './Route';
import { Topic } from './Topic';

export const TopicList = ({ match }) => {
  const items = [
    { name: 'Rendering with React', slug: 'rendering' },
    { name: 'Components', slug: 'components' },
    { name: 'Props vs. state', slug: 'props-vs-state' },
  ];
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {items.map(({ name, slug }) => (
          <li key={name}>
            <Link to={`${match.url}/${slug}`}>{name}</Link>}
        </li>
        ))}
      </ul>
      {
        items.map(({ name, slug }) => (
          <Route key={name} path={`${match.path}/${slug}`} render={() => (<Topic id={name} />)} />
        )
        )
      }
      <Route exact path={match.url} render={() => <h3>Please select a topic</h3>} />
    </div>
  )
}