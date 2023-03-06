import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css'; 
import './styles.css'; 
import { Provider } from 'react-redux';
import { store } from './store';


const el = document.getElementById('root'); 
const root = createRoot(el); 

root.render(
<Provider store={store}>
    <App />
</Provider>)