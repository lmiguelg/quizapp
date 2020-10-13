import React,{Component} from 'react'
import Hero from './views/Hero'
import Turn from './views/Turn'
import StartQuiz from './views/StartQuiz'
import {APIURL} from './config/config'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'


class AuthorQuiz extends Component {
    state={
        items: null,
        n_games:0
    }

    componentDidMount() {       
        fetch(APIURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ items: data.results })
          
        })
        .catch(console.log)
    }

    render() { 
    
        return ( 
            <div className="container">
                <Hero/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <StartQuiz/>   
                        </Route>
                        <Route exact path="/quiz">
                            <Turn {...this.state }/>   
                        </Route>
                    </Switch>
                </BrowserRouter>
                
                
               
            </div>
            
         );
    }
}
 
export default AuthorQuiz;