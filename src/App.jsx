import './App.css';
//To Import Bootstrap components ex: import Button from "react-bootstrap/Button"//
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {Component} from 'react';
import { BsTwitter } from 'react-icons/bs';

function App() {
  return (
    <div className="App" id='quote-box'>
      {/* Inserted Code Below This */}
      <CardComponent/>
    </div>
  );
}

class CardComponent extends Component {
  render() {
    return (
      <div>
        <Card style={{ align: 'center' }}>
          <Card.Img variant="top"/> 
          <Card.Body>
            <Card.Title id='text'>This is the really big quote and Im testing it out</Card.Title>
            <Card.Text id='author'>
              Author
            </Card.Text>
            <Button variant="primary" id='new-quote'>New Quote</Button>
            <Button variant="primary">
              <a id='tweet-quote' href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22You%20may%20be%20disappointed%20if%20you%20fail%2C%20but%20you%20are%20doomed%20if%20you%20don%E2%80%99t%20try.%22%20Beverly%20Sills'>
                <BsTwitter/>
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}




export default App;
