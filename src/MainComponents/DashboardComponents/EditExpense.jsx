import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { connect } from "react-redux"
import { editExpense } from "../../Redux/action"

class EditExpense extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            amount: "",
            user: "",
            category: "",
            type: "",
            date :""
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        const { data} = this.props
        data.map(item =>
            item.id === id ? this.setState({
                description: item.title.description,
                amount: item.title.amount,
                user: item.title.user,
                category: item.title.category,
                type: item.title.type,
                date : item.title.date
            }) : null)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        const { id } = this.props.match.params
        let payload = {
            description : this.state.description,
            amount : this.state.amount,
            user :  this.state.user,
            category : this.state.category,
            type : this.state.type,
            uid : id,
            date : this.state.date
        }
        this.props.editExpense(payload)
        // console.log(this.props.history)
        this.props.history.push({pathname :"/Dashboard"})

    }

    render() {
        const { users, category, type } = this.props

        return (
            <>
                <DashboardNavbar />
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
                            <form>
                                <div className="form-group">
                                    <h2 className="text-center">EDIT EXPENSE</h2>
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
                                            <label>Pic a Date : </label>
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
                                    >UPDATE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
    category: state.category,
    type: state.type,
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    editExpense: (payload) => dispatch(editExpense(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(EditExpense);