import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Colors } from '../css/colors';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  infoSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71c9f8',
    flex: '0 0 50%',
    position: 'relative',
    overflow: 'hidden',
  },
  infoSideList: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& h6': {
      color: '#fff',
      fontWeight: 700,
    },
    '& svg': {
      color: '#fff',
      marginRight: 15,
      fontSize: 32,
    },
    '& li': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
    },
  },
  infoSideBigIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '350%',
    width: '350%',
    transform: 'translate(-50%, -50%)',
    color: Colors.primary.main,
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
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
  },
  loginSideDesc: {
    marginBottom: 12,
  },
  loginSideSignUpBtn: {
    marginBottom: 18,
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
        <TwitterIcon className={classes.infoSideBigIcon} />

        <ul className={classes.infoSideList}>
          <li>
            <SearchIcon />
            <Typography variant="h6">Читайте о том, что вам интересно.</Typography>
          </li>
          <li>
            <PeopleOutlinedIcon />
            <Typography variant="h6">Узнайте о чём говорят в мире.</Typography>
          </li>
          <li>
            <ModeCommentOutlinedIcon />
            <Typography variant="h6">Присоединяйтесь к сообществу.</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon className={classes.twitterIcon} />
          <Typography variant="h1" className={classes.loginSideTitle} color="initial">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography className={classes.loginSideDesc}>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.loginSideSignUpBtn}>
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
