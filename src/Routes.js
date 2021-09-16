import { Router, Redirect } from '@reach/router';
import NotFoundPage from './views/NotFound';
import Transaction from './views/Transaction';

const Routes = () => {
  return (
    <Router>
      <Transaction path="/" />
      <Redirect from="/transaction" to="/" noThrow />
      <NotFoundPage path="*" />
    </Router>
  );
};

export default Routes;
