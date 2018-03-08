import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'grid-system-react';

import {Characters, CharacterDetail } from 'containers/character';

const route = window.location.host === "dkamine.github.io" ? "/react-responsive" : "";

const Routes = [
  {
    "path": `${route}/`,
    "component": Characters,
  },
  {
    "path": `${route}/characters`,
    "component": Characters,
  },
  {
    "path": `${route}/character/:id`,
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