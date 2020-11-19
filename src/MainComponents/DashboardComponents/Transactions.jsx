import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom"
import Chart from "./Chart"
import DashboardNavbar from "./DashboardNavbar";
import { deleteExpense} from "../../Redux/action"


class Transactions extends Component {
    constructor(props) {
        super(props)
    }
    handleExpense = (id) => {
        this.props.deleteExpense(id)
    }

    render() {
        const { data, match } = this.props
        return (
            <>
                <DashboardNavbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            {!data.length == 0 ?
                                <div className="row mt-4 text-center">
                                    <div className="col" style={{ maxWidth: "1000px", margin: "auto" }}>
                                        <h2 className="p-2">Your Expenses</h2>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.sort((a, b) => a.title.addedTime > b.title.addedTime)
                                                    .map(item => item.title.type  === "Expense" ?
                                                    <>
                                                        <tr style={{backgroundColor:"#FF7F7F"}}  key={item.id}>
                                                            <td>{item.title.date} </td>
                                                            <td>{item.title.category} </td>
                                                            <td>{item.title.description}</td>
                                                            <td>{item.title.amount} </td>
                                                            <td>{item.title.type} </td>
                                                            <td>
                                                                <Link to={`${match.url}/${item.id}`}><EditIcon /> </Link>
                                                            </td>
                                                            <td>
                                                                <DeleteIcon
                                                                    onClick={() => this.handleExpense(item.id)}
                                                                ></DeleteIcon>
                                                            </td>
                                                        </tr>
                                                        </> :
                                                        <>
                                                        <tr style={{backgroundColor:"#7aea7a "}} key={item.id}>
                                                            <td>{item.title.date} </td>
                                                            <td>{item.title.category} </td>
                                                            <td>{item.title.description}</td>
                                                            <td>{item.title.amount} </td>
                                                            <td>{item.title.type} </td>
                                                            <td>
                                                                <Link to={`${match.url}/${item.id}`}><EditIcon /> </Link>
                                                            </td>
                                                            <td>
                                                                <DeleteIcon
                                                                    onClick={() => this.handleExpense(item.id)}
                                                                ></DeleteIcon>
                                                            </td>
                                                        </tr>
                                                        </>

                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div> : null
                            }
                        </div>
                        <div className="col-md-12 col-lg-6">
                            {data.length >= 1 ? <Chart /> : null}

                        </div>
                    </div>
                </div>
                {data.length <= 0 ?
                    <>
                        <div className="row mt-4 text-center">
                            <div className="col">
                                <h1>No Transactions Available !!!</h1>
                            </div>
                        </div>
                    </> : null
                }
            </>
        )
    }
}


const mapStateToProps = state => ({
    data: state.data
})
const mapDispatchToProps = dispatch =>({
    deleteExpense: payload => dispatch(deleteExpense(payload))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions)