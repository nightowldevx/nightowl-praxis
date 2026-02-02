/// <reference types="react" />

declare namespace JSX {
    interface IntrinsicElements {
        'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            icon?: string;
            width?: string | number;
            height?: string | number;
            style?: React.CSSProperties;
            className?: string;
        };
    }
}
