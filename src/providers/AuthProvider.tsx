import { FC, PropsWithChildren, useState } from "react";
import { User } from "../types/User";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [user] = useState<User | null>(
        /* null */ {
            id: 1,
            name: "nizar",
            email: "nizarmakhlouf@gmail.com",
            active: true,
            role: "admin",
        }
    );
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
