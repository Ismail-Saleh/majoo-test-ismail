import React from 'react'
import {Table,Button,Col, Form,ButtonGroup} from 'react-bootstrap'
import momen from 'moment'

    const table = ({status1,editPresed,hapusData})=> {
    let jam =   status1.sort(function(a,b){return new Date(b.createdAt) - new Date(a.createdAt)})
    let filter = jam.filter(status => status.status == 0)
    return (
        <div>
            <h2>Status 0</h2>
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


            {filter.map(function(value,index){
                return (
                    <tr>
                <td>{index+1}</td>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td>{value.status}</td>
                <td>{value.createdAt}</td>
                <td>
                    <Form.Row>
                        
                        <ButtonGroup aria-label="Basic example">
                        <Button variant = "warning" onClick = {()=>{editPresed(value.id,value.status)}}>Edit</Button>
                        <Button variant = "danger"onClick = {()=>{hapusData(value.id)}}>Hapus</Button>
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
