import {Routes, Route} from 'react-router-dom';
import App from "../../App";
import PageNotFound from "../../pages/404";
import PageMain from "../../pages/home";

const RouterConfig = () => {
	return (
		<Routes>
			<Route path="/"
			       element={<App />}
			/>
			<Route index
			       element={<PageMain />}
			/>
			<Route path="*"
			       element={<PageNotFound />}
			/>
		</Routes>
	)
}

export default RouterConfig;