import React, { Component } from 'react'
import Table from './itemListStatus1'
import Forms from './form'
import Status1 from './itemListStatus0'
import moment from 'moment'
import axios from 'axios'
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
            status0 : BukanPilihan
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
             id:""
        })
    }
}

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <Table status0 = {this.state.status0} editPresed = {this.editPresed} hapusData = {this.hapusData}/>
                    <Status1 status1 = {this.state.status0} editPresed = {this.editPresed} hapusData = {this.hapusData} />
                    <Forms {...this.state} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} />
                </div>
            </div>
        )
    }
}
