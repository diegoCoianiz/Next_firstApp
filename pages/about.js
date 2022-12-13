import PageLayout from '../components/PageLayout'
import styles from '../styles/About.module.css'

export default function About({list}) {
    return( <>
    <PageLayout title = "About">
    <h1 className={styles.about_principal}>Pagina de about</h1>
    <h6>{list}</h6>
    </PageLayout>
    </>
    )
}

export async function getServerSideProps() {
    let list = []
    while(list.length < 5) list.push("hola")
    return {
        props: {
            list
        }
    }
}