import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Timer from '../Timer';
import useStyles from './styles';


const renderCardContent = (content, isTimer) => {
  if (isTimer) {
    return <Timer />
  } else {
    return content
  }
}

export default function Scorecard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="h4" component="p">
          {renderCardContent(props.content, props.isTimer)}
        </Typography>
      </CardContent>
    </Card>
  );
}