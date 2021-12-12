import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      height: '65vh'
    }
  },
  infoCard: {
    display: 'flex', 
    flexDirection: 'column', 
    textAlign: 'center',
  },
  container: {
    padding: '0 5%', 
    width: '100%', 
    margin: 0,
  },
}));
