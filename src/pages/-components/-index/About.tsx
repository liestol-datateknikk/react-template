/* eslint-disable @typescript-eslint/no-explicit-any */

import { Icon } from "@iconify/react/dist/iconify.js";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const About = (props: any) => {
	return (
		<div id="about" className="py-24 mx-auto max-w-[1170px] pt-24 px-5 sm:px-0">
			<div className="flex flex-col-reverse sm:flex-row gap-20">
				<img src="img/about.jpg" className="sm:min-w-[520px]" alt={""} />
				<div>
					<h2 className="text-4xl font-bold">Om oss</h2>
					<div className="h-1 bg-foreground w-16 my-4" />
					<p className="text-[15px] leading-6">{props.data.paragraph}</p>
					<h3 className="pt-3.5 pb-4 text-[22px] font-semibold">Hvorfor velge oss?</h3>
					<div className="flex flex-row">
						<ul className="w-1/2 flex flex-col gap-2 px-4">
							{props.data
								? props.data.Why.map((d: string, i: number) => (
										<li className="text-xs flex flex-row items-center gap-2" key={`${d}-${i}`}>
											<Icon icon="carbon:checkmark" width={10} />
											{d}
										</li>
									))
								: "loading"}
						</ul>
						<ul className="w-1/2 flex flex-col gap-2 px-4">
							{props.data
								? props.data.Why2.map((d: string, i: number) => (
										<li className="text-xs flex flex-row items-center gap-2" key={`${d}-${i}`}>
											<Icon icon="carbon:checkmark" width={10} />
											{d}
										</li>
									))
								: "loading"}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
