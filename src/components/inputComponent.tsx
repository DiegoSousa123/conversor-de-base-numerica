import React from "react";

interface InputProps extends React.ComponentProps<'div'>{
  error?: boolean;
}
 export default function InputComponent({error = false, ...props}: InputProps) {
  
  return (
    <>  
      <div data-error={error} {...props} className="group w-full rounded-lg bg-gray-800 px-4 py-2 flex justify-center items-center gap-2 border border-gray-700 data-[error=true]:border-red-700"/>
    </>
  );
}

interface InputFieldProps extends React.ComponentProps<'input'>{}

export function InputField(props: InputFieldProps){
  return (
        <input {...props} type="text" className={`remove-arrow w-full outline-0 border-0 text-xl font-normal text-start`}/>
  );
}