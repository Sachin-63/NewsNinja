import NewsContext from './newsContext'
import { useState } from "react";

import React from 'react'

const NewsState = (props) => {

    const host = "http://localhost:5000"

    const newsInitial = []
    const [news, setNews] = useState(newsInitial);

    const getNews = async()=>{
        const response = await fetch(`${host}/news/fetchAllNews`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ category, apiKey, page, pageSize })
            //body: JSON.stringify({title,describtion,tag})
          });
          //JSON of all the fetched notes
          const json = await response.json();
          //console.log(json)
      
          //Setting Notes state
          setNews(json);
    }


    return (
        <NewsContext.Provider value={{ news, getNews }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState
