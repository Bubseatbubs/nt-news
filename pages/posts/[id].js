import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <Layout>
        <div className="container">
            <Head>
            <title>{postData.title}</title>
            </Head>
            <article>
              <h1 className={utilStyles.headingXl}>{postData.title}</h1>
              <div>
                  <p>By {postData.author}</p>
              </div>
              <div className={utilStyles.lightText}>
                  <Date dateString={postData.date} />
              </div>
              <br />
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
      </Layout>
    );
  }