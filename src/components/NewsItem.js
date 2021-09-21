import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let {title,description,imageUrl,newsUrl, author, date, source}=this.props;
        return (
            <div >
                <div className="card mx-2 my-2 border border-2 border-warning"  >
                {/* <span class="position-absolute translate-middle-y top-0  badge rounded-pill bg-warning text-dark fw-normal" style={{zIndex:'1',left:"-5px"}}>
                    {source}
                </span> */}
                <img  src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="badge rounded-pill bg-warning text-dark fw-normal" >{source}</span></h5>
                    <p className="card-text " >{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm" style={{backgroundColor:"#FFC000"}}>Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
