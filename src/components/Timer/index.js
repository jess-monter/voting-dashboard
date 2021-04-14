import Countdown from 'react-countdown';


export default function Timer(props) {

  return (
    <Countdown date={Date.now() + 10000} />
  );

}