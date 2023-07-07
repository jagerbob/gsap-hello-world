import React, { useState } from 'react';
import { gsap } from 'gsap';

type AnimationValueType = {
    timeline?: gsap.core.Timeline;
}

type AnimationModifierType = {
    setTimeline: (timeline: gsap.core.Timeline) => void;
}

type AnimationContextType = AnimationValueType & AnimationModifierType;

export const AnimationContext = React.createContext<AnimationContextType>({
    timeline: gsap.timeline(),
    setTimeline: () => { }
});

export type ProviderProps = { children: React.ReactNode };

export const AnimationProvider = ({ children }: ProviderProps) => {
    const [storedValues, setStoredValues] = useState<AnimationValueType>(
        {
            timeline: gsap.timeline()
        },
    );

    const animationContextValue = React.useMemo<AnimationContextType>(() => {
        return {
            timeline: storedValues.timeline,
            setTimeline: (timeline) => setStoredValues((v) => ({ ...v, timeline }))
        };
    }, [setStoredValues, storedValues.timeline]);

    return <AnimationContext.Provider value={animationContextValue}>{children}</AnimationContext.Provider>;
};


export const useAnimationContext = () => {
    return React.useContext(AnimationContext);
};

