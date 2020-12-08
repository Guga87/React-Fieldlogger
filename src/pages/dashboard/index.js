import React from 'react';
import api from  '../../services/api';
const convert = require("xml-js");


export default class Dashboard extends React.Component{

    constructor(props){
        super(props);

        this.state={
            temperatura:0,
        }        
    }

    async componentDidMount(){
        const response= await api.get('/channels.xml');
        console.warn(response);
        this.setState({temperatura: 10});        
        //response.data
    }

    render(){
        return(
            <div>
                {this.state.temperatura}
            </div>
        );
    }
}