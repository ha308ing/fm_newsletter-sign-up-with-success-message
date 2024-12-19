import { createContext } from "react";

export const AppContext = createContext({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signup: (_state: boolean, _email?: string) => {},
    email: "",
});
