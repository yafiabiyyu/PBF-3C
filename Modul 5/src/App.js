import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
  Redirect,
  useRouteMatch
} from "react-router-dom";

export default function TugasPbf(){
  return(
    <Router>
      <div>
        <ul>
          <AuthButton/>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/makanan">Makanan</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/makanan">
            <Makan/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/setting">
            <Setting/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

function Home(){
  return(
    <div>
      <h2>Selamat datang</h2>
    </div>
  )
}

function Setting(){
  return(
    <div>
      <h3>Setting</h3>
    </div>
  )
}

function Makan(){
  let {path,url} = useRouteMatch();
  return(
    <div>
      <h2>Daftar Menu</h2>
      <ul>
        <li>
          <Link to={`${url}/Soto Betawi,Es Teh`}>Menu 1</Link>
        </li>
        <li>
          <Link to={`${url}/Sate Madura,Josua`}>Menu 2</Link>
        </li>
        <li>
          <Link to={`${url}/Tahu Telor,Es Durian`}>Menu 3</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Silahkan Pilih Menu</h3>
        </Route>
        <Route path={`${path}/:menuId`}>
          <Menu/>
        </Route>
      </Switch>
    </div>
  )
}

function Menu(){
  let {menuId} = useParams();
  return (
    <div>
      <h3>{menuId}</h3>
    </div>
    
  )
}

const fakeAuth = {
  isAuthenticate:false,
  authenticate(cb){
    fakeAuth.isAuthenticate=true;
    setTimeout(cb,100);
  },
  signout(cb){
    fakeAuth.isAuthenticate=false;
    setTimeout(cb,100)
  }
}

function AuthButton(){
  let history = useHistory();
  return fakeAuth.isAuthenticate?(
    <p>
      Selamat Datang!{" "}
      <button onClick={()=>{
        fakeAuth.signout(()=>history.push("/"));
      }}>Sign Out</button>
    </p>
  ):(
    <p>Kamu belum masuk</p>
  );
}

function PrivateRoute({children, ...rest}){
  return (
    <Route
    {...rest}
    render={({ location }) =>
        fakeAuth.isAuthenticate ? (
          children
        ):(
          <Redirect
            to={{
              pathname:"/login",
              state: {from:location}
            }}
          />
        )
      }
    />
  )
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname:"/" } };
  let login = () => {
    fakeAuth.authenticate(()=>{
      history.replace(from);
    });
  };
  return(
    <div>
      <p>Kamu harus login terlebih dahulu sebelum {from.pathname}</p>
      <button onClick={login}>Log In</button>
    </div>
  )
}