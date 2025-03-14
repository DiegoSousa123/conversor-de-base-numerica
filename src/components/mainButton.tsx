interface MainButtonProps extends React.ComponentProps<'button'>{
    action?: string;
}

export function MainButtonRoot({action = "default", ...props}: MainButtonProps){
    return(
        <button data-action={action} {...props} className="bg-gray-800 flex justify-center items-center gap-2
         text-gray-200 px-3 py-2 rounded hover:bg-gray-700 transition duration-200 cursor-pointer data-[action=convert]:hover:bg-lime-700 data-[action=clear]:hover:bg-red-700"/>
    );
}
interface MainButtonContentProps extends React.ComponentProps<'div'>{}
export function MainButtonContent(props: MainButtonContentProps){
    return(
        <div {...props}/>
    );
}
interface Props{
    children: React.ReactNode;
}
export function MainButtonIcon({children}:Props){
    return(
        <>
        {children}
        </>
    );
}