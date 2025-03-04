import React from "react";

interface InputProps extends React.ComponentProps<'div'>{

}
 export default function InputComponent(props: InputProps) {
  
  return (
    <>  
        <div {...props} className="rounded-lg bg-gray-800 px-4 py-2 flex justify-center items-center gap-2"/>
    </>
  );
}

interface InputFieldProps extends React.ComponentProps<'input'>{
  
}

export function InputField(props: InputFieldProps){
  return (
        <input {...props} name="number" type="text" inputMode="numeric" className="w-full outline-0 border-0 text-2xl font-semibold text-center"/>
  );
}