import { Route, Switch } from 'wouter';

import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route>
          <main>
            <h1>404</h1>
            <p>La página que buscas no existe.</p>
          </main>
        </Route>
      </Switch>
    </>
  );
}

export default App;