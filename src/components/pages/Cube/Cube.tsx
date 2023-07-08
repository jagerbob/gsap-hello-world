import styles from './Cube.module.scss';
import { useAnimations } from './Cube.animations'
import { UnderlinedButton } from '../../forms/buttons/UnderlinedButton';

export const Cube = () => {
    const { rotate } = useAnimations();

    return (
        <main className={styles.main}>
            <h1>GSAP HELLO WORLD</h1>
            <div className={styles.box} data-animate="rotate" />
            <UnderlinedButton onClick={() => rotate("[data-animate='rotate']")}>Rotate!</UnderlinedButton>
        </main>
    )
};