import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Root from "./pages/Root/Root";
import NotFound from "./pages/NotFound/NotFound";
import { withContextProvider } from "./store/Provider";
import Slideshow from "./pages/Root/Slideshow";

ReactDOM.render(
  <React.StrictMode>
    {withContextProvider(() => {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/slideshow" component={Slideshow} />
            <Route path="/" component={Root} />
            <Route path="*" render={NotFound} />
          </Switch>
        </BrowserRouter>
      );
    })({})}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
