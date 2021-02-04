import React, { Component } from 'react'
import Table from './itemListStatus1'
import Forms from './form'
import Status1 from './itemListStatus0'
import moment from 'moment'
import axios from 'axios'
import {Modal,Col,Row,Form,Button} from 'react-bootstrap'
export default class index extends Component {

constructor(props) {
    super(props)

    this.state = {
         status0 : [],
         status1 : [],
         title: "",
         description : "",
         status : "",
         id:"",
         modal : false,
         createdAt: moment().format()
    }
}


componentDidMount(){
    axios.get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list").then(res =>{
        console.log(res);
        this.setState({
            status0 : res.data
        })
    })
}


modalShow = (id) =>{
    const dipilih = this.state.status0.filter((values)=>values.id == id).map((value)=>{
        return value;
    })
        this.setState({
        title : dipilih[0].title,
        description : dipilih[0].description,
        status : dipilih[0].status,
        id : dipilih[0].id,
        modal :true
    })

}

closeModal =()=>{
    this.setState({
        modal:false
    })
}


handleChange = (event) =>{
    this.setState({
        [event.target.name] : event.target.value
    })
}

editPresed = (id,status) =>{
   
   
        const dipilih = this.state.status0.filter((values)=>values.id == id).map((value)=>{
            return value;
        })
            this.setState({
            title : dipilih[0].title,
            description : dipilih[0].description,
            status : dipilih[0].status,
            id : dipilih[0].id
        })
   
   
}

hapusData = (id) => {
        console.log("waddd"+id);
        const BukanPilihan = this.state.status0.filter((values)=>values.id != id).map((value)=>{
            return value;
        })
        this.setState({
            status0 : BukanPilihan,
            modal : false
        })
}


handleSubmit = (event)=>{
    event.preventDefault();
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear(); 
    

    if (this.state.id == "") {
        this.setState({
            status0 : [
                ...this.state.status0,
                {
                    id : this.state.status0.length + 1,
                    title : this.state.title,
                    description : this.state.description,
                    status : this.state.status,
                    createdAt : year + "-" + month +"-"+date+" "+ moment().format('LT')
                }
            ],
            title: "",
            description : "",
            status : "",
            id:"",
        })
    }
    else
    {
        const BukanPilihan = this.state.status0.filter((values)=>values.id != this.state.id).map((value)=>{
            return value;
        })
        this.setState({
            status0 : [
                ...BukanPilihan,
                {
                    id : this.state.status0.length + 1,
                    title : this.state.title,
                    description : this.state.description,
                    status : this.state.status,
                    createdAt : year + "-" + month +"-"+date+" "+ moment().format('LT')
                }
            ],
             nama: "",
             description : "",
             harga : "",
             id:"",
             modal:false
        })
    }
}

    render() {
        return (
            <div>
                <Modal show={this.state.modal} onHide = {this.closeModal}>
                    <Modal.Header>Detail title</Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Form >
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Group controlId="nama">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Title" name="title" value = {this.state.title} onChange = {(event)=> this.handleChange(event)}/>
                                            <Form.Text className="text-muted">
                                            Isikan title yang ingin ditambah
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="deskripsi">
                                            <Form.Label>Deskripsi</Form.Label>
                                            <Form.Control as="textarea" rows={3}  name="description" value={this.state.description} onChange = {(event)=> this.handleChange(event)}/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridState">
                                            <Form.Label>Status</Form.Label>
                                            <Form.Control name = "status" value ={this.state.status} onChange = {(event)=> this.handleChange(event)} onClick = {(event)=> this.handleChange(event)} as="select">
                                                <option value = "0">Status 0</option>
                                                <option value = "1">Status 1</option>
                                            </Form.Control>
                                            </Form.Group>
                                        <Button variant="warning" onClick={this.handleSubmit}>
                                            Edit
                                        </Button>{' '}
                                        {(this.state.status === 1) ? <Button variant="danger" onClick={()=>{this.hapusData(this.state.id)}} disabled>
                                            Delete
                                        </Button>:
                                        <Button variant="danger" onClick={()=>{this.hapusData(this.state.id)}}>
                                            Delete
                                        </Button>
                                        }
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
                <div className="container mt-4">
                    <Table status0 = {this.state.status0} editPresed = {this.editPresed} hapusData = {this.hapusData} modalShow={this.modalShow} />
                    <Status1 status1 = {this.state.status0} editPresed = {this.editPresed} hapusData = {this.hapusData} modalShow={this.modalShow}/>
                    <Forms {...this.state} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} />
                </div>
            </div>
        )
    }
}
