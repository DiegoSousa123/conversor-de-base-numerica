'use client'
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputComponent, { InputField } from "./inputComponent";
import CopyButton from "./copyButton";
import { ArrowRight } from "lucide-react";

const schema = z.object({
    number: z.string().min(2,"No minimo dois digitos,").nullable(),
});
interface FormProps{
    actionToPerform: number;
}
export default function FormComponent({actionToPerform}: FormProps){
    const { register, handleSubmit, formState: { errors}, watch } = useForm({
        resolver: zodResolver(schema),
    });
    const test = watch('number') || '';

    function convertToDecimal(number: string): string{
        const parsedNumber = number.split('').reverse().map((digit, index) => parseInt(digit) * Math.pow(2, index)).reduce((acc, value) => acc + value, 0);
        return parsedNumber.toString() || '0';
    }
    function convertToBinary(number: string): string{
        const parsedNumber = parseInt(number);
        let quotient = parsedNumber;
        let remainder = [];
        while(quotient > 0){
            remainder.push(quotient % 2);
            quotient = Math.floor(quotient / 2);
        }
        return remainder.reverse().join('') || '0';
    }
    return(
        <>
        <form className="space-y-10 flex flex-col items-center justify-center" onSubmit={handleSubmit((data) => console.log(data))}>
            <h2 className="text-2xl font-semibold">{actionToPerform === 0 ? "Converter de binário para decimal" : "Converter de decimal para binário"}</h2>
            <div className="flex gap-4 justify-center items-center">
                <InputComponent >
                    <InputField {...register('number')} placeholder={actionToPerform === 0 ? "Número binário" : "Número decimal"}/>
                </InputComponent>
                <ArrowRight size={32}/>
                <InputComponent>
                    <InputField readOnly value={actionToPerform === 0 ? convertToDecimal(test) : convertToBinary(test)}/>
                    <CopyButton text={actionToPerform === 0 ? convertToDecimal(test) : convertToBinary(test)}/>
                </InputComponent>
            </div>
        </form>
        </>
    );
}