import React,{Component} from 'react'
import Hero from './views/Hero'
import Turn from './views/Turn'
import Continue from './views/Continue'
import {APIURL} from './config/config'


class AuthorQuiz extends Component {
    state={
        items: null
    }

    componentWillMount() {
        fetch(APIURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ items: data.results })
          console.log(data.results);
        })
        .catch(console.log)
    }

    render() { 
        return ( 
            <div>
                <Hero/>
                <Turn {...this.state}/>   
                <Continue/>
            </div>
            
         );
    }
}
 
export default AuthorQuiz ;