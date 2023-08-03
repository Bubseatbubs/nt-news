import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/contact.module.css';
import utilStyles from '../styles/utils.module.css';


export default function Contact() {
  return (
    <Layout>
      <section class="features-head bg-primary py-3">
          <div class="container grid">
              <div>
                  <h1 class={`${utilStyles.center}`}>Contact Us</h1>
                  <p class="lead">
                      At NT News, we're always willing to lend an ear!
                  </p>
              </div>
          </div>
      </section>

      <section class={`${styles.card}`}>
        Contact Us Here:
      </section>
    </Layout>

  )
}