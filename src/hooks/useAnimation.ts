import { useLayoutEffect, DependencyList } from 'react';
import { gsap } from 'gsap';

type Context = string | object | Element | undefined;

export const useAnimation = (animation: () => void, ctx?: Context, deps: DependencyList = []) => {
    useLayoutEffect(ctx ? () => {
        let activeCtx = gsap.context(() => animation(), ctx!);
        return () => activeCtx.revert();
    } : () => animation(), deps);
}