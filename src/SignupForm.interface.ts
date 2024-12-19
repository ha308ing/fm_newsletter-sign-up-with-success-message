export interface IGenericSignupForm<T> {
    email: T;
}

export type ISignupForm = IGenericSignupForm<string | null>;

export type ISignupFormData = IGenericSignupForm<FormDataEntryValue>;
