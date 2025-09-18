import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
                <Link href="/">Início</Link>
                <Link href="/">Clube</Link>
                <Link href="/">Jogadores</Link>
                <Image className={styles.logo} src="/images/logo.png" alt="Logo" width={80} height={102} priority/>
                <Link href="/">Lendas</Link>
                <Link href="/">História</Link>
                <Link href="/">Títulos</Link>
        </header>
    )
}
