import React from 'react';
import { BrowserRouter, Switch, Route, /*BrowserHistory, Redirect*/ } from "react-router-dom"

//pages
import Pages from './../pages'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products" component={Pages.Product.List} />
        <Route path="/product/create" component={Pages.Product.Create} />
        <Route path="/product/edit" component={Pages.Product.Edit} />
        <Route path="/product/:product_id" component={Pages.Product.Detail} />

        <Route path="/" exact component={Pages.Home} />
        <Route path="/" component={Pages.Page404} />
      </Switch>
    </BrowserRouter>
  )
}