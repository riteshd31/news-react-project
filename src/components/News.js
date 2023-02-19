import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

export default class News extends Component {

  static propTypes={
    category: PropTypes.string,
    pageSize: PropTypes.number

  }

  static defaultProps={
    category:"general",
    pageSize: 6  
  }

  newsarticles = []

  constructor(props) {
    super(props);
    this.state = {
      newsarticles: this.newsarticles,
      page: 1
    }
  }
  //this lifecycle function is equivalent to react use effect hook
  async  componentDidMount()
  {
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f647db4c36483a81c42e6ba34a41ea&pageSize=${this.props.pageSize}&category=${this.props.category}`;
      let articles= await fetch(url);
      let parseddata= await articles.json();
      console.log(parseddata);
      this.setState({newsarticles: parseddata.articles, totalResults:parseddata.totalResults});
  }
  previous=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f647db4c36483a81c42e6ba34a41ea&pageSize=${this.props.pageSize}&page=${this.state.page-1}&category=${this.props.category}`;
      let articles= await fetch(url);
      let parseddata= await articles.json();
      console.log(parseddata);
      this.setState({page: this.state.page-1,newsarticles: parseddata.articles});
    
  }
  next= async()=>{
    // if(this.state.page+1> Math.ceil(this.state.totalResults/6))
    // {

    // }
    // else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f647db4c36483a81c42e6ba34a41ea&pageSize=${this.props.pageSize}&page=${this.state.page+1}&category=${this.props.category} `;
      let articles= await fetch(url);
      let parseddata= await articles.json();
      console.log(parseddata);
      this.setState({page: this.state.page+1, newsarticles: parseddata.articles});
    
  }
  render() {
    return (
      <>
      <div style={{ background: "#212529" }}>
        <br></br>
        <h2 style={{ textAlign: "center", color: "#bc1819" }}>Welcome to Marvel News</h2>
        <br></br>
        <div className='row'>
          {this.state.newsarticles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItems title={element.title ? element.title.slice(0, 20) : "Empty"} description={element.description ? element.description.slice(0, 50) : "Empty"} imgurl={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"} newsurl={element.url} />
            </div>

          })}


        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type='button' className='btn btn-danger' onClick={this.previous}>&larr; Previous</button>
          <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/6)} type='button' className='btn btn-danger' onClick={this.next}>Next &rarr;</button>
        </div>





      </div>
        
     
     </>
    )
  }
}
