import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title,desc,imgurl,url,author,time,source}=this.props
    return (
      <><button type="button" class="btn btn-danger position-relative">
        {source}
    </button>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p class="card-text"><small class="text-muted">By {author} at {time}</small></p>
          <p className="card-text">{desc}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Continue reading</a>
        </div>
      </div>
      </>
    )
  }
}

export default Newsitems
