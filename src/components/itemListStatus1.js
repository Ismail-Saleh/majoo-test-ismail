import React from 'react'
import {Table,Button,Col, Form,ButtonGroup} from 'react-bootstrap'


    const table = ({status0,editPresed,hapusData,modalShow})=> {

        let jam =   status0.sort(function(a,b){return new Date(a.createdAt) - new Date(b.createdAt)})
        let filter = jam.filter(status => status.status == 1)

    return (
        <div>
            <h2>Status 1</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>No</th>
                <th>Title</th>
                <th>Deskripsi</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
            {filter.map(function(status0,index){
                return (
                    <tr>
                <td>{index+1}</td>
                <td>{status0.title}</td>
                <td>{status0.description}</td>
                <td>{status0.status}</td>
                <td>{status0.createdAt}</td>
                <td>
                    <Form.Row>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant = "warning" onClick = {()=>{editPresed(status0.id,status0.status)}}>Edit</Button>
                        <Button variant = "danger"onClick = {()=>{hapusData(status0.id)}} disabled>Hapus</Button>
                        <Button variant = "primary" onClick = {()=>{modalShow(status0.id)}}>Detail</Button>

                        </ButtonGroup>
                    </Form.Row>
                </td>
                </tr>
                )
            })}
            
            </tbody>
        </Table>
        </div>
    )
}

export default table
