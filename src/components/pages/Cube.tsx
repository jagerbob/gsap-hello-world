import { useRef } from 'react';
import styles from './Cube.module.scss';
import { useTimeline } from '../../hooks/useTimeline';

export const Cube = () => {
    const ctx = useRef<HTMLDivElement>(null);
    const bg = useTimeline(ctx, (tl) => tl
        .to("[data-animate='rotate']", { rotation: 360 })
        .to("[data-animate='rotate']", { x: 100 })
        .to("[data-animate='rotate']", { x: -100 })
        , [])

    return (
        <main className={styles.main} ref={ctx}>
            <h1>GSAP HELLO WORLD</h1>
            <div className={styles.box} data-animate="rotate" />
            <button onClick={() => bg.current?.play()}></button>
        </main>
    )
};