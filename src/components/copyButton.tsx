import { CopyIcon } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
    return (
        <button
        onClick={() => {
            navigator.clipboard.writeText(text);
        }}
        className="bg-gray-800 text-gray-200 p-1 rounded hover:bg-gray-700 cursor-pointer"
        >
        <CopyIcon size={20} />
        </button>
    );      
}