import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import potrebl from '../../../imgs/potrebl.png';
import pryamRash from '../../../imgs/pryamRash.png';
import predost from '../../../imgs/predost.png';
import DownArrow from '../../../imgs/Task1Down.png';
import UpArrow from '../../../imgs/Task1Up.png';

const useStyles = makeStyles(
  {
    headerWrapper: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 12,
      color: '#657D95',
      marginBottom: 10,
    },
    headerImg: {
      width: 18,
      height: 18,
      marginRight: 5,
    },
    header: {
      fontSize: 12,
    },
    mainSumWrapper: {
      display: 'flex',
      alignItems: 'baseline',
    },
    differenceWrapper: {
      display: 'flex',
      color: (diff) => (diff < 0 ? 'red' : 'green'),
      alignItems: 'center',
    },
    differenceImg: {
      width: 12,
      height: 8,
      marginRight: 5,
    },
    mainSum: {
      fontSize: 20,
      fontFamily: 'Inter',
      lineHeight: '1',
      marginRight: 10,
    },
    mainSumCurr: {
      fontSize: 13,
      marginRight: 5,
    },
    divider: {
      border: '1px solid #657D95',
      opacity: '0.36',
      width: 0,
      height: 8,
    },
    year: {
      color: '#657D95',
      fontSize: 11,
    },
    secondarySumWrapper: {
      marginTop: 7,
      display: 'flex',
      alignItems: 'baseline',
    },
    SecondarySum: {
      color: '#657D95',
      fontSize: 16,
      paddingRight: 5,
    },
    secondarySumCurr: {
      color: '#657D95',
      fontSize: 11,
    },
  },
  {
    name: 'LargeCardData',
  }
);

export default function LargeCardData({ data, currency, year }) {
  const diff = difference(data.mainSum, data.secondarySum);

  const headerImage = () => {
    switch (data.header) {
      case 'потребляет':
        return potrebl;
      case 'прямые расходы':
        return pryamRash;
      default:
        return predost;
    }
  };
  const styles = useStyles(diff);
  return (
    <div>
      <div className={styles.headerWrapper}>
        <img className={styles.headerImg} src={headerImage()}></img>
        <Typography className={styles.header}>{data.header}</Typography>
      </div>
      <div className={styles.mainSumWrapper}>
        <Typography className={styles.mainSum}>{data.mainSum}</Typography>
        <Typography className={styles.mainSumCurr}>{currency}</Typography>

        <div className={styles.differenceWrapper}>
          <img
            className={styles.differenceImg}
            src={diff < 0 ? DownArrow : UpArrow}></img>
          <Typography> {`${diff} %`}</Typography>
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className={styles.secondarySumWrapper}>
        <Typography className={styles.SecondarySum}>
          {data.secondarySum}
        </Typography>
        <Typography className={styles.secondarySumCurr}>{currency}</Typography>
        <Typography className={styles.year}>{`(${year})`}</Typography>
      </div>
    </div>
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

LargeCardData.propTypes = {
  currency: PropTypes.string,
  year: PropTypes.number,
  data: PropTypes.object,
};