import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Top } from './Top';
import { Note } from './Note';

export const router = createBrowserRouter([
	{ path: '/', element: <Top /> },
	{ path: 'post', element: <Note /> },
]);
