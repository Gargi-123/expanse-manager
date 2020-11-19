import React, { Component } from 'react';
import { Container, Typography, Box, Grid,Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from "./SignUp.module.css"
import { Link as ToSignIn } from "react-router-dom"
import AppAppBar from '../modules/views/AppAppBar';
import Alert from '@material-ui/lab/Alert';

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isSignedUp: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const { firstName, lastName, email, password } = this.state
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      alert("Enter All Details");
      return;
    }
    if(!this.validateEmail(email)){
      alert("Invalid Email !!!");
      return;
    }

    var User = JSON.parse(localStorage.getItem("User"))
    if (!User) {
      User = []
    }
    User.push(this.state)
    localStorage.setItem("User", JSON.stringify(User))
    this.handleInputBoxes()
  }
  validateEmail = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  handleInputBoxes = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isSignedUp: true
    })

  }


  render() {
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
              Sign up
          </Typography>
            <form onSubmit={this.handleSubmit} className={styles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={this.state.email}
                    onChange={this.handleChange}

                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={this.state.password}
                    onChange={this.handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>

              </Grid>
              {this.state.isSignedUp ? <Box style={{ marginTop: "20px" }}><Alert severity="success">Success <ToSignIn style={{ textDecoration: "none", color: "green" }} to="/SignIn">{"Please Login"}</ToSignIn> </Alert></Box> : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
              >
                Sign Up
            </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <ToSignIn to="/SignIn">
                    <div variant="body2">
                      Already have an account? Sign in
                </div>
                  </ToSignIn>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
          </Box>
        </Container>
      </>
    );
  }
}
