import { DarkModeIcon, LightModeIcon } from "@/assets/icons";
import { Navbar, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Switch } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "next-themes";
import { useState } from "react";

export const NavbarComponent = () => {
	const mode = localStorage.getItem("theme");
	const [isExpanded, setExpanded] = useState(false);
	const [isDarkMode, setDarkMode] = useState(mode === "dark" ? true : false);
	const { setTheme } = useTheme();

	const updateMode = (isSelected: boolean) => {
		setDarkMode(isSelected);
		setTheme(!isSelected ? "light" : "dark");
	};

	return (
		<Navbar
			isBordered
			classNames={{
				item: "data-[active=true]:text-primary",
				wrapper: "px-4 sm:px-6",
			}}
			height="64px"
			isMenuOpen={isExpanded}
			onMenuOpenChange={setExpanded}
		>
			<NavbarMenuToggle className="mr-2 h-6 " />
			<NavbarMenu>
				<div className="max-w-[1024px] px-4 sm:px-6 w-full flex flex-col gap-y-5 sm:mx-auto">
					<NavbarMenuItem onClick={() => setExpanded(false)}>
						<Link className="w-full hover:font-bold" to="/">
							Logg inn
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem onClick={() => setExpanded(false)}>
						<Link aria-current="page" className="w-full hover:font-bold" to="/">
							Hjem
						</Link>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
			<Switch
				color="default"
				thumbIcon={isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
				isSelected={isDarkMode}
				onValueChange={updateMode}
				aria-label="Dark mode"
			/>
		</Navbar>
	);
};
