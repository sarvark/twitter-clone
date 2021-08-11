import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { FaTwitter } from 'react-icons/fa';
import { Colors } from '../css/colors';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  infoSide: {
    backgroundColor: '#1da1f2',
    flex: '0 0 50%',
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    flex: '0 0 50%',
  },
  twitterIcon: {
    fontSize: 50,
    color: Colors.primary.main,
  },
  loginSideWrapper: {
    width: 380,
  },
}));

function Home() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.infoSide}>
        <ul>
          <li>
            <Typography>Читайте о том, что вам интересно.</Typography>
          </li>
          <li>
            <Typography>Узнайте о чём говорят в мире.</Typography>
          </li>
          <li>
            <Typography>Присоединяйтесь к сообществу.</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <FaTwitter className={classes.twitterIcon} />
          <Typography variant="h1" color="initial">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography variant="h5" color="initial">
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
