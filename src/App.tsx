import { Outlet } from "@tanstack/react-router";
import "./index.css";
import { NavbarComponent } from "./components/Navbar";

export const App = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<NavbarComponent />

			<div className="w-full">
				<Outlet />
			</div>
		</div>
	);
};

export default App;
