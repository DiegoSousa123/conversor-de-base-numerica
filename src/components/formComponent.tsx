'use client'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputComponent, { InputField } from "./inputComponent";
import CopyButton from "./copyButton";
import { Equal } from "lucide-react";
import { convertToDecimal, convertToBinary } from "@/utils/convertion";
import { useContext, useState } from "react";
import BaseContext from "@/utils/base-context";

const schema = z.object({
    number: z.string().min(1, "No minimo um digito,").nullable(),
});
interface FormProps{
    actionToPerform: number;
}
export default function FormComponent({actionToPerform}: FormProps){
    const { register, handleSubmit, formState: { errors}, watch, resetField } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {  
            number: "",
        }
    });
    const {baseNum} = useContext(BaseContext);
    const handleInputChanges = watch('number') || '';

    return(
        <>
        <form className="space-y-10 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold">{actionToPerform === 0 ? "Converter de binário para decimal" : "Converter de decimal para binário"}</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <InputComponent>
                    <InputField {...register('number')} placeholder={actionToPerform === 0 ? "Número binário" : "Número decimal"}/>
                </InputComponent>
                <Equal className="shrink-0" size={32}/>
                <InputComponent>
                    <InputField readOnly value={actionToPerform === 0 ? convertToDecimal(handleInputChanges, parseInt(baseNum)) : convertToBinary(handleInputChanges, parseInt(baseNum))}/>
                    <CopyButton text={actionToPerform === 0 ? convertToDecimal(handleInputChanges, parseInt(baseNum)) : convertToBinary(handleInputChanges, parseInt(baseNum))}/>
                </InputComponent>
            </div>
            <button type="button" onClick={() => resetField('number')} className="bg-gray-800 text-gray-200 px-2 py-1 rounded hover:bg-red-800 transition duration-200 cursor-pointer">Limpar campos</button>
        </form>
        </>
    );
}