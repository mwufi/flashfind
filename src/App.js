import React, { Component } from 'react';
import TreeView from './components/TreeView';
import './App.css';
import pages from './examples.js';

class App extends Component {
  constructor() {
    super();

    this.showHTML = this.showHTML.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.root = null;

    var parser = new DOMParser();
    var doc = parser.parseFromString(pages[1], "text/html").body;
    this.state = ({
      string: pages[1],
      doc: doc,
      currentElement: doc
    });
  }


  onKeyPress(event) {
    const { currentElement } = this.state;
    switch (event.key) {
      case 'l':
        if (currentElement.children.length) {
          this.setState(
            {
              ...this.state,
              currentElement: currentElement.children[0]
            });
        }
        break;
      case 'h':
        if (currentElement.tagName !== "BODY") {
          this.setState(
            {
              ...this.state,
              currentElement: currentElement.parentNode
            });
        }
        break;
      case 'k':
      if(currentElement.previousElementSibling){

        this.setState(
          {
            ...this.state,
            currentElement: currentElement.previousElementSibling
          });
      }
        break;
      case 'j':
      if(currentElement.nextElementSibling){
        this.setState(
          {
            ...this.state,
            currentElement: currentElement.nextElementSibling
          });
        }
        break;
      default:
        break;
    }
  }

  showHTML() {
    const iframe = document.getElementById('iframe');
    if(iframe && this.state.currentElement){
      const doc = iframe.contentWindow.document;
      doc.body.innerHTML = this.state.currentElement.outerHTML;
    }
  }

  componentDidMount() {
    this.root.focus();
    this.showHTML();
  }

  render() {
    const { currentElement } = this.state;

    this.showHTML();

    return (
      <div className="App" onKeyPress={this.onKeyPress} ref={c => (this.root = c)} tabIndex="-1">
        <header className="App-header">
          <div className="column">
            <iframe ref={c => (this.iframe = c)} title="no" id="iframe" />
            <button onClick={this.showHTML}> Show HTML </button>
          </div>
          <div className="column">
            <TreeView tree={this.state.doc} highlight={currentElement}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
