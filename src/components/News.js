import React , {useEffect, useState}from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import getNews from '../../backend/newsAPI';


const News =(props)=> {

    

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    
    
    const capitaliseFirstLetter = (string) => {
        
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    
    

    const updateNews=async()=> {
        props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // const url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&lang=en&topic=${props.category}&page=${page}&token=${props.apiKey}`;
        setLoading(true);
        let data = await fetch(url);
        
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        //console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        
        props.setProgress(100);

    }
    useEffect(() => {
        document.title = `NewsNinja - ${capitaliseFirstLetter(props.category)}`
        updateNews();
        
    },[])
    

    const fetchMoreData = async() => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false);
        
    };

    
    return (
        <>
        <div className="container my-1 " >

            <h1 className="display-6  " style={{ color: "#FFC000" ,marginTop:"58px"}}>NewsNinja - Top Headlines {props.category === "general" ? "" : " | " + capitaliseFirstLetter(props.category)}</h1>
            


            <hr className="my-2 mt-1" style={{ color: "#FFF000", height: "2px" }} />
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                
            >
            <div className="container"  >
                <div className="row"  >
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}  >
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "/NewsNinjaLogo.jpeg"} newsUrl={element.url} author={element.author ? element.author : "Unknown Source"} date={element.publishedAt ? element.publishedAt : "Unknown Time"} source={element.source.name ? element.source.name : ""} />
                        </div>
                    })}

                </div>
                </div>
            </InfiniteScroll>
            {loading && <Spinner />}
        </div>
        </> 
    )   
}

News.defaultProp = {
    country: 'in',
    pageSize: 12,
    category: "general"

}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
