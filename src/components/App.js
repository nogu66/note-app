import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Top } from './Top';
import { Post } from './Post';

export const router = createBrowserRouter([
	{ path: '/', element: <Top /> },
	{ path: 'post', element: <Post /> },
]);
