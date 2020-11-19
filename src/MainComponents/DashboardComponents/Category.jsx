import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { connect } from "react-redux"
import { addCategory, removeCategory } from "../../Redux/action"
import DeleteIcon from "@material-ui/icons/Delete"


class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        if (this.state.category === "") {
            alert("Enter Category")
            return;
        }
        this.props.addCategory(this.state.category)
        this.setState({
            category: "",
        }, () => { })
    }
    handleRemove = (e, id) => {
        e.preventDefault()
        this.props.removeCategory(id)
    }

    render() {
        const { category } = this.props
        return (
            <>
                <DashboardNavbar />
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
                            <form>
                                <div className="form-group">
                                    <h2 className="text-center">Manage Categories</h2>
                                    <label>Add Category :</label>
                                    <input
                                        onChange={this.handleChange}
                                        value={this.state.category}
                                        name="category"
                                        className="form-control"
                                        placeholder="Add your category" />
                                </div>
                                <div className="form-group  text-center">
                                    <button
                                        className="btn btn-primary btn-block"
                                        onClick={this.handleClick}
                                    >ADD</button>
                                </div>
                                <div className="form-group mt-5">
                                    {!category.length == 0 ?
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Categories already available</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {category?.map((item) =>
                                                    <tr key={item.id}>
                                                        <td>
                                                            {item.title}
                                                            <DeleteIcon
                                                                onClick={(e) => this.handleRemove(e, item.id)}
                                                                className="float-right"
                                                            >Delete</DeleteIcon>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table> : null
                                    }
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
    category: state.category,
})

const mapDispatchToProps = dispatch => ({
    addCategory: payload => dispatch(addCategory(payload)),
    removeCategory: payload => dispatch(removeCategory(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Category);