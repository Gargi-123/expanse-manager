import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from 'react-router-dom';

const backgroundImage =
  '/background.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
    borderRadius:"50px",
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        App gets your money into shape
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      Discover the experience
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}>
        <Link style={{textDecoration:"none", color:"white"}} to="/SignIn">
        Get Started
        </Link>
      </Button>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
