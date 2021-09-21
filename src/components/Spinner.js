import React, { Component } from 'react'
//import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            // <div className="d-inline">
            //     <img src={loading} alt="loading"/>
            // </div>
            <div className="d-flex justify-content-center ">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner
