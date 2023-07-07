import { useLayoutEffect, DependencyList, useRef } from 'react';
import { gsap } from 'gsap';
import { useAnimationContext } from '../context/animationContext';

type Context = string | object | Element | undefined;

export const useAnimation = (ctx: Context, animation: (tl: gsap.core.Timeline) => void, deps: DependencyList = []) => {
    const { timeline } = useAnimationContext();

    useLayoutEffect(() => {
        let activeCtx = gsap.context(() => animation(timeline!), ctx!);
        return () => activeCtx.revert();
    }, deps);
}