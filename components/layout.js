import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Navbar from './navbar.js'
import Footer from './footer.js'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Showcase from './showcase';

const name = 'NT News';
export const siteTitle = 'NT News | The Most Trustworthy News';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/NT.ico" />
        <meta
          name="description"
          content="NT News is the best place for news!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
         <Navbar />
         {home && (
            <Showcase />
         )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    <Footer />
    </div>
  );
}