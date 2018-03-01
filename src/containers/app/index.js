import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container } from 'components/grid';
import {Characters, CharacterDetail } from 'containers/character';

const Routes = [
  {
    "path": "/",
    "component": Characters,
  },
  {
    "path": "/characters",
    "component": Characters,
  },
  {
    "path": "/character/:id",
    "component": CharacterDetail,
  },
];

const App = () => (
  <main>  
    <Container>
      <Switch>
        {Routes.map(({ path, component }, key) =>
          <Route
            key={key}
            exact
            path={path}
            component={component}
          />
        )}
      </Switch>
    </Container>
  </main>
);

export default App;