import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <Link href="https://www.tiktok.com/corinthians" target="_blank">
                    <Image src="/images/tiktok.png" alt="TikTok " width={40} height={40} />
                </Link>
                <Link href="https://www.twitter.com/corinthians" target="_blank">
                    <Image src="/images/twitter.png" alt="Twitter" width={40} height={40} />
                </Link>
                <Link href="https://www.instagram.com/corinthians" target="_blank">
                    <Image src="/images/instagram.png" alt="Instagram" width={40} height={40} />
                </Link>
                <Link href="https://www.youtube.com/corinthians" target="_blank">
                    <Image src="/images/youtube.png" alt="YouTube" width={40} height={40} />
                </Link>
            </div>
            <p>© 2025 Corinthians. Todos os direitos reservados.</p>
            <p>Desenvolvido por <Link href="/sobre" target="_blank">Vinicius Valverde</Link></p>
        </footer>
    )
}