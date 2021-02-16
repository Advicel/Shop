import React from 'react';
import {makeStyles, Paper} from '@material-ui/core';
import cat from '../../imgs/cat.jpg';

const useStyles = makeStyles({
    root:{
        width:"70%",
        margin:"0 auto",
        display:"flex"
    },
    userImg:{
        width:200,
        height:200,
        borderRadius:"50%",
        margin:15,
    },
},{
    name:"Profile",
});

export default function Profile(){
    const styles = useStyles();
    return (
        <Paper className={styles.root}>
            <img src={cat} className={styles.userImg} alt ="cat"/>
            <div className={styles.userInfo}>
            <h2>Советников Виктор</h2>
            <h3>+7927***1104</h3>
            </div>
        </Paper>
    );
}