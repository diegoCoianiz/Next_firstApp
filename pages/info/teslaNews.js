import PageLayout from "../../components/PageLayout";
import styles from '../../styles/Home.module.css'

export default function TeslaNews ({list}) {
    
    {/* react Hooks will fetch the data on the client side, not the server (recomended)

    const [list , setlist] = useState([])
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-11-13&sortBy=publishedAt&apiKey=ab1bff2e24fd4b4dab96775dbe37344f
        `)
        .then(res => res.json())
        .then(res => {
            const {list} = res
            setlist(list)
        })
    }, [])
    */}

    return (
    <PageLayout title='Tesla News'>
        <div className={styles.title}>
            Tesla News!!!!
        </div>
        <div className={styles.container}>
            {list.length === 0 && <p>No list!</p>}
            {list.length > 0 && list.map((art, i) => (
                <div key={i}>
                     <h2>{art.title}</h2>
                    <img alt={`image for the article ${art.title}`} 
                    src={art.urlToImage} />
                    <p>
                        {art.description}
                    </p>
                    
                </div>
            ))}
        </div>
    </PageLayout>
    )
}

export async function getServerSideProps() {
    const response = await fetch
                        ('https://newsapi.org/v2/everything?q=tesla&from=2022-11-13&sortBy=publishedAt&'+
                        'apiKey=ab1bff2e24fd4b4dab96775dbe37344f')
    const { articles } = await response.json()
    
    let list = articles.filter((art, ind) => ind < 5)
    return {
        props: {
            list
        }
    }   
}