import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MobileDesktopSwitch from "./components/MobileDesktopSwitch";

ReactDOM.render(<MobileDesktopSwitch/>, document.getElementById('root'));
registerServiceWorker();
