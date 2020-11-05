// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// redux (helpers)
import { reducer } from './store/reducers';

// components
import App from './App';

// stylesheet
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
