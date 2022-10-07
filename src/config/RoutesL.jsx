import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalogue from '../pages/Catalogue';
import Details from '../pages/Details';

const RoutesL = () => {
  return (
    <Switch>
      <Route path='/:category/search/:keyword'component={Catalogue} />

      <Route path='/:category/:id' component={Details} />

      <Route path='/:category' component={Catalogue} />

      <Route path='/' exact component={Home} />
    </Switch>
  )
}

export default RoutesL