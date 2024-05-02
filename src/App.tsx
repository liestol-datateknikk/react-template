import { Outlet } from "@tanstack/react-router";
import "./index.css";

export const App = () => {
	return (
		<div className="min-h-screen min-w-full">
			<Outlet />
		</div>
	);
};

export default App;
