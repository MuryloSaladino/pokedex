import { createGlobalStyle } from "styled-components";

export const Animations = createGlobalStyle`
    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
`