import React, { Component } from 'react';
import { Container, Typography, Box, Grid, Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link as ToSignUp, Redirect } from "react-router-dom"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from "./SignUp.module.css"
import AppAppBar from '../modules/views/AppAppBar';
import { connect } from "react-redux"
import { loggedInUser } from "../../Redux/action"

 class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isAuth : false,
      isNotAuth : false
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const {email, password} = this.state
    var data = JSON.parse(localStorage.getItem("User"))
    if(data === null){
      this.setState({isNotAuth:true},()=>{})
      return;
    }
    for(let i=0; i < data.length; i++){
        if(data[i].email === email && data[i].password === password){
          this.setState({isAuth:true},()=>{})
          this.props.loggedInUser(data[i].firstName)
        }else{
          this.setState({isNotAuth:true},()=>{})
        }
    }
  }
  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
      isNotAuth : false
    })
  }

  render() {
    const {isAuth} = this.state
    if(isAuth){
      return(
        <Redirect to='/Dashboard'/>
      )
    }
    else{


    return (
      <>
        <AppAppBar />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={styles.paper}>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={styles.form} noValidate onSubmit={this.handleSubmit}>
              <TextField
                value={this.state.email}
                onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField

                value={this.state.password}
                onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             { this.state.isNotAuth ? <Alert severity="error">Invalid Credentials!</Alert> :null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
              >
                Sign In
          </Button>
              <Grid container>
                <Grid item xs>

                </Grid>
                <Grid item style={{marginTop :"10px"}}>
                    <ToSignUp to="/SignUp">
                      {"Don't have an account? Sign Up"}
                    </ToSignUp>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
          </Box>
        </Container>
      </>
    );
  }
}

}
const mapStateToProps = state => ({
  users: state.users,
  category: state.category,
  type: state.type,
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  loggedInUser: (payload) => dispatch(loggedInUser(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,

)(SignIn);