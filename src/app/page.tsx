import FormComponent from "@/components/formComponent";
import * as Tabs from "@radix-ui/react-tabs";
import { Code2 } from "lucide-react";
import Image from "next/image";
import logo from '../../public/conversor-white.png';

export default function Home() {
  return (
    <>
      <header className=" w-full flex justify-between items-center p-4">
       <Image className="w-[150px] object-cover" src={logo} alt="Logo" />
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
          </ul>
        </nav>
      </header>
      <div className="space-y-10">
        <Tabs.Root
          className="flex flex-col gap-10 justify-center items-center"
          defaultValue="0"
        >
          <Tabs.List className="flex flex-wrap justify-center items-center gap-4">
            <Tabs.Trigger
              value="0"
              className="p-2 rounded cursor-pointer font-semibold hover:bg-gray-800 data-[state=active]:bg-gray-800"
            >
              Binário-Decimal
            </Tabs.Trigger>
            <Tabs.Trigger
              value="1"
              className="p-2 rounded cursor-pointer font-semibold hover:bg-gray-800 data-[state=active]:bg-gray-800"
            >
              Decimal-Binário
            </Tabs.Trigger>
            <Tabs.Trigger
              value="2"
              className="p-2 rounded cursor-pointer font-semibold hover:bg-gray-800 data-[state=active]:bg-gray-800"
            >
              Octal-Decimal
            </Tabs.Trigger>
            <Tabs.Trigger
              value="3"
              className="p-2 rounded cursor-pointer font-semibold hover:bg-gray-800 data-[state=active]:bg-gray-800"
            >
              Decimal-Octal
            </Tabs.Trigger>
            <Tabs.Trigger
              value="4"
              className="p-2 rounded cursor-pointer font-semibold hover:bg-gray-800 data-[state=active]:bg-gray-800"
            >
              Hexa-Decimal
            </Tabs.Trigger>
            <Tabs.Trigger
              value="5"
              className="p-2 rounded cursor-pointer font-semibold hover:bg-gray-800 data-[state=active]:bg-gray-800"
            >
              Decimal-Hexa
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            value="0"
            className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6"
          >
            <FormComponent
              formTitle="Binário para decimal"
              actionToPerform={0}
              placeholder="número binário"
            />
          </Tabs.Content>
          <Tabs.Content
            value="1"
            className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6"
          >
            <FormComponent
              formTitle="Decimal para binário"
              actionToPerform={1}
              placeholder="número decimal"
            />
          </Tabs.Content>
          <Tabs.Content
            value="2"
            className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6"
          >
            <FormComponent
              formTitle="Octal para decimal"
              actionToPerform={2}
              placeholder="número octal"
            />
          </Tabs.Content>
          <Tabs.Content
            value="3"
            className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6"
          >
            <FormComponent
              formTitle="Decimal para octal"
              actionToPerform={3}
              placeholder="número decimal"
            />
          </Tabs.Content>
          <Tabs.Content
            value="4"
            className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6"
          >
            <FormComponent
              formTitle="Hexadecimal para decimal"
              actionToPerform={4}
              placeholder="número hexadecimal"
            />
          </Tabs.Content>
          <Tabs.Content
            value="5"
            className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6"
          >
            <FormComponent
              formTitle="Decimal para hexadecimal"
              actionToPerform={5}
              placeholder="número decimal"
            />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </>
  );
}
