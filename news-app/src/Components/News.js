import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
  }

  fetchNews = async (page) => {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9243cf95d66f47be8a63ce7ceed757cc&page=${page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: page,
      loading: false,
      
    });
    this.props.setProgress(100);
  };

  async componentDidMount() {
    this.fetchNews(1);
  }

fetchMoreData = async () => {
  const nextPage = this.state.page + 1;
  this.setState({ loading: true });

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9243cf95d66f47be8a63ce7ceed757cc&page=${nextPage}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    page: nextPage,
    loading: false,
  });
};

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" style={{ margin: "35px" }}>
            News Monkey - Top{" "}
            {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}{" "}
            Headlines
          </h2>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 54) : ""}
                    description={element.description ? element.description.slice(0, 100) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source = {element.source.name}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
