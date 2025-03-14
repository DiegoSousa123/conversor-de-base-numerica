"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputComponent, { InputField } from "./inputComponent";
import CopyButton from "./copyButton";
import { Check, Equal, X } from "lucide-react";
import {
  convertToDecimal,
  convertFromDecimal,
  convertFromHexadecimal,
  convertToHexadecimal,
} from "@/utils/convertion";
import { useState } from "react";
import {
  MainButtonContent,
  MainButtonIcon,
  MainButtonRoot,
} from "./mainButton";

const schema = z.object({
  number: z
    .string()
    .min(1, "No mínimo um digito.")
    .regex(/[A-Fa-f0-9]/, "Digite um valor válido."),
});
interface FormProps {
  actionToPerform: number;
  placeholder: string;
  formTitle?: string;
}
export default function FormComponent({
  actionToPerform,
  placeholder,
  formTitle,
}: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      number: "",
    },
  });

  const handleInputChanges = watch("number") || "";
  const [result, setResult] = useState<string>("");

  function submitData() {
    switch (actionToPerform) {
      case 0: //convert from binary to decimal
        setResult(convertToDecimal(getValues("number") || "", 2));
        break;
      case 1: //convert from decimal to binary
        setResult(convertFromDecimal(getValues("number") || "", 2));
        break;
      case 2: //convert from octal to decimal
        setResult(convertToDecimal(getValues("number") || "", 8));
        break;
      case 3: //convert from decimal to octal
        setResult(convertFromDecimal(getValues("number") || "", 8));
        break;
      case 4: //convert from hexadecimal to decimal
        setResult(convertFromHexadecimal(getValues("number") || ""));
        break;
      case 5: //comvert from decimal to hexadecimal
        setResult(convertToHexadecimal(getValues("number") || ""));
        break;
    }
  }
  function clearFields() {
    reset();
    setResult("");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(submitData)}
        className="space-y-10 flex flex-col items-center justify-center"
      >
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <InputComponent error={!!errors?.number}>
            <InputField {...register("number")} placeholder={placeholder} />
          </InputComponent>
          <Equal className="shrink-0" size={32} />
          <InputComponent>
            <InputField readOnly value={result} />
            <CopyButton text={result} />
          </InputComponent>
        </div>
        {errors.number && (
          <span className="text-red-600">{errors.number.message}</span>
        )}
        <div className="flex justify-center items-center gap-4">
          <MainButtonRoot title="Converter" action="convert" type="submit">
            <MainButtonIcon>
              <Check size={20} />
            </MainButtonIcon>
            <MainButtonContent>Converter</MainButtonContent>
          </MainButtonRoot>
          <MainButtonRoot title="Limpar" action="clear" type="button" onClick={clearFields}>
            <MainButtonIcon>
              <X size={20} />
            </MainButtonIcon>
            <MainButtonContent>Limpar</MainButtonContent>
          </MainButtonRoot>
        </div>
      </form>
    </>
  );
}
