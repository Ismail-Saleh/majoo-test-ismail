import React, { Component } from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
export default class App extends Component {
  render() {
    return (
      <div className="container mt-3">
            <Row>
                <Col>
                    <h1>Tambah Data</h1>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form>
                <Form.Group controlId="nama">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" name="title" value = ""/>
                    <Form.Text className="text-muted">
                      Isikan title yang ingin ditambah
                    </Form.Text>
                  </Form.Group>

                <Form.Group controlId="deskripsi">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={3}  name="deskripsi" value=""/>
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                  </Form.Control>
                </Form.Group>
                  
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                </Col>
            </Row>
        </div>
    )
  }
}
