import { useAuth } from "@/context/AuthContext";
import './navbar.css'
const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav style={{ background: 'var(--verde-medio)' }} className="flex justify-between">
            <div className="logo text-2xl font-bold">🌿 Plantweet</div>
            <div className="user-actions">
                {user ? (
                    <div className="flex flex-col gap-2 p-2">
                        <span>Hola, @{user.username}</span>
                        <button onClick={logout} className="logout-btn ">
                            Salir del jardín
                        </button>
                    </div>
                ) : <></>
                }
            </div>
        </nav>
    );
};
export default Navbar