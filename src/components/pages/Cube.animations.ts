import { gsap } from 'gsap';
import { useMemo } from 'react';

export const useAnimations = () => {
    const rotate = useMemo(() => (target: gsap.TweenTarget) => gsap.to(target, { rotation: '+=360' }), []);

    return { rotate }
}