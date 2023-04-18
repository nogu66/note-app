import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/App';
import { Header } from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<RouterProvider router={router} />
	</React.StrictMode>
);
