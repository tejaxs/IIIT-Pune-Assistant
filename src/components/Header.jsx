import { useNavigate  } from 'react-router-dom'; // Import useHistory hook

export default function Header({onNewChat}) {
    let navigate = useNavigate(); 
    const toggleSite = () => {
        navigate("/")
    };
    return (
        <div className="flex flex-row p-4 bg-blue-400 rounded-xl my-4">
            <p className="text-3xl text-grey-800 font-semibold grow pt-[10px]">IIIT Pune Assistant</p>
            <button
                className="bg-blue-800  hover:bg-blue-700 text-white font-bold px-4  rounded"
                onClick={onNewChat}
            >Refresh</button>
            <button
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded m-2"
                onClick={toggleSite}
            >X</button>
        </div>
    )
}