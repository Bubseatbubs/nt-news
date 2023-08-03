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

export default function Home({ onSearch, allPostsData }) {
  const filterSearch = (searchTerm) => {
    var input, filter, ul, li, a, i;
    input = searchTerm;
    console.log("input is " + input);
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.allPostsData;
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    // For simplicity, we'll just log the search term for now
    console.log("Search term:", searchTerm);
  };

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