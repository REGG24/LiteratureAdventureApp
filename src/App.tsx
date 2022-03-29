import { Redirect, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import { AllEmployees } from './components/pages/Employees/AllEmployees';
import { AllClients } from './components/pages/Clients/AllClients';

function App() {
  return (
    <Layout>
      <Switch>
          <Route exact path='/'>
            <Redirect to='/home'/>
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/Employees'>
            <AllEmployees />
          </Route>
          <Route exact path='/Clients'>
            <AllClients/>
          </Route>
      </Switch>
    </Layout>
  );
}

export default App;
