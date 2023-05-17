import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewContact } from './pages/NewContact';
import { EditContact } from './pages/EditContact';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new-contact" component={NewContact} />
      <Route path="/edit-contact/:id" component={EditContact} />
    </Switch>
  );
}
