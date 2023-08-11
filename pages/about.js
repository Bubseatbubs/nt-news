import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/contact.module.css';
import utilStyles from '../styles/utils.module.css';
import AboutHeading from '../components/aboutheading';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <AboutHeading />

      <div className="beforeAbout"></div>

      <div className={`${utilStyles.padding1px} ${utilStyles.listItem} ${utilStyles.center}`}>
        
      </div>

      {/* Jeebub Wilson */}
      <section class={`${styles.card}`}>
        <div className={`${styles.showDesc}`}>Jeebub Wilson</div> 
        <div className={`${styles.hide}`}>Jeebub was a single bub with a dream to change the world. For many years, he was unable to get any updates on what was going on around the world of Carnegiss. Even worse, a pivotal election of 719 was about to begin, and no bubs seemed prepared to closely report on what was going down. As such, Wilson took it upon himself to become the best reporter the world has seen, and he succeeded. NT News gained worldwise renown, and Wilson himself found like-minded bubs that helped spread information throughout the realm. Now, Wilson oversees the work of other aspiring bub reporters, though he does dip his toes in reporting from time to time.</div>
      </section>

      {/* Billy Busso */}
      <section class={`${styles.card}`}>
        <div className={`${styles.showDesc}`}>Billo Busso</div> 
        <div className={`${styles.hide}`}>It's impossible to tell Jeebub Wilson's story without talking about his trusty partner, Billy. When Jeebub began to write stories, Billy was on the front lines, spreading his word throughout the Empire and beyond. Legends tell of Billy standing hours in front of the Empire's gate, spreading Wilson's articles to those who passed through. Billy himself even became a writer, inspired by Wilson's efforts, and helped cover the 719 election as well.</div>
      </section>

      {/* Bittel Battel */}
      <section class={`${styles.card}`}>
        <div className={`${styles.showDesc}`}>Bittel Battel</div> 
        <div className={`${styles.hide}`}>Bittel Battel was one of the many bubs that recieved Wilson's articles when Billy began to spread them throughout the realm. Inspired by his writings, Battel the bub begged to be brought on. Wilson graciously accepted the help, and Battel proved to be no slouch at reporting, himself. His article "Rumor: Ortheus Spotted" ultimately led to the creation of the group OrtheusWatch, which promised to locate the man himself. Battel continues to write for NT News to this day.</div>
      </section>
      
      {/* Boilin Vetcheiz */}
      <section class={`${styles.card}`}>
        <div className={`${styles.showDesc}`}>Boilin Vetchiez</div> 
        <div className={`${styles.hide}`}>Boilin used to run a rival reporting organization, the Ooboe Times, but her articles were never read, as many bubs preferred NT News instead. After her business crashed and burned, Boilin decided enough was enough. If she couldn't beat NT News, she could sure as hell join them. Boilin was hired almost immediately, with Wilson knowing that a reporter such as her could create some grand articles. Boilin's award winning report on the Mateil Shortages has helped some areas that relied far too much on Mateil (such as the Empire) to consider other energy sources. Boilin has since retired, but her works still leave an impact to this day.</div>
      </section>

      {/* Weet Buz */}
      <section class={`${styles.card}`}>
        <div className={`${styles.showDesc}`}>Weet Buz</div> 
        <div className={`${styles.hide}`}>Weet never planned to become a reporter. No, his eyes were set on joining the Bub army and fighting alongside his idol, Nosey Nosin. However, plans changed after he tripped and fell from one particularly steep cliff in Pinpi Forest, breaking one of legs indefinitely. Now, Buz works as a reporter and editor at NT News, hoping to make enough money to fix his legs once more. If only...</div>
      </section>

      {/* Jain Ethos */}
      <section class={`${styles.card}`}>
        <div className={`${styles.showDesc}`}>Jain Ethos</div> 
        <div className={`${styles.hide}`}>Jain is an enigmatic bub. One night, just before Wilson closed the office, Jain burst in, demanding a job for herself. Emboldened by her demands, and perhaps reminded of Boilin's own ferocity, Wilson decided that she could join, too. Jain has helped provide the most stories throughout the realms, though mainly stays within the Lands of Night offices.</div>
      </section>
    </Layout>

  )
}