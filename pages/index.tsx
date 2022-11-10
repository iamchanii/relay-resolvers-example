import Head from 'next/head';
import Image from 'next/image';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { pagesIndexQuery } from '../generated/pagesIndexQuery.graphql';
import styles from '../styles/Home.module.css';

export default function Home() {
  const data = useLazyLoadQuery<pagesIndexQuery>(
    graphql`
      query pagesIndexQuery {
        users {
          id
          fullName
        }
      }
    `,
    {},
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Relay Resolvers Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Users</h1>

        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.fullName}</li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
