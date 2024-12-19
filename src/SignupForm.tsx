import styles from "./SignupForm.module.css";
import { Illustration } from "./Illustration";
import { EmailInput } from "./Input";
import { SubmitButton } from "./Button";
import { useCallback, useContext, useState } from "react";
import { AppContext } from "./App.context";
import { IGenericSignupForm } from "./SignupForm.interface";
import { regexp } from "./regexp";

const initialFormState: IGenericSignupForm<boolean | null> = { email: null };

export const SignupForm = () => {
    const [fieldsState, setFieldsState] = useState(initialFormState);
    const [formState, setFormState] = useState<boolean | null>(null);

    const { signup } = useContext(AppContext);

    const submitHandler = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (e.target == null) return;

            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);

            const valids = Object.entries(data).reduce(
                (
                    res: {
                        res: IGenericSignupForm<boolean | null>;
                        total: boolean;
                    },
                    [key, value],
                ) => {
                    if (key !== "email") return res;

                    const isValid = regexp[key].test(value as string);

                    res.res[key] = isValid;
                    res.total = res.total && isValid;
                    return res;
                },
                {
                    res: { email: null },
                    total: true,
                },
            );

            if (valids.total) {
                signup(true, data.email as string);
            } else {
                setFieldsState(valids.res);
            }

            setFormState(valids.total);
        },

        [setFieldsState, signup, setFormState],
    );

    const changeHandler = useCallback(() => {
        if (formState == false) {
            setFieldsState(initialFormState);
            setFormState(null);
        }
    }, [setFieldsState, setFormState, formState]);

    return (
        <article className="flex flex-col bg-white md:max-w-[58rem] md:flex-row md:gap-[4rem] md:rounded-[2.2rem] md:p-[1.45rem_1.5rem]">
            <Illustration />

            <div className="flex flex-col gap-[0.9rem] pt-[1.875rem] md:order-first md:gap-[0.65rem] md:ps-[2.5rem] md:pt-[3.65rem]">
                <h1 className="px-6 text-[2.5rem] font-bold md:px-0 md:text-[3.5rem]">
                    Stay updated!
                </h1>

                <p className="px-6 md:px-0">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>

                <ul
                    className={`mb-[27px] mt-[0.5625rem] flex flex-col gap-[0.625rem] px-6 md:mb-[1.9rem] md:mt-[0.85rem] md:px-0 ${styles.list}`}
                >
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>

                <form
                    onSubmit={submitHandler}
                    onChange={changeHandler}
                    className="flex flex-col px-6 md:px-0"
                >
                    <EmailInput isValid={fieldsState.email} />
                    <SubmitButton />
                </form>
            </div>
        </article>
    );
};
