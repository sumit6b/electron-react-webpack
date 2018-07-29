import React from 'react'
import ReactDOM from 'react-dom'

class Container extends React.Component{
  render(){
    return (<div>Succeess</div>)
  }
}

const reactdiv = document.querySelector('#react-container');
ReactDOM.render(<Container />, reactdiv, () => {console.log('React component successfully loaded')})