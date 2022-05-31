import React, { Component } from 'react';
import Header from './components/Header';
import ToolBar from './components/toolBar';
import Editor from './components/Editor';
import './App.css';
import Previewer from './components/Previewer';
import { marked } from 'marked';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: placeholder,
            editorMaximize: false,
            previewMaximize: false
        };
    
    this.handleChange = this.handleChange.bind(this);
    this.getMarkDown = this.getMarkDown.bind(this);
    this.handleMaximize = this.handleMaximize.bind(this);
    }
    handleMaximize(window){
      if(window === 'editor'){
         this.setState({
           editorMaximize: !this.state.editorMaximize,
           previewMaximize: this.state.previewMaximize
         })
      }
       if(window === 'preview') {
        this.setState({
          editorMaximize: this.state.editorMaximize,
          previewMaximize: !this.state.previewMaximize
        })
      }
  }
    handleChange(e){
        this.setState({value: e.target.value})
    }

    getMarkDown(value){
        return {__html: marked(this.state.value, {breaks: true, gfm: true})};
    }
  render() {
    const classes = this.state.editorMaximize ? ['editormax','hide','toolbarmax']:this.state.previewMaximize ? ['hide','previewmax','toolbarmax'] : ['editor','previewer', 'toolbar'];
    return (
      <div className='app'>
          <Header/>
          <div className='wrapper'>
          <div className={classes[0]}>
            <ToolBar heading = 'Editor' maximize={this.state.editorMaximize} style={classes[2]} onClick = {() =>{this.handleMaximize('editor');}} />
          <Editor onChange={this.handleChange} value={this.state.value}/>
          </div>
          <div className={classes[1]}>
          <ToolBar heading = 'Preview' maximize={this.state.previewMaximize} style={classes[2]} onClick = {() => {this.handleMaximize('preview');}} />
          <Previewer getMarkDown = {this.getMarkDown}/>
          </div>
          </div>
      </div>
    )
  }
}

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo]()
`;
