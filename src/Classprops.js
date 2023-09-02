import React,{ Component } from 'react'

export class Classprops extends Component {
    render(){
        return(
            <div class="container">

             <h1>Hello  welcome to my you tube channel</h1>
             <p>{this.props.children}</p>
                </div>
        )
    }
}

export default Classprops