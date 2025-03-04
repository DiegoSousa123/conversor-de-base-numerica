import FormComponent from "@/components/formComponent";

export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold">Conversor de bases numéricas</h1>
    <div className="space-y-10">
      <div className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6">
        <FormComponent actionToPerform={0}/>
      </div>
      <div className="max-w-7xl mx-auto h-fit flex flex-col justify-center items-center gap-6">
        <FormComponent actionToPerform={1}/>
      </div>
    </div>
    
    </>
  );
}