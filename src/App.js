import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter} from "react-router-dom/cjs/react-router-dom.min";
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Header from "./Header/Header";
import Register from "./Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Shipping from "./Shipping/Shipping";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PlaceOrder from "./PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
