import React from 'react';
import {
	Link,
	BrowserRouter,
	StaticRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/client">Client</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		);
	}
}

class Client extends React.Component{
	render(){
		return (
			<h1>Client</h1>
		);
	}
}

class About extends React.Component{
	render(){
		return (
			<h1>About</h1>
		);
	}
}

export default class App extends React.Component{
    render(){
		const app = (
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">.NET Core Sample Test</h1>
					<Navbar/>
					<hr className="my-4" />
					<Switch>
						<Route path="/" component={() => { return <h1>Home</h1>}}/>
						<Route path="/client" component={Client}/>
						<Route path="/about" component={About}/>
					</Switch>
				</div>
			</div>
		);
		
		if (typeof window === 'undefined') {
			return (
				<StaticRouter
					context={this.props.context}
					location={this.props.location}
				>
					{app}
				</StaticRouter>
			);
		}

        return (
            <BrowserRouter>{app}</BrowserRouter>
        );
    }
}