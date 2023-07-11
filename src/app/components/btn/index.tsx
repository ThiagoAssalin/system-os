
interface Props {
    children:string
}

export default function Btn(props: Props){
    return(
        <div className=" fixed bottom-0 right-0 m-2">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">{props.children}</button>
        </div>
    )
}