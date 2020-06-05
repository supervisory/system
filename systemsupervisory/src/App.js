import React from 'react'
import Routes from './Routes'
import './styles/global'
import { Provider } from 'react-redux'
import { Store } from './store'

const App = () => <Routes />

React.DOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
, document.getElementById('root'))

export default App