import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getData} from '../../actions'
import BarChart from '../../components/Graph';


const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);
  useEffect(() => {
      dispatch(getData());
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart />
    </div>
);
};

export default Dashboard;
