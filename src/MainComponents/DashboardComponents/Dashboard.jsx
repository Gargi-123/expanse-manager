import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { connect } from "react-redux"
import { addExpense } from "../../Redux/action"
import {Alert} from '@material-ui/lab';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            amount: "",
            category: "",
            type: "",
            date: "",
            isAdded:false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isAdded : false
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        const { amount, description,type, category, date } = this.state
        if (amount === "" || description === "" || type==="" || category === "" ) {
            alert("Enter All The Fields");
            return;
        }
        let object = { description, amount, category, type, date}
        this.props.addExpense(object)
        this.setState({
            description: "",
            amount: "",
            category: "",
            type: "",
            isAdded:true
        }, () => { })

    }


    render() {
        const { category, type} = this.props
        return (
            <>
                <DashboardNavbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col" style={{ maxWidth: "1000px", margin: "auto" }}>
                                    <form>
                                        <div className="form-group">
                                            <h2 className="text-center">ADD EXPENSE</h2>
                                            <label>Description :</label>
                                            <input onChange={this.handleChange} value={this.state.description} name="description" className="form-control" placeholder="On What you spent ?" />
                                        </div>
                                        <div className="form-group">
                                            <label>Amount :</label>
                                            <input onChange={this.handleChange} value={this.state.amount} name="amount" className="form-control" placeholder="How much you spent ?" />
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col">
                                                    <label>Pick a Date : </label>
                                                    <input onChange={this.handleChange} value={this.state.date} type="date" name="date" className="form-control" placeholder="How much you spent ?" />
                                                </div>

                                                <div className="col">
                                                    <label>Category :</label>
                                                    <select onChange={this.handleChange} name="category" value={this.state.category} className="form-control">
                                                        <option value="">Select Category</option>

                                                        {category?.map(item =>
                                                            <option key={item.id} value={item.title}>{item.title}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label>Type :</label>
                                                    <select onChange={this.handleChange} name="type" value={this.state.type} className="form-control">
                                                        <option value="">Select Type</option>

                                                        {type?.map((item, index) =>
                                                            <option key={index} value={item}>{item}</option>
                                                        )}
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group  text-center">
                                            <button
                                                className="btn btn-primary btn-block"
                                                onClick={this.handleClick}
                                            >ADD</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {this.state.isAdded?
                            <div style={{ maxWidth: "980px", margin: "auto" }}>
                            <Alert severity="info">
                            <strong>Transaction added successfully !!!</strong>
                            </Alert>
                            </div> : null
                            }
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    category: state.category,
    type: state.type,
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    addExpense: payload => dispatch(addExpense(payload)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Dashboard);