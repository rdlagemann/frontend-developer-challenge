import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker'
import Root from './screens'

const store = configureStore()

render(<Root store={store} />, document.getElementById('root'))

serviceWorker.unregister()
