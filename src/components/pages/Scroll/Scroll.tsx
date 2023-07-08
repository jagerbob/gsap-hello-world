import { useRef } from 'react';
import styles from './Scroll.module.scss';
import { useAnimations } from './Scroll.animation';

export const Scroll = () => {
    const ctx = useRef<HTMLDivElement>(null);

    useAnimations(ctx);

    return (
        <main className={styles.main} ref={ctx}>
            <div className={styles.landingContainer} data-animate="landing-container">
                <h1>Scroll</h1>
            </div>
            <div className={styles.heyContainer} data-animate="tagline-container">
                <h1 data-animate="tagline1">Hey</h1>
                <h1 data-animate="tagline2">What's up ?</h1>
            </div>
        </main>
    )
}