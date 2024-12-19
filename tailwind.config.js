/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.tsx", "./index.html"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--color-tomato))",
                tomato: {
                    DEFAULT: "hsl(var(--color-tomato))",
                },
                "dark-slate-grey": {
                    DEFAULT: "hsl(var(--color-dark-slate-grey))",
                },
                "charcoal-grey": {
                    DEFAULT: "hsl(var(--color-charcoal-grey))",
                },
            },
        },
    },
    plugins: [],
};
