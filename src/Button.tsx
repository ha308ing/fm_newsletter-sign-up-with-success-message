interface IButtonProps {
    text?: string;
    type?: HTMLButtonElement["type"];
    onClick?: () => unknown;
}

export const Button: React.FC<IButtonProps> = ({
    text = "Subscribe to monthly newsletter",
    type = "submit",
    onClick,
}) => (
    <button
        onClick={onClick}
        type={type}
        className="mt-4 rounded-[0.5rem] bg-charcoal-grey py-4 pb-[0.9rem] pt-[1.1rem] text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-[#FF5379] hover:to-[#FF693E] hover:shadow-xl hover:shadow-tomato/40"
    >
        {text}
    </button>
);

export const SubmitButton = () => <Button />;
export const DismissButton = (props: IButtonProps) => (
    <Button text="Dismiss message" type="button" {...props} />
);
