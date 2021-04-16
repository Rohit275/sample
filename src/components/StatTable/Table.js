import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Checkbox,  FormControlLabel, FormGroup, FormHelperText, Radio, RadioGroup, Switch } from '@material-ui/core';
import './Table.css';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    color: 'black'
  }
});



function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
          {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center" >{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box >
              
                <div className="box-component">All aspects in the module</div>
             
              <div className="collapse-container">
                <div className="collapse-element">
                  Access Control
                </div>
                <div className="collapse-element">
                  Permissions
                </div>
              </div>

              <div className="collapse-container2">
                <div className="collapse-element2">
                  <RadioGroup>
                    <FormControlLabel control={<Radio />} label="All access"/>
                    <FormHelperText>Can access all items</FormHelperText>
                  </RadioGroup>

                  <RadioGroup>
                    <FormControlLabel control={<Radio />} label="Restricted access"/>
                    <FormHelperText>Can access only assigned or created items</FormHelperText>
                  </RadioGroup>
                 
                </div>
                
                <div className="collapse-element">
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="New items in access"/>
                    <FormControlLabel control={<Checkbox />} label="Edit items in access"/>
                    <FormControlLabel control={<Checkbox />} label="Create items in access"/>
                    <FormControlLabel control={<Checkbox />} label="Delete items in access"/>
                  </FormGroup>
                </div>
              </div>
              
              {/* <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    // history: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     amount: PropTypes.number.isRequired,
    //     customerId: PropTypes.string.isRequired,
    //     date: PropTypes.string.isRequired,
    //   }),
    // ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Budget', <button style={{
    background: '#c2f0c2', 
    cursor: 'pointer',
    color: 'green',
    //outline: 'none',
    border: '1pt',
    borderColor: 'red',
    borderRadius: '50px 50px',
    width: '200px',
    height: '40px'
  }}> All Access</button>, 'View | Create | Edit | Delete', '1 min ago', <Switch />, 3.99),
  createData('Bidding', <button disabled style={{ 
    cursor: 'pointer',
    border: '12pt',
    borderColor: 'red',
    borderRadius: '50px 50px',
    width: '200px',
    height: '40px',
    
  }}> No Access</button>, '-', '1 min ago', <Switch />, 4.99),
  createData('Vendor portal', <button style={{
    background: '#ffb3b3', 
    cursor: 'pointer',
    color: 'red',
    //outline: 'none',
    border: '1pt',
    borderColor: 'red',
    borderRadius: '50px 50px',
    width: '200px',
    height: '40px'
  }}> Restricted Access</button>, 'View | Create', '1 min ago', <Switch />, 3.79),
  createData('Purchase order/Work order', <button style={{
    background: '#ffb3b3', 
    cursor: 'pointer',
    color: 'red',
    borderOutline: '3pt',
    border: '1pt',
    borderColor: 'red',
    borderRadius: '50px 50px',
    width: '200px',
    height: '40px'
  }}> Restricted Access</button>, 'View | Create', '1 min ago', <Switch />, 2.5),
  createData('Organisational Profile', <button style={{
    background: '#c2f0c2', 
    cursor: 'pointer',
    color: 'green',
    //outline: 'none',
    border: '1pt',
    borderColor: 'red',
    borderRadius: '50px 50px',
    width: '200px',
    height: '40px'
  }}> All Access</button>, 'View | Create | Edit | Delete', '1 min ago', <Switch />, 1.5),
  createData('Permission & Access Control', <button disabled style={{ 
    cursor: 'pointer',
    border: '1pt',
    borderColor: 'red',
    borderRadius: '50px 50px',
    width: '200px',
    height: '40px',
    
  }}> No Access</button>, '-', '1 min ago', 
  <Switch style={{
    
  }} />, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Department/Role Name</TableCell>
            <TableCell align="center">Access Level</TableCell>
            <TableCell align="center">Summary</TableCell>
            <TableCell align="center">Last updated</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
