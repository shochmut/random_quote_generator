import './App.css';

//To Import Bootstrap components ex: import Button from "react-bootstrap/Button"//
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {Component} from 'react';
import { BsTwitter, BsFacebook } from 'react-icons/bs';


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
        <Card className='Card' border="primary" bg={'primary'} style={{ align: 'center' }}>
          <Card.Body>
            <Card.Header as='h5'>Daily Motivation</Card.Header>
            <Card.Title id='Title'>The only person you are destined to become is the person you decide to be</Card.Title>
            <Card.Text id='author'>
              -Ralph Waldo Emerson
            </Card.Text>
            <Button className='left' variant="primary" id='new-quote'>New Quote</Button>
            <Button className='right' variant="primary">
              <a id='tweet-quote' href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22You%20may%20be%20disappointed%20if%20you%20fail%2C%20but%20you%20are%20doomed%20if%20you%20don%E2%80%99t%20try.%22%20Beverly%20Sills'>
                <BsTwitter/>
              </a>
            </Button>
            <Button className='right' variant="primary">
              <a id='facebook-quote' href='https://www.facebook.com/'>
                <BsFacebook/>
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}




export default App;
