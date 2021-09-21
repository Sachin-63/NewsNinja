import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    // articles= [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Los Angeles Times"
    //         },
    //         "author": "Luke Money, Rong-Gong Lin II, Hugo Martín",
    //         "title": "Vaccine-or-test requirements coming to Dodger, SoFi stadiums - Los Angeles Times",
    //         "description": "L.A. County will implement vaccine-or-testing requirements for large outdoor sporting events and theme parks as well as proof of vaccination at indoor bars, wineries, breweries and nightclubs.",
    //         "url": "https://www.latimes.com/california/story/2021-09-17/vaccine-or-test-requirements-coming-to-dodger-sofi-stadiums",
    //         "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/9e1cbcd/2147483647/strip/true/crop/3925x2061+0+225/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F44%2Fbd%2F736a03b340eaaea2a7bee297cd16%2Fla-photos-1staff-773452-sp-0820-dodgers-mets-4-gmf.jpg",
    //         "publishedAt": "2021-09-18T04:52:30Z",
    //         "content": "Los Angeles County soon will require proof of COVID-19 vaccination or a recent negative coronavirus test to enter Dodger and SoFi stadiums as well as Major League Soccer venues for events with more t… [+9238 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Melissa Healy, Amina Khan",
    //         "title": "Big gap between Pfizer, Moderna vaccines seen for preventing COVID hospitalizations - Yahoo News",
    //         "description": "Moderna's COVID-19 vaccine does a significantly better job of preventing COVID-19 hospitalizations compared with Pfizer's shot.",
    //         "url": "https://news.yahoo.com/big-gap-between-pfizer-moderna-034719881.html",
    //         "urlToImage": "https://s.yimg.com/uu/api/res/1.2/kPI1yr8MMPvvX3bc60FcCg--~B/aD01NjA7dz04NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/la_times_articles_853/388fea30daa15c751c0ce15aac860846",
    //         "publishedAt": "2021-09-18T04:38:34Z",
    //         "content": "A dose of Pfizer-BioNTech COVID-19 vaccine is readied at a mobile vaccine clinic in Los Angeles. (Irfan Khan / Los Angeles Times)\r\nAmid persistent concerns that the protection offered by COVID-19 vac… [+8162 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Jesse O’Neill",
    //         "title": "Two of Gavin Newsom's children test positive for COVID-19 - New York Post ",
    //         "description": "According to a statement, California Governor Gavin Newsom is following COVID protocols after two of Newsom’s children tested positive for the virus.",
    //         "url": "https://nypost.com/2021/09/17/gavin-newsoms-children-test-positive-for-covid-19/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/09/newsom-kids-covid-306.jpg?quality=90&strip=all&w=1024",
    //         "publishedAt": "2021-09-18T03:26:00Z",
    //         "content": "Two of California Governor Gavin Newsoms children have tested positive for COVID-19 but Newsom himself does not have the virus, his office said Friday. \r\n“The governor’s children tested positive for … [+938 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-hill",
    //             "name": "The Hill"
    //         },
    //         "author": "Jordan Williams",
    //         "title": "American Samoa reports first case of COVID-19 | TheHill - The Hill",
    //         "description": "The American Samoa reported its first case of COVID-19 on Friday. ...",
    //         "url": "https://thehill.com/homenews/state-watch/572850-american-samoa-reports-first-case-of-covid-19",
    //         "urlToImage": "https://thehill.com/sites/default/files/ca_americansamoaflag_121319istock.jpg",
    //         "publishedAt": "2021-09-18T02:35:51Z",
    //         "content": "The American Samoa reported its first case of COVID-19 on Friday. \r\nThe territorys Department of Health confirmed the positive case among 43 travelers who were quarantined at a hotel, according to a … [+1246 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Los Angeles Times"
    //         },
    //         "author": "Luke Money, Rong-Gong Lin II, Hugo Martín",
    //         "title": "Vaccine-or-test requirements coming to Dodger, SoFi stadiums - Los Angeles Times",
    //         "description": "L.A. County will implement vaccine-or-testing requirements for large outdoor sporting events and theme parks as well as proof of vaccination at indoor bars, wineries, breweries and nightclubs.",
    //         "url": "https://www.latimes.com/california/story/2021-09-17/vaccine-or-test-requirements-coming-to-dodger-sofi-stadiums",
    //         "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/9e1cbcd/2147483647/strip/true/crop/3925x2061+0+225/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F44%2Fbd%2F736a03b340eaaea2a7bee297cd16%2Fla-photos-1staff-773452-sp-0820-dodgers-mets-4-gmf.jpg",
    //         "publishedAt": "2021-09-18T04:52:30Z",
    //         "content": "Los Angeles County soon will require proof of COVID-19 vaccination or a recent negative coronavirus test to enter Dodger and SoFi stadiums as well as Major League Soccer venues for events with more t… [+9238 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Melissa Healy, Amina Khan",
    //         "title": "Big gap between Pfizer, Moderna vaccines seen for preventing COVID hospitalizations - Yahoo News",
    //         "description": "Moderna's COVID-19 vaccine does a significantly better job of preventing COVID-19 hospitalizations compared with Pfizer's shot.",
    //         "url": "https://news.yahoo.com/big-gap-between-pfizer-moderna-034719881.html",
    //         "urlToImage": "https://s.yimg.com/uu/api/res/1.2/kPI1yr8MMPvvX3bc60FcCg--~B/aD01NjA7dz04NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/la_times_articles_853/388fea30daa15c751c0ce15aac860846",
    //         "publishedAt": "2021-09-18T04:38:34Z",
    //         "content": "A dose of Pfizer-BioNTech COVID-19 vaccine is readied at a mobile vaccine clinic in Los Angeles. (Irfan Khan / Los Angeles Times)\r\nAmid persistent concerns that the protection offered by COVID-19 vac… [+8162 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Jesse O’Neill",
    //         "title": "Two of Gavin Newsom's children test positive for COVID-19 - New York Post ",
    //         "description": "According to a statement, California Governor Gavin Newsom is following COVID protocols after two of Newsom’s children tested positive for the virus.",
    //         "url": "https://nypost.com/2021/09/17/gavin-newsoms-children-test-positive-for-covid-19/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/09/newsom-kids-covid-306.jpg?quality=90&strip=all&w=1024",
    //         "publishedAt": "2021-09-18T03:26:00Z",
    //         "content": "Two of California Governor Gavin Newsoms children have tested positive for COVID-19 but Newsom himself does not have the virus, his office said Friday. \r\n“The governor’s children tested positive for … [+938 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-hill",
    //             "name": "The Hill"
    //         },
    //         "author": "Jordan Williams",
    //         "title": "American Samoa reports first case of COVID-19 | TheHill - The Hill",
    //         "description": "The American Samoa reported its first case of COVID-19 on Friday. ...",
    //         "url": "https://thehill.com/homenews/state-watch/572850-american-samoa-reports-first-case-of-covid-19",
    //         "urlToImage": "https://thehill.com/sites/default/files/ca_americansamoaflag_121319istock.jpg",
    //         "publishedAt": "2021-09-18T02:35:51Z",
    //         "content": "The American Samoa reported its first case of COVID-19 on Friday. \r\nThe territorys Department of Health confirmed the positive case among 43 travelers who were quarantined at a hotel, according to a … [+1246 chars]"
    //     }
    // ]

    static defaultProp = {
        country: 'in',
        pageSize: 12,
        category: "general"

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        //console.log("Hello I am a Cnstructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0

        }
        document.title = `NewsNinja - ${this.capitaliseFirstLetter(this.props.category)}`
    }

    async updateNews() {
        this.props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(70);
        //console.log(parsedData);
        
        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
        //console.log("Data Fetched")

    }

    async componentDidMount() {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData= await data.json();
        // //console.log(parsedData);
        // this.setState({loading:false});
        // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
        // console.log("Data Fetched")
        this.updateNews();

    }

    // handlePrevClick = async () => {
    //     // console.log("Previous")
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data=await fetch(url);
    //     // let parsedData= await data.json();
    //     // //console.log(parsedData);
    //     // this.setState({loading:false});

    //     // this.setState({
    //     //     page: this.state.page-1,
    //     //     articles: parsedData.articles
    //     // })
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }

    // handleNextClick = async () => {
    //     // console.log("Next");
    //     // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){


    //     //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     //     this.setState({loading:true});
    //     //     let data=await fetch(url);
    //     //     let parsedData= await data.json();
    //     //     this.setState({loading:false});
    //     //     //console.log(parsedData);

    //     //     this.setState({
    //     //         page: this.state.page+1,
    //     //         articles: parsedData.articles
    //     //     })
    //     // }
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }

    fetchMoreData = async() => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        // setTimeout(() => {
        //     this.setState({
        //         items: this.state.items.concat(Array.from({ length: 20 }))
        //     });
        // }, 1500);
        this.setState({page: this.state.page + 1});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        
        this.setState({ 
            articles: this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResults,
            loading: false
        })
        
    };

    render() {
        return (
            <>
            <div className="container my-1 " >

                <h1 className="display-6 my-2 mb-2 d-inline" style={{ color: "#FFC000" }}>NewsNinja - Top Headlines {this.props.category === "general" ? "" : " | " + this.capitaliseFirstLetter(this.props.category)}</h1>
                


                <hr className="my-2 mt-1" style={{ color: "#FFF000", height: "2px" }} />
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    // loader={<Spinner />}
                    
                >
                <div className="container"  >
                    <div className="row"  >

                        {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}  >
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "/NewsNinjaLogo.jpeg"} newsUrl={element.url} author={element.author ? element.author : "Unknown Source"} date={element.publishedAt ? element.publishedAt : "Unknown Time"} source={element.source.name ? element.source.name : ""} />
                            </div>
                        })}

                    </div>
                    </div>
                </InfiniteScroll>
                {this.state.loading && <Spinner />}

                {/* <hr className="my-1 mt-1" style={{ color: "#FFF000", height: "2px" }} /> */}
                {/* <div className="container d-flex justify-content-end">
                <button type="button" className="btn btn-warning my-4 mx-2"  onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr; Previous</button>
                <button type="button" className="btn btn-warning my-4 mx-2 text-end" style={{width:"110px"}} >{this.state.loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>} Page {this.state.page}&nbsp;&nbsp;</button>
                <button type="button" className="btn btn-warning my-4 mx-2"  onClick={this.handleNextClick} disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
                </div> */}
                

            </div>
            </> 
        )

    }
}

export default News
