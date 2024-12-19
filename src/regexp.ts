import type { ISignupForm } from "./SignupForm.interface";

type TRegexp = Record<keyof ISignupForm, RegExp>;

export const regexp: TRegexp = {
    email: /^[a-z0-9]+[a-z0-9\-_]*@[a-z0-9]+[a-z0-9\-_.]*\.[a-z]{2,}$/i,
};
