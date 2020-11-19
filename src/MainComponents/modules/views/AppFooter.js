import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),

  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },

}));



export default function AppFooter() {
  const classes = useStyles();

  return (
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
>
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <Link className={classes.icon} >
                  <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                </Link>
                <Link className={classes.icon}>
                  <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                </Link>
                <Link className={classes.icon}>
                  <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ul style={{ display: "flex" }} className={classes.list}>
              <li style={{margin:"65px 10px", marginLeft:"145%", fontWeight:"bold"}} className={classes.listItem}>
                <Link to="/">Terms</Link>
              </li>
              <li style={{margin:"65px 10px", fontWeight:"bold"}} className={classes.listItem}>
                <Link to="/">Privacy</Link>
              </li>
              <li style={{margin:"65px 10px", fontWeight:"bold"}} className={classes.listItem}>
                <Link to="/">Feedback</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  </Grid>

  );
}
