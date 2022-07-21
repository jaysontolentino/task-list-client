import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export function useAuth() {
    const auth = useContext(AuthContext)?.auth

    return auth
}
