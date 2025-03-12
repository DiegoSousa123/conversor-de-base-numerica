import React from "react";

interface InputProps extends React.ComponentProps<'div'>{

}
 export default function InputComponent(props: InputProps) {
  
  return (
    <>  
      <div {...props} className="w-full rounded-lg bg-gray-800 px-4 py-2 flex justify-center items-center gap-2 border border-gray-700"/>
    </>
  );
}

interface InputFieldProps extends React.ComponentProps<'input'>{
}

export function InputField(props: InputFieldProps){
  return (
        <input {...props} type="text" className="remove-arrow w-full outline-0 border-0 text-xl font-normal text-start"/>
  );
}