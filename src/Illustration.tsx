const ILLUSTRATION_DESKTOP_MEDIA = "(width >= 768px)";
const ILLUSTRATION_MOBILE = "images/illustration-sign-up-mobile.svg";
const ILLUSTRATION_DESKTOP = "images/illustration-sign-up-desktop.svg";

export const Illustration = () => (
    <picture className="flex-shrink-0">
        <source
            srcSet={ILLUSTRATION_DESKTOP}
            media={ILLUSTRATION_DESKTOP_MEDIA}
        />
        <img className="w-[100%]" src={ILLUSTRATION_MOBILE} alt="" />
    </picture>
);
