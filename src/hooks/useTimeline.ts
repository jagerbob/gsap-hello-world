import { DependencyList, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Context = string | object | Element | undefined;

export const useTimeline = (ctx: Context, builder: (tl: gsap.core.Timeline) => gsap.core.Timeline, deps: DependencyList = []): React.MutableRefObject<gsap.core.Timeline | undefined> => {
    const tl = useRef<gsap.core.Timeline>();

    useLayoutEffect(() => {
        const activeCtx = gsap.context(() => tl.current = builder(gsap.timeline({ "paused": true })), ctx);
        return () => activeCtx.revert();
    }, deps);

    return tl;
}