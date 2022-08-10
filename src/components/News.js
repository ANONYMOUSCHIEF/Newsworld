import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    //here we have declare the proptypes and also the defult values 
    static defaultProps = {
        country:"in", 
        api:"7dcb46a28e1b498d86bdac6e6f774d32",
        pageSize:6,
        category:"general"
      }
      static propTypes ={
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number}
    //by defalut hmne iss empty assign kiya baad mei update kr denge
    articles = []
    constructor() {
        //constructor ke ander supper() define krna complusry hai 
        super();
        //state define ki hai ek dictinory ki tarah or constructor ke ander ki hai sate ko hm chage kr sakthe hai toh wo dhany rkh
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        //componentdidmount api fetch krne ke liye use kiya 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        // data parse kiya api se aur uski ek json file ki traah bnayi
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,loading:false })
    }
    handleNextclick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        console.log('next');
        this.setState({articles: parsedData.articles,page: this.state.page+1,loading:false})
    }
    handlePreclick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        console.log('previous');
        this.setState({articles: parsedData.articles,page: this.state.page-1,loading:false})
    }
    render() {
        

        return (
            <>

                <div className="container" style={{ margin: "50px" }}>
                    <h1 align="center">Newsworld-Top headlines</h1>
                    {this.state.loading && <Spinner/>}
                    <div className="row" >
                        {/* here we have used array map function to map the content with data.json file  */}
                        {!this.state.loading &&this.state.articles.map((element) => {
                            // we have used key to unqiuely define each news with there url so different news can be render
                            return <div className="col-sm" key={element.url}>
                                <Newsitems imgurl={element.urlToImage ? element.urlToImage : "https://c.ndtvimg.com/2022-08/tt2dkki8_mobile_625x300_08_August_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675?ver-20220723.02"} title={element.title} desc={element.description} url={element.url} source={element.source.name?element.source.name:"unknown"} time={new Date(element.publishedAt).toTimeString()} author={element.author?element.author:"Anoynomous"} />
                            </div>
                        })}
                    </div>
                    <div className="row  justify-content-between my-3">
                    <div className="col-4">
                        <button type="button" disabled={this.state.page===1} className="btn btn-primary " onClick={this.handlePreclick}>Previous</button>
                    </div>
                    <div className="col-4">
                        <button type="button" disabled={this.state.articles.length< this.props.pageSize}className="btn btn-primary " onClick={this.handleNextclick}>Next</button>
                    </div>
                </div>
                </div>
                


            </>

        )
    }
}

export default News
