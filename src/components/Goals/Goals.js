import React, {Component} from 'react';

// material ui imports
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  table: {
    minWidth: 700,
    maxWidth: 800,
  },
});

class Goals extends Component {

  editGoals = () => {
    console.log('edit clicked');
    this.props.history.push('/my_goals/daily_nutrition_goals');
  }
  render() {
    const { classes } = this.props;
    return (
<div>
    <h3>
      Your Fitness Goals
    </h3>
    
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Daily Nutrition Goals</TableCell>
          <TableCell align="right"><button onClick={this.editGoals}>Edit</button></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Calories</TableCell>
          <TableCell align="right">1500</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
    )
  }
}

export default withStyles(styles)(Goals);
