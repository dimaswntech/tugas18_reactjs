import React, { Component } from 'react';
import { Col,
Row,
Card,
CardTitle,
TextInput,
Carousel  } from 'react-materialize';

class App extends Component {
  render(){
    return (
      <div>
        <Carousel
          images={[
            'https://lorempixel.com/800/400/food/1',
            'https://lorempixel.com/800/400/food/2',
            'https://lorempixel.com/800/400/food/3',
            'https://lorempixel.com/800/400/food/4',
            'https://lorempixel.com/800/400/food/5'
          ]}
        />
        <Row>
          <Col m={6} s={12}>
            <Card

              className="small"
              actions={[<a href="/">Link 1</a>,<a href="/">Link 2</a>]}
              header={
                <CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">Header Card
                </CardTitle>
              }
              >
                Card Content
            </Card>
          </Col>
          <Col m={6} s={12}>
          <Card
            className="small"
            actions={[<a href="/">Link 1</a>,<a href="/">Link 2</a>]}
            header={
              <CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">Header Card
              </CardTitle>
            }
            >
              Card Content
          </Card>
          </Col>

        </Row>
        <Row>
          <TextInput label="Nama Depan" icon="account_circle" />
          <TextInput password label="password" icon="lock" />
          <TextInput file label="File"   />
        </Row>

      </div>
    );
  }
}

export default App;
