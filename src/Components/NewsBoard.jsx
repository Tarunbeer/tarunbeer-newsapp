import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7fd7e1e865644bc6a8ff5771dc06f492`
        fetch(url).then(response => response.json()).then((data) => { console.log(data.articles); setArticles(data.articles) })
    }, [])


    return (

        <div>
            <h2 className="text-center">Latest <span className="">News</span></h2>
            {articles.map((news, index) => {
                return (
                    <div className="grid">
                        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                    </div>
                )

            })}

        </div>
    )
}

export default NewsBoard