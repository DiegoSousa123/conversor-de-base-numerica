import BaseProvider from "@/components/baseProvider";
import DefineBaseComponent from "@/components/defineBaseComponent";
import FormComponent from "@/components/formComponent";
import BaseContext from "@/utils/base-context";
import { Code2 } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <>
      <header className=" w-full flex justify-between items-center p-4">
        <h1 className="text-2xl md:text-3xl font-bold">Conversor</h1>
        <nav>
          <ul className="flex gap-4">
            <li className="hover:bg-gray-800 p-1.5 rounded">
              <a
                title="Repositório"
                className="flex justify-center items-center gap-2"
                href="https://github.com/DiegoSousa123/conversor-de-base-numerica"
              >
                <Code2 className="inline align-middle" />{" "}
                <span className="hidden md:inline">Repository</span>
              </a>
            </li>
            <li className="hidden hover:bg-gray-800 p-1.5 rounded">
              {/* <button className="flex justify-center items-center gap-2 cursor-pointer">
                <Settings2 className="inline align-middle" />
                <span className="hidden md:inline">Define numeric base</span>
              </button> */}

            {/* <BaseProvider>
             <DefineBaseComponent/>
            </BaseProvider> */}
            </li>
          </ul>
        </nav>
      </header>
      <div className="space-y-10">
        <div className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6">
          <FormComponent actionToPerform={0} />
        </div>
        <div className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6">
          <FormComponent actionToPerform={1} />
        </div>
      </div>
    </>
  );
}
