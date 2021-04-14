import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getData} from '../../actions'
import BarChart from '../../components/BarChart';
import Scorecard from  '../../components/Scorecard';
import { Grid } from '@material-ui/core';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);
  useEffect(() => {
      dispatch(getData());
  }, []);

  console.log(dashboard);
  const { title, results, status } = dashboard.data;
  let votes = [];
  let labels = [];
  let data = [];
  let overview = {};
  let firstPlace = "";
  let lastPlace = "";

  if ( results ) {
    votes = results.votes;
    overview = results.overview;
    firstPlace = overview.first.option__content;
    lastPlace = overview.last.option__content;
  }


  if ( votes ) {
    labels = votes.map(vote => vote.option__content);
    data = votes.map(vote => vote.total);
  }

  console.log(overview);

  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <Grid item xs={12} sm={9} >
          <BarChart title={title} label={"Votes"} labels={labels} data={data}/>
        </Grid>
        <Grid item xs={12} sm={3} >
          <Scorecard title={"First Place"} content={firstPlace} isTimer={false}/>
          <Scorecard title={"Last Place"} content={lastPlace} isTimer={false}/>
          <Scorecard title={"Remaining Time"} content={""} isTimer={true}/>
        </Grid>
      </Grid>
    </div>
);
};

export default Dashboard;
