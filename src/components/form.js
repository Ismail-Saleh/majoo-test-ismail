import React from 'react'
import {Row,Col,Button,Form} from 'react-bootstrap'
function FormData({title,description,status,handleChange,handleSubmit}) {
    return (
        <div className="container mt-4">
            <Row>
                <Col>
                    <h1>Tambah Data</h1>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form onSubmit = {handleSubmit}>
  <Form.Group controlId="nama">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter Title" name="title" value = {title} onChange = {(event)=> handleChange(event)}/>
    <Form.Text className="text-muted">
      Isikan nama yang ingin ditambah
    </Form.Text>
  </Form.Group>

<Form.Group controlId="deskripsi">
    <Form.Label>Deskripsi</Form.Label>
    <Form.Control as="textarea" rows={3}  name="description" value={description} onChange = {(event)=> handleChange(event)}/>
  </Form.Group>
  <Form.Group controlId="formGridState">
      <Form.Label>Status</Form.Label>
      <Form.Control name = "status" value ={status} onChange = {(event)=> handleChange(event)} onClick = {(event)=> handleChange(event)} as="select">
        <option value = "0">Status 0</option>
        <option value = "1">Status 1</option>
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

export default FormData
