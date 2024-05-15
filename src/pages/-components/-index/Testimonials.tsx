/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Testimonial } from "@/types/models/landingpage";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Testimonials = (props: any) => {
	return (
		<div id="testimonials" className="py-24 mx-auto max-w-[1170px] px-5 sm:px-0">
			<div className="pb-20">
				<h2 className="font-bold text-center text-4xl pb-3.5">Hva sier kundene våre?</h2>
				<div className="h-1 bg-foreground w-16 mx-auto" />
			</div>
			<div className="flex flex-wrap gap-y-10">
				{props.data
					? props.data.map((d: Testimonial, i: number) => (
							<div
								key={`${d.name}-${i}`}
								className="md:w-1/3 w-full flex flex-col gap-4 px-9 items-center"
							>
								<div className="flex flex-row gap-4">
									<div className="testimonial-image">
										<img className="min-w-[64px] h-16 rounded-full" src={d.img} alt={""} />
									</div>
									<div className="flex flex-col gap-4">
										<p className="text-sm italic">"{d.text}"</p>
										<div className="text-base font-medium	"> - {d.name} </div>
									</div>
								</div>
							</div>
						))
					: "loading"}
			</div>
		</div>
	);
};
