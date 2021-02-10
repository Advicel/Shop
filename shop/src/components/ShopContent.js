import { makeStyles } from '@material-ui/core';
import React from 'react';
import Card from './Card.js';
import { connect } from 'react-redux';

function ShopContent({filter, data }) {
    console.log(filter)
  const styles = useStyles();
  return (
    <div className={styles.shopContent}>
      {data.map((card, index) => {
        if(card.category===filter||filter==="All")
        return <Card key={index} card={card} />
      })}
    </div>
  );
}

const useStyles = makeStyles(
  {
    shopContent: {
        margin:"0 auto",
      display: 'flex',
      flexWrap:'wrap',
      justifyContent:'space-between',
      width:'80%',
    },
  },
  {
    name: 'ShopContent',
  }
);


const mapStateToProps = state =>{
    return {
        filter:state.filter.filter,
    };
  };
  
  export default connect(mapStateToProps,null)(ShopContent);
  