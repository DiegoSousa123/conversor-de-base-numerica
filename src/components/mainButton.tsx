interface MainButtonProps extends React.ComponentProps<'button'>{}

export function MainButtonRoot(props: MainButtonProps){
    return(
        <button {...props} className="bg-gray-800 flex justify-center items-center gap-2
         text-gray-200 px-2 py-1 rounded hover:bg-gray-700 transition duration-200 cursor-pointer"/>
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