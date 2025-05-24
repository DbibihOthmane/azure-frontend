import {Button} from "@/components/ui/button.jsx";
import {useDispatch} from "react-redux";
import {acceptInvitation} from "@/Redux/Project/Action.js";
import {useLocation, useNavigate} from "react-router-dom";

function AcceptInvitation() {
    const dispactch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const handleAcceptinvitation = () => {
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get("token");
        dispactch(acceptInvitation({token, navigate}))
    }
    return (
        <div className="h-[85vh] flex flex-col justify-center items-center">
            <h1 className="py-5 font semibold text-xl">You are invited to join the project</h1>
            <Button onClick={handleAcceptinvitation}>Accept Invitation</Button>
        </div>
    )
}

export default AcceptInvitation

