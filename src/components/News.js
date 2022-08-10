import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
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
    constructor(props) {
        //constructor ke ander supper() define krna complusry hai 
        super(props);
        //state define ki hai ek dictinory ki tarah or constructor ke ander ki hai sate ko hm chage kr sakthe hai toh wo dhany rkh
        this.state = {
            articles: this.articles,
            loading: false,
            totalResult:1,
            page: 1,
        }
        document.title=`Newsworld-${this.props.category[0].toUpperCase()+this.props.category.slice(1)} articles`
    }
    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        this.props.setProgress(30)
        let data = await fetch(url);
        // data parse kiya api se aur uski ek json file ki traah bnayi
        let parsedData = await data.json()
        this.props.setProgress(50)
        this.setState({ articles: parsedData.articles,
            loading:false,
            totalResult: parsedData.articles.length 
        }
        )
        this.props.setProgress(100)

    }
    fetchMoreData = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: this.state.articles.concat(parsedData.articles),
            totalResult:parsedData.articles.length ,
            page: this.state.page + 1
         },

         )

    }
    render() {
        

        return (
            <>

                <div className="container" style={{ margin: "50px" }}>
                    <h1 align="center">Newsworld-Top {this.props.category[0].toUpperCase()+this.props.category.slice(1)} headlines</h1>
                    {/* {this.state.loading && <Spinner/>} */}
                    <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.totalResult!==0}
                    loader={<Spinner/>}>
                    <div className="container">
                    <div className="row" >
                        {/* here we have used array map function to map the content with data.json file  */}
                        {!this.state.loading &&this.state.articles.map((element) => {
                            // we have used key to unqiuely define each news with there url so different news can be render
                            return <div className="col-sm" key={element.url}>
                                <Newsitems imgurl={ element.urlToImage ? element.urlToImage : "https://c.ndtvimg.com/2022-08/tt2dkki8_mobile_625x300_08_August_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675?ver-20220723.02"} title={element.title} desc={element.description} url={element.url} source={element.source.name?element.source.name:"unknown"} time={new Date(element.publishedAt).toTimeString()} author={element.author?element.author:"Anoynomous"} color={this.props.color}/>
                            </div>
                        })}
                    </div>
                    </div>
                  </InfiniteScroll>
                </div>
                


            </>

        )
    }
}

export default News
