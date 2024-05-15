/* eslint-disable @typescript-eslint/no-explicit-any */

import { Icon } from "@iconify/react/dist/iconify.js";
import type { Service } from "@/types/models/landingpage";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Services = (props: any) => {
  return (
    <div id="services" className="py-24 mx-auto max-w-[1170px] text-center px-5 sm:px-0">
        <div className="flex flex-col pb-16">
          <h2 className="font-bold text-center text-4xl pb-3.5">Our Services</h2>
          <div className="h-1 bg-foreground w-16 mx-auto" />
          <p className="pt-3.5 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-10">
          {props.data
            ? props.data.map((d: Service, i: number) => (
                <div key={`${d.name}-${i}`} className="md:w-1/3 w-full flex flex-col gap-4 px-4 items-center">
                  <div className="p-10 bg-lime-700 rounded-full">
                    <Icon className="w-[42px] h-[42px] text-white" icon={d.icon} />
                  </div>
                  <div className="service-desc">
                    <h3 className="text-lg">{d.name}</h3>
                    <p className="text-[15px]">{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
    </div>
  );
};