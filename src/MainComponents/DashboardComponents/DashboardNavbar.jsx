import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { clearStore } from "../../Redux/action"

class DashboardNavbar extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { loggedInUser}  = this.props
        var array = []
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#5E35B1", color: "whitesmoke" }}>
                    <Link to="/" className="navbar-brand" style={{ color: "white", fontWeight: "bold" }}>
                        <img src="/logo.svg" width="30" height="30" alt="" /> {"E X P E N S I F Y"}
                    </Link>
                    <div className="ml-5">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link to="/Dashboard" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Category" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Categories </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Transactions" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Transactions </Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{color:"white", fontWeight:"bold" , marginLeft:"auto" }}>
                       Hi, {loggedInUser ? loggedInUser : "Guest" }
                      <span  onClick ={()=>{clearStore(array)}}> <Link to="/SignIn" >
                       <ExitToAppIcon
                       style={{marginLeft:"10px", color:"white"}}/>
                       </Link>
                       </span>
                    </div>
                </nav>
            </>
        )
        }
    }



const mapStateToProps = state => ({
    data: state.data,
    loggedInUser : state.loggedInUser
})

const mapDispatchToProps = dispatch =>({
    clearStore : payload => dispatch(clearStore(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DashboardNavbar);