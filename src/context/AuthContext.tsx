import React from "react";

// @types.todo.ts
export interface AuthInterface {
    id: number;
    fullName: string;
    email: string;
    role: string;
  }
  export type AuthContextType = {
    isloading: boolean;
    auth?: AuthInterface,
    setIsloading: (isloading: boolean) => void;
    setAuth: (auth?: AuthInterface) => void;
  };

export const AuthContext = React.createContext<AuthContextType>({
    isloading: true,
    auth: undefined,
    setAuth: () => {},
    setIsloading: () => {}
});
// export const AuthContext = React.createContext();


type Props = {
    children: JSX.Element,
  };

export default function AuthContextProvider(props: Props) {
    const [isloading, setIsloading] = React.useState<boolean>(true);
    const [auth, setAuth] = React.useState<AuthInterface | undefined>(undefined);

    return (
        <AuthContext.Provider value={{ auth, setAuth, isloading, setIsloading }}>
            {props.children}
        </AuthContext.Provider>
    )
}