import header from '../../assets/header.png';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
                <img
                    src={header}
                    alt="rick and morty header"
                />
        </header>
    );
}