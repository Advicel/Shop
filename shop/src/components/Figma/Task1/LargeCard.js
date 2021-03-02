import React from 'react';
import { Card, makeStyles, Typography, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';
import LargeCardData from './LargeCardData';
const useStyles = makeStyles(
  {
    card: {
      padding: 0,
      position: 'relative',
      flexGrow: '2',
      background: (card) => card.color,
      color: 'white',
      height: '100%',
      overflow: 'visible',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
    },
    wrapper: {
      width: '93%',
      margin: '0 auto',
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
      justifyContent: 'space-between',
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
          {[card.part1, card.part2, card.part3].map((part) => {
            return (
              <LargeCardData
                key={part.header}
                data={part}
                currency={card.currency}
                year={card.year}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

LargeCard.propTypes = {
  card: PropTypes.object,
};