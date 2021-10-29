import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Et incididunt eiusmod consequat eiusmod ad officia voluptate laboris in velit id. Velit exercitation tempor enim dolor ipsum. Qui eu excepteur officia pariatur. Ex eu enim sit est sint incididunt eu anim non reprehenderit ex cupidatat veniam. Est reprehenderit consectetur consectetur proident est officia cillum velit ea nostrud occaecat excepteur. Et eiusmod tempor ut irure veniam excepteur esse eu. Pariatur quis tempor non sit nostrud ullamco mollit pariatur voluptate aute.
        </p>
        <p className={styles.text}>
          Et incididunt eiusmod consequat eiusmod ad officia voluptate laboris in velit id. Velit exercitation tempor enim dolor ipsum. Qui eu excepteur officia pariatur. Ex eu enim sit est sint incididunt eu anim non reprehenderit ex cupidatat veniam. Est reprehenderit consectetur consectetur proident est officia cillum velit ea nostrud occaecat excepteur. Et eiusmod tempor ut irure veniam excepteur esse eu. Pariatur quis tempor non sit nostrud ullamco mollit pariatur voluptate aute.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
