import './App.css';

//To Import Bootstrap components ex: import Button from "react-bootstrap/Button"//
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {Component} from 'react';
import { BsTwitter, BsFacebook } from 'react-icons/bs';

const quotes = [{quote: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius'},
                {quote: 'The best preparation for tomorrow is doing your best today.', author: 'H. Jackson Brown, Jr.'},
                {quote: 'Yesterday is not ours to recover, but tomorrow is ours to win or lose', author: 'Lyndon B. Johnson'},
                {quote: 'Your attitude, not your aptitude, will determine your altitude', author: 'Zig Ziglar'},
                {quote: 'Strength and growth come only through continuous effort and struggle', author: 'Napoleon Hill'}]



function App() {
  return (
    <div className="App" id='quote-box'>
      {/* Inserted Code Below This */}
      <CardComponent/>
    </div>
  );
}

function randomIntFromInterval(min, max) {
  // function generates random number between input min and max numbers, inclusive
  return Math.floor(Math.random() * (max-min+1) + min)
}

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = quotes[randomIntFromInterval(0, quotes.length)]

    this.handleClick = this.handleClick.bind(this)
  };

  handleClick() {
    this.setState(
      quotes[randomIntFromInterval(0, quotes.length)]
    )
  }

  render() {
    return (
      <div>
        <Card className='Card' border="primary" bg={'primary'} style={{ align: 'center' }}>
          <Card.Body>
            <Card.Header as='h5'>Daily Motivation</Card.Header>
            <Card.Title id='text'>{this.state.quote}</Card.Title>
            <Card.Text id='author'>{this.state.author}</Card.Text>
            <Button className='left' variant="primary" id='new-quote' onClick={this.handleClick}>New Quote</Button>
            <Button className='right' variant="primary">
              <a id='tweet-quote' href='https://twitter.com/intent/tweet'>
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
