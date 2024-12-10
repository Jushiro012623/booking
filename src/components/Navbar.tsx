import { CiLogout } from "react-icons/ci";
import { useAuthProvider } from "../context/AuthenticationProvider";
import Typography from "./ui/Typography";
export default function Navbar() {
    
    const {logout} = useAuthProvider()
    
    const handleLogout = () => {
        logout()
        window.location.reload();
    }
    return (
        <nav className="z-10 fixed top-0 left-0 w-full flex h-20 items-center px-16 justify-between bg-white border-b">
            <Typography variant="h3">LOGO</Typography>
            <button onClick={handleLogout}><CiLogout size={20} /></button>
        </nav>
    );
}
