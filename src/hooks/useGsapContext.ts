import { useMemo } from "react";
import { GSAPContext } from "../types/GSAPContext";

export const useGsapContext = (scope: GSAPContext) => {
    const ctx = useMemo(() => gsap.context(() => { }, scope), [scope]);
    return ctx;
}