import { Button, Link } from "@nextui-org/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Header = (props: any) => {
	return (
		<header
			className="flex justify-center items-center px-5w"
			style={{
				minHeight: "calc(100vh - 65px)",
			}}
		>
			<div className="max-w-screen-sm">
				<div className="flex flex-col gap-5">
					<h1 className="sm:text-8xl text-5xl text-center font-bold">
						{props.data ? props.data.title : "Loading"}
					</h1>
					<p className="sm;text-xl text-lg leading-8 font-light text-center">
						{props.data ? props.data.paragraph : "Loading"}
					</p>
					<Button href="#features" className="w-fit mx-auto" size="lg">
						<Link color="foreground" className="w-full" href="#features">
							Learn more
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
};
