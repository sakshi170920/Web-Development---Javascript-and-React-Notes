import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import FunctionalApp from './Containers/FunctionalContainerApp';
import registerServiceWorker from './registerServiceWorker';
//you render an App which is a react component which acts as root element handling all other components
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
