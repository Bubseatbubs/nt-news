import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} news container`}>
      <div className={`${utilStyles.headingLg} ${utilStyles.center}`}>
           <h1>Latest News</h1>
      </div>
      <ul className={`${utilStyles.list}`}>
        {allPostsData.map(({ id, date, author, title }) => (
          <li className={`${utilStyles.listItem}`} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className="headingSm">
              {author}
            </small>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
    </Layout>
  );
}