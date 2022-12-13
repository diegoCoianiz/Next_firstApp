import styles from '../styles/Home.module.css'
import Link from 'next/link' //Link is an optimized way to call anchor and send JS data to client
import { useRouter } from 'next/router'
import PageLayout from '../components/PageLayout'

export default function Home() {
  const router = useRouter()
  return (
    <PageLayout title='Home'>
    <div className={styles.container}>
      <h1 className={styles.title}>newsPaper App</h1>

      <h1><Link href='/about'>Ir a About</Link></h1>
      <h1><Link href='/info/teslaNews'>Ir a Noticias Tesla</Link></h1>

      {/*this is another way to refer another page, however is not recomended for Links*/}
      <button onClick={() => router.push('/level/dos')}>
        Navegar al nivel dos
      </button>
    </div>
    </PageLayout>
  )
}
