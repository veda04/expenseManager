import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import AllTransaction from './component/AllTransaction';

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<AllTransaction/>} exact={true} />
			<Route path="/AllTransaction" element={<AllTransaction/>} exact={true} />
			<Route element={<AllTransaction/>} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;