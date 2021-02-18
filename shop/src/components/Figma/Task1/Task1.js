import React from 'react';
import {
  Paper,
  Card,
  makeStyles,
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import Task1Background from '../../../imgs/Task1Background.png';
import Task1Sun from '../../../imgs/Task1Sun.png';
import SmallCard from './ SmallCard';
import LargeCard from './LargeCard';
const useStyles = makeStyles(
  {
    paper: {
      backgroundImage: `url(${Task1Background})`,
      backgroundSize: '100% 100%',
      height:"50%",
      maxWidth: 1464,
      maxHeight: 440,
      minWidth:1024,
      margin: 'auto',
      color: 'white',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    wrapper:{
      width:"95%",
      height:"82%",
    },
    header: {
      fontFamily: 'Inter',
      display: 'flex',
      alignItems: 'center',
      fontSize:14,
      fontWeight:"200",
    },
    headerImg:{
      marginRight:15,
    },
    cardWrapper: {
      marginLeft:4,
      marginTop:40,

      height: '75%',
      display: 'flex',
    },
  },
  {
    name: 'Task1',
  }
);

const card1 = {
  header: 'тариф (2020)',
  mainSum: '419',
  currency: 'р./ед.',
  year: 2019,
  secondarySum: 436,
  secondaryCurrency: 'р./ед.',
  color: 'rgba(87, 148, 222, 0.2)',
  background:"blue",
  operation:"x",
};

const card2 = {
  header: 'объем ресурса (2020)',
  mainSum: '11 292',
  currency: 'док.',
  year: 2019,
  secondarySum: '9 864',
  secondaryCurrency: 'чел./ч.',
  color: 'rgba(78,142,150,0.2)',
  background:"green",
  operation:"=",
};
const card3 = {
  header: 'ТСО модели (2020):',
  mainSum: '2 663',
  currency: 'млн. р.',
  year: 2019,
  part1: {
    header: 'потребляет',
    mainSum: '2 596',
    secondarySum: '2 421',
  },
  part2: {
    header: 'прямые расходы',
    mainSum: '67',
    secondarySum: '66',
  },
  part3: {
    header: 'предоставляет',
    mainSum: '2 658',
    secondarySum: '2 705',
  },
  color: 'rgba(107,117,202,0.2)',
};

export default function Task1() {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.headerImg} src={Task1Sun}></img>
          Сбербанк бизнес ОнЛ@йн
        </div>
        <div className={styles.cardWrapper}>
          <SmallCard card={card1} />
          <SmallCard card={card2} />
          <LargeCard card={card3} />
        </div>
      </div>
    </Paper>
  );
}