import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title,desc,imgurl,url,author,time,source,color}=this.props
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
        <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${color}`}>
          {source}
  </span>
        <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><small className="text-muted">By {author} at {time}</small></p>
          <p className="card-text">{desc}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Continue reading</a>
        </div>
      </div>
      </>
    )
  }
}

export default Newsitems
