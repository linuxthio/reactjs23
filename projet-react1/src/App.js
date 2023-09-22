import React from "react";
import { Navbar, Card } from 'react-bootstrap';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar expand="lg" bg="light" >
            <h1>Mon Application React</h1>
          </Navbar>
          <Card>
            <Card.Title>Card 1</Card.Title>
          </Card>
          <Card>
            <Card.Title>Card 2</Card.Title>
          </Card>
          <Card>
            <Card.Title>Card 3</Card.Title>
          </Card>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
