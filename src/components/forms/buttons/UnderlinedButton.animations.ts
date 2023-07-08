import { useAnimation } from "../../../hooks/useAnimation"
import { GSAPContext } from "../../../types/GSAPContext";
import { gsap } from 'gsap';

export const useAnimations = (ctx: GSAPContext) => {
    useAnimation(() => {
        gsap.fromTo("[data-animate='underline-left-right']", { x: -100 }, {
            duration: 1.5,
            x: 100,
            repeat: -1
        })
    }, ctx, []);
}