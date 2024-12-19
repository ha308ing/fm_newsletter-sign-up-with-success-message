import { useCallback, useContext } from "react";
import { DismissButton } from "./Button";
import { AppContext } from "./App.context";

export const Success = () => {
    const { email, signup } = useContext(AppContext);

    const reset = useCallback(() => {
        signup(false);
    }, [signup]);

    return (
        <article className="flex flex-col px-[1.5rem] pb-[3rem] pt-[9.3125rem] text-charcoal-grey md:h-[auto] md:max-w-[31.5rem] md:rounded-[2.1875rem] md:bg-white md:px-[4rem] md:py-[1.5rem] md:pb-[4rem] md:pt-[3rem]">
            <img
                src="images/icon-success.svg"
                alt=""
                className="mb-[2.5rem] h-[4rem] w-[4rem]"
            />
            <h1 className="mb-[1.5rem] text-[2.5rem] font-bold leading-[1] md:text-[3.5rem]">
                Thanks for subscribing!
            </h1>
            <p className="mb-[15.45rem] md:mb-[1.5rem]">
                A confirmation email has been sent to
                <span className="font-bold"> {email}</span>. Please open it and
                click the button inside to confirm your subscription.
            </p>
            <DismissButton onClick={reset} />
        </article>
    );
};
