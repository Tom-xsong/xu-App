import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom"

import asyncComponent from "./util/asyncComponent"

const Index=asyncComponent(()=>import("./pages/index/Index"))
const Login=asyncComponent(()=>import("./pages/login/Login"))
const Rejister=asyncComponent(()=>import("./pages/rejister/Rejister"))
const Detail=asyncComponent(()=>import("./pages/detail/Detail"))








function App() {
  return (
    <div className="App">
        <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/rejister" component={Rejister}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
