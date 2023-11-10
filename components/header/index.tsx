import Link from "next/link";
import styles from "../header/index.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">Home</Link>
            <Link href="/posts">posts</Link>
            <Link href="/files">files</Link>
            <Link href="/about">about</Link>
            <Link href="/profile">profile</Link>
        </header>
    );
};
