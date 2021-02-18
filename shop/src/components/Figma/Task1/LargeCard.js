import React from 'react';
import {
  Paper,
  Card,
  makeStyles,
  Typography,
  CardContent,
} from '@material-ui/core';

import LargeCardData from './LargeCardData';
const useStyles = makeStyles(
  {
    card: {
        padding:0,
      position: 'relative',
      flexGrow: '2',
      background: (card) => card.color,
      color: 'white',
      height:"100%",
      overflow: 'visible',
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    },
    wrapper: {
        width:"93%",
        //height:"70%",
        margin:"0 auto",
    },
    overMainSum: {
      fontFamily: 'Inter',
      color: '#657D95',
      fontSize: 16,
    },
    mainSumWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 24,
    },
    mainSum: {
      fontSize: 36,
      fontFamily: 'Inter',
      lineHeight: '1',
      marginRight: 10,
    },
    mainSumCurr: {
      fontSize: 20,
    },
    cardDataWrapper: {
      display: 'flex',
      justifyContent:"space-between",
    },
  },
  {
    name: 'LargeCard',
  }
);

export default function LargeCard({ card }) {
  const styles = useStyles(card);
  return (
    <Card className={styles.card}>
      <CardContent className={styles.wrapper}>
        <Typography className={styles.overMainSum}>{card.header}</Typography>
        <div className={styles.mainSumWrapper}>
          <Typography className={styles.mainSum}>{card.mainSum}</Typography>
          <Typography className={styles.mainSumCurr}>
            {card.currency}
          </Typography>
        </div>
        <div className={styles.cardDataWrapper}>
          <LargeCardData
            data={card.part1}
            currency={card.currency}
            year={card.year}
          />
          <LargeCardData
            data={card.part2}
            currency={card.currency}
            year={card.year}
          />
          <LargeCardData
            data={card.part3}
            currency={card.currency}
            year={card.year}
          />
        </div>
      </CardContent>
    </Card>
  );
}