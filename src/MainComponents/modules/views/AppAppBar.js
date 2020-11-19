import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { Redirect } from 'react-router-dom';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});


class AppAppBar extends Component {
  handleRedirect = () => {
    return (
      <Redirect to="/Home" />

    )
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h6
                underline="none"
                color="inherit"
                className={classes.title}
                style={{ fontWeight: "bold" }}
              >

                <img src="/logo.svg" height="40px" alt="" />
                {'E X P E N S I F Y'}
              </h6>
            </Link>
            <div className={classes.right}>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </div>
    );
  }
}
AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AppAppBar);
