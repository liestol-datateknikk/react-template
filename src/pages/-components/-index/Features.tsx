/* eslint-disable @typescript-eslint/no-explicit-any */

import { Icon } from "@iconify/react/dist/iconify.js";
import type { Feature } from "@/types/models/landingpage";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Features = (props: any) => {
  return (
    <div id="features"
      className="pt-20 flex flex-col gap-20 mx-auto max-w-[1170px] px-5 sm:px-0"
    >
      <div>
        <h2 className="font-bold text-center text-4xl pb-3.5">Features</h2>
        <div className="h-1 bg-foreground w-16 mx-auto" />
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:px-4">
        {props.data
          ? props.data.map((d: Feature, i: number) => (
            <div key={`${d.title}-${i}`} className="flex flex-col justify-center items-center">
              <Icon className="w-[100px] h-[100px]" icon={d.icon} />
              <h3 className="font-semibold text-xl py-2.5">{d.title}</h3>
              <p className="text-sm text-center opacity-80">{d.text}</p>
            </div>
          ))
          : "Loading..."}
      </div>
      </div>
  );
};