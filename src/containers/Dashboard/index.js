import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getData} from '../../actions'

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);
  useEffect(() => {
      dispatch(getData());
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
);
};

export default Dashboard;
