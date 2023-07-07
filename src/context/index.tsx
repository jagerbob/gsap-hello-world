import * as AnimationProvider from './animationContext';

export type ProvidersProps = {
    children: React.ReactNode;
} & AnimationProvider.ProviderProps;

export const ContextProviders = ({ children }: ProvidersProps) => {
    return (
        <AnimationProvider.AnimationProvider>
            {children}
        </AnimationProvider.AnimationProvider>
    );
};