import React, { Component } from 'react';
import './TreeView.css';

class TreeView extends Component {

  constructor(props) {
    super(props);

    this.state = { collapsed: props.collapsed };

    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState(state => ({
      collapsed: !state.collapsed
    }));
  }


  render() {
    const tree = this.props.tree;
    const { collapsed } = this.state;

    if (tree === undefined || tree === null) {
      console.error("Tried to render null");
      console.error(tree);
      return <></>;
    }

    const format = (element) => {
      if (typeof (element) == 'string') {
        return element;
      }
      try {

        var s = `<${element.tagName.toLowerCase()} class="${element.classList}"`;
        for (let i = 0; i < element.attributes.length; i++) {
          s += `${element.attributes[i].name}=${element.attributes[i].value} `;
        }
        return s;
      } catch (err) {
        console.error("Error rendering element!", element);
        return "dfdfd";
      }
    }

    const getChildren = (element) => {
      const elements = []
      for (let i = 0; i < element.children.length; i++) {
        elements.push(<TreeView key={format(element.children[i])} tree={element.children[i]} collapsed={true} />);
      }
      return elements;
    }

    if (typeof (tree) === 'string') {
      console.error("Hit a string!");
      return <pre className="TreeView" onClick={this.expand}> {tree} </pre>;
    }

    if (!tree.children) {
      return <pre className="TreeView" onClick={this.expand}> {format(tree)}</pre>;
    }

    if (collapsed) {
      return (
        <pre className="TreeView" onClick={this.expand}> + {format(tree)} </pre>
      );
    } else {
      return (
        <div>
          <pre className="TreeView" onClick={this.expand}> - {format(tree)}</pre>
          <div className="TreeViewChildren">
            {getChildren(tree)}
          </div>
        </div>
      );
    }
  }
}

export default TreeView;