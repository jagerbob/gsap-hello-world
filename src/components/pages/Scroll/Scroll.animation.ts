import { useAnimation } from "../../../hooks/useAnimation";
import { GSAPContext } from "../../../types/GSAPContext";
import { gsap } from 'gsap';

export const useAnimations = (ctx: GSAPContext) => {
    useAnimation(() => {
        gsap.to("[data-animate='landing-container']", {
            scrollTrigger: {
                snap: {
                    snapTo: 1,
                    duration: 1.5,
                },
            }
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "[data-animate='tagline-container']",
                //markers: true,
                scrub: 1,
                start: "top center",
                end: "+=400"
            }
        });

        tl.fromTo("[data-animate='tagline1']", { x: -500 }, { x: 0 });
        tl.fromTo("[data-animate='tagline2']", { x: -500 }, { x: 0 });

    }, ctx, []);
}