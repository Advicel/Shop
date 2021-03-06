import React from 'react';
import { Card, makeStyles, Typography, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';
import DownArrow from '../../../imgs/Task1Down.png';
import UpArrow from '../../../imgs/Task1Up.png';
import blueBackground from '../../../imgs/Card1Hover.svg';
import greenBackground from '../../../imgs/Card2Hover.png';

const useStyles = makeStyles(
  {
    card: {
      width: '6%',
      position: 'relative',
      flexGrow: '1',
      borderRadius: 12,
      transition: 'all 1s ease',
      background: (color) => color[0],
      '&:hover': {
        backgroundImage: (color) =>
          color[1] === 'blue'
            ? `url(${blueBackground})`
            : `url(${greenBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      color: 'white',
      marginRight: 16,
      overflow: 'visible',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      width: '70%',
      margin: '0 auto',
    },
    overMainSum: {
      fontFamily: 'Inter',
      color: '#657D95',
      fontSize: 16,
      marginBottom: 10,
    },
    mainSumWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    differenceWrapper: {
      display: 'flex',
      color: (color) => (color[2] < 0 ? 'red' : 'green'),
      alignItems: 'center',
    },
    differenceImg: {
      margin: 0,
      width: 12,
      height: 8,
      marginRight: 5,
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
    divider: {
      color: '#657D95',
      padding: '10px 0px',
      opacity: '0.36',
      width: 0,
      height: 19,
    },
    year: {
      color: '#657D95',
      fontSize: 12,
    },
    secondarySumWrapper: {
      display: 'flex',
      alignItems: 'baseline',
    },
    SecondarySum: {
      color: '#657D95',
      fontSize: 18,
      paddingRight: 5,
    },
    secondarySumCurr: {
      color: '#657D95',
      fontSize: 11,
    },
    circle: {
      fontFamily: 'Inter',
      zIndex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#657D95',
      width: 64,
      height: 64,
      borderRadius: '50%',
      position: 'absolute',
      backgroundColor: '#1F283C',
      top: '40%',
      right: -40,
    },
    operation: {
      fontSize: 30,
    },
  },
  {
    name: 'Task1',
  }
);

export default function SmallCard({ card }) {
  const diff = difference(card.mainSum, card.secondarySum);
  const colors = [card.color, card.background, diff];
  const styles = useStyles(colors);
  return (
    <Card className={styles.card}>
      <CardContent className={styles.wrapper}>
        <Typography className={styles.overMainSum}>{card.header}</Typography>
        <div className={styles.mainSumWrapper}>
          <Typography className={styles.mainSum}>{card.mainSum}</Typography>
          <div className={styles.differenceWrapper}>
            <img
              className={styles.differenceImg}
              src={diff < 0 ? DownArrow : UpArrow}></img>
            <Typography>{`${diff} %`}</Typography>
          </div>
        </div>
        <Typography className={styles.mainSumCurr}>{card.currency}</Typography>
        <div className={styles.divider}>|</div>
        <Typography className={styles.year}>{`(${card.year})`}</Typography>
        <div className={styles.secondarySumWrapper}>
          <Typography className={styles.SecondarySum}>
            {card.secondarySum}
          </Typography>
          <Typography className={styles.secondarySumCurr}>
            {card.secondaryCurrency}
          </Typography>
        </div>
      </CardContent>
      <div className={styles.circle}>
        <Typography className={styles.operation}>{card.operation}</Typography>
      </div>
    </Card>
  );
}

function difference(sum1, sum2) {
  sum1 = +sum1.split(' ').join('');
  sum2 = +sum2.split(' ').join('');
  let result = null;
  if (sum1 > sum2) {
    result = Math.trunc((sum1 / sum2 - Math.trunc(sum1 / sum2)) * 100);
  } else {
    result = -1 * Math.trunc((sum2 / sum1 - Math.trunc(sum2 / sum1)) * 100);
  }
  return result;
}

SmallCard.propTypes = {
  card: PropTypes.object,
};