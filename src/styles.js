import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    margin: theme.spacing(2)
  },
  buttons: {
    marginTop: theme.spacing(4)
  }
}));

export default useStyles;
