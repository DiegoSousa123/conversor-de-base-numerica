import { CopyIcon } from "lucide-react";
import { toast as sonnerToast } from "sonner";

export default function CopyButton({ text }: { text: string }) {
    return (
        <button
        title="Copiar"
        onClick={() => {
            if(text){
                navigator.clipboard.writeText(text);
                toast({
                    description: "Copiado para a area de transferência!",
                });
            }
        }}
        className="bg-gray-800 text-gray-200 p-1 rounded hover:bg-gray-700 cursor-pointer"
        >
        <CopyIcon size={20} />
        </button>
    );      
}

//Custom Sonner toast
function toast(toast: Omit<ToastProps, 'id'>) {
    return sonnerToast.custom((id) => (
      <Toast
        id={id}
        description={toast.description}
      />
    ));
  }

function Toast(props: ToastProps) {
    const { description, id } = props;
   
    return (
      <div className="flex rounded-lg bg-gray-800 shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4">
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <p className="text-md font-semibold text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  interface ToastProps {
    id: string | number;
    description: string;
  }