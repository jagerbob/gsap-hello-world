import { useRef } from 'react';
import { useAnimations } from './UnderlinedButton.animations';
import styles from './UnderlinedButton.module.scss';

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

export const UnderlinedButton = ({ children, onClick }: ButtonProps) => {
    const ctx = useRef<HTMLDivElement>(null);
    useAnimations(ctx);

    return (
        <div className={styles.underlinedBtn} ref={ctx} onClick={onClick}>
            <button className={styles.btn}>{children}</button>
            <div className={styles.underline} data-animate="underline-left-right" />
        </div>
    );
}