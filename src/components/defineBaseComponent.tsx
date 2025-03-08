'use client'
import * as Popover from "@radix-ui/react-popover";
import { Settings2 } from "lucide-react";
import InputComponent, { InputField } from "./inputComponent";
import React, { useContext } from "react";
import BaseContext from "@/utils/base-context";

export default function DefineBaseComponent() {
    const { baseNum, setBaseNum } = useContext(BaseContext);
    const [inputNum, setInputNum] = React.useState('');
    return(
        <Popover.Root>
        <Popover.Trigger className="flex justify-center items-center gap-2 cursor-pointer">
          <Settings2 className="inline align-middle" />
          <span className="hidden md:inline">Define numeric base</span>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="mt-5 p-5 flex flex-col gap-2 drop-shadow-2xl bg-gray-800 rounded-lg">
            <label htmlFor="numeric-base">What base do you want?</label>
            <InputComponent>
              <InputField 
                onChange={(e) => setInputNum(e.target.value)} 
                placeholder="2" 
                id="numeric-base"
              />
            </InputComponent>
            <button onClick={()=> setBaseNum(inputNum)} className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-2 cursor-pointer">Confirm</button>
            <Popover.Close>
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
}