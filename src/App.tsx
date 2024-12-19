import { useCallback, useMemo, useState } from "react";
import { SignupForm } from "./SignupForm";
import { Success } from "./Success";
import { AppContext } from "./App.context";

export const App = () => {
    const [isSuccess, setSuccess] = useState(false);
    const [email, setEmail] = useState("");

    const signup = useCallback(
        (state: boolean, email?: string) => {
            setSuccess(state);
            if (state === true && email) {
                setEmail(email);
            } else {
                setEmail("");
            }
        },
        [setSuccess, setEmail],
    );

    const content = useMemo(
        () => (isSuccess ? <Success /> : <SignupForm />),
        [isSuccess],
    );

    return (
        <AppContext.Provider value={{ signup, email }}>
            {content}
        </AppContext.Provider>
    );
};
