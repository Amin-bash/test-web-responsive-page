import React, { useEffect, useState } from 'react';
import './styles.scss'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Items from '../Items';
import Favorite from '../Favorite/index';
import { ProductsData } from '../../data/products';
import { Products, TabPanelProps } from '../../models/Products';


const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


const Navbar = () => {
  const classes = useStyles();

  const [value, setValue] = useState<Number>(0);
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    setData(ProductsData())
  }, [])

  const handleChange = (event: Object, newValue: number) => {
      setValue(newValue);
  };

  return (
    <div className="navbar-container">
      <div className={classes.root}>
      <AppBar className="nav-menu-section" position="static">
        <h1>Courses</h1>
        <Tabs value={value} onChange={handleChange} aria-label="courses">
          <Tab label="Popular" {...a11yProps(0)} />
          <Tab label="Favorite" {...a11yProps(1)} />
          <Tab label="New" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {value === 0 && <Items data={data} />}
      {value === 1 && <Favorite data={data} />}
      {value === 2 && <Items data={data} />}
    </div>
    </div>
  );
};

export default Navbar;