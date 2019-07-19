import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScreenHome from './Home'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={ScreenHome} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
