import styles from "./Input.module.css";

interface IInputProps {
    label?: string;
    name?: string;
    placeholder?: string;
    isValid?: boolean | null;
    errorMessage?: string;
    type?: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<IInputProps> = ({
    label = "Email address",
    name = "email",
    placeholder = "email@company.com",
    errorMessage = "Valid email required",
    type = "text",
    isValid,
}) => (
    <>
        <div className="mb-[0.5625rem] flex justify-between text-xs font-bold">
            <label htmlFor={name}>{label}</label>
            {isValid === false && (
                <span className="text-tomato">{errorMessage}</span>
            )}
        </div>
        <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            className={`block rounded-[0.5rem] border px-[1.4375rem] py-[0.9375rem] last-of-type:mb-[0.5rem] focus-visible:outline focus-visible:outline-1 focus-visible:outline-charcoal-grey ${
                isValid === false ? styles.invalid : ""
            }`}
        />
    </>
);

export const EmailInput = (props: IInputProps) => <Input {...props} />;
