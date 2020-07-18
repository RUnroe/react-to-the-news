import React, { Component } from 'react';
import './App.css';
import Filter from './Filter.js';
import HeadlineContainer from './HeadlineContainer.js';

class App extends Component {
  
  state = {
    apiKey: '79db9f59d70e44c4a0dcb726b9a83ca5',
    headlines: [],
    sources: [],
    selectedSource: ""
  }


  componentDidMount() {
    fetch("https://newsapi.org/v2/sources?language=en&apiKey=" + this.state.apiKey).then(
      response => response.json()
    ).then(data => {
      this.setState({
        sources: data.sources.slice(0, 10)
      });
      this.changeFilterClick(data.sources[0].id, data.sources[0].name);
    });
  }


  changeFilterClick = (sourceID, sourceName) => {
    let sourceString = sourceID ? `sources=${sourceID}&` : "";
    fetch(`https://newsapi.org/v2/everything?${sourceString}language=en&apiKey=${this.state.apiKey}`).then(
        response => response.json()
    ).then(data => {
        this.setState({
          selectedSource: sourceName,
          headlines: data.articles
        })
    });
    
  }

  

  render() {
  return (
    <div className="App">
      <section id="header">
        <div id="headerBGImg"></div>
        {/* <h1>React News</h1> */}
      </section>
      <Filter sources={this.state.sources} selectedSource={this.state.selectedSource} onClick={this.changeFilterClick}/>
      <HeadlineContainer headlines={this.state.headlines}/>
      <section id="footer" className="vertical-align-text">
        Made by Ryan using React
      </section>
    </div>
  );}

}

export default App;
