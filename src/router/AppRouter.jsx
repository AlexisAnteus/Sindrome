import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';
import { Vd } from '../pages/Vd';
import Postea from '../pages/Postea';
import Vse from '../pages/Vse';
import PrivateVideo1 from '../pages/PrivateVideo1';
import PrivateVideo2 from '../pages/PrivateVideo2';
import PrivateVideo3 from '../pages/PrivateVideo3';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route path='vd' element={<Vd />} /> 
					<Route path='vse' element={<Vse />} /> 
					<Route path='post' element={<Postea />} /> 
					{/* <PrivateRoute path='private-video-1' element={<PrivateVideo1 />} />
					<PrivateRoute path='private-video-2' element={<PrivateVideo2 />} />
					<PrivateRoute path='private-video-3' element={<PrivateVideo3 />} />  */}

					<Route path='private-video-1' element={<PrivateVideo1 />} />
					<Route path='private-video-2' element={<PrivateVideo2 />} />  
					<Route path='private-video-3' element={<PrivateVideo3 />} /> 

					{/* <Route path='private-video-1' element={<PrivateRoute><PrivateVideo1 /></PrivateRoute>} />  
                    <Route path='private-video-2' element={<PrivateRoute><PrivateVideo2 /></PrivateRoute>} /> 
                    <Route path='private-video-3' element={<PrivateRoute><PrivateVideo3 /></PrivateRoute>} /> */}
				</Route>
			</Routes>
		</>
	);
};
