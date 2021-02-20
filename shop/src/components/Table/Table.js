import { makeStyles, Paper } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React, { useState } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import './styles.css';

const useStyles = makeStyles(
  {
    tableWrapper: {
      marginTop: 10,
      width: '40%',
      //height: 400,
      margin: '0 auto',
      overflow: 'scroll',
    },
    stickyColumn: {
      position: 'sticky',
      left: 0,
      backgroundColor: '#657D95',
    },
    stickyColumnH: {
      position: 'sticky',
      zIndex: 3,
      left: 0,
    },
    editableDiv: {
      height: '100%',
    },
  },
  {
    name: 'Table',
  }
);

export default function Table({ data }) {
  const [change, setChange] = useState(false);
  const styles = useStyles();

  function handleChangeButton() {
    setChange(true);
  }
  function handleSaveButton() {
    setChange(false);
  }

  const rows = data.map((row) => {
    return (
      <tr className={styles.tr} key={row.id}>
        <td className={styles.stickyColumn}>{row.name}</td>
        <td>
          <div
            className={styles.editableDiv}
            contentEditable={change}
            suppressContentEditableWarning={true}>
            {row.price}
          </div>
        </td>
        <td>{row.id}</td>
        <td>{row.category}</td>
        <td>{row.maker}</td>
        <td>{row.name}</td>
        <td>{row.price}</td>
        <td>{row.id}</td>
        <td>{row.category}</td>
        <td>{row.maker}</td>
      </tr>
    );
  });
  return (
    <Paper>
      <Scrollbar
        trackXProps={{
          style: {
            height: 10,
            bottom: -10,
            display: 'block',
          },
        }}
        thumbXProps={{
          style: {
            background: 'rgba(31, 142, 250, 0.4)',
            height: 10,
            borderRadius: 2,
          },
        }}
        trackYProps={{
          style: {
            width: 10,
            right: -10,
          },
        }}
        thumbYProps={{
          style: {
            background: 'rgba(31, 142, 250, 0.4)',
            width: 10,
            borderRadius: 2,
          },
        }}
        style={{ color: red, width: "40%", height: 400 ,margin:"0 auto"}}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.stickyColumnH}>name</th>
              <th>pirce</th>
              <th>id</th>
              <th>category</th>
              <th>maker</th>
              <th>name</th>
              <th>pirce</th>
              <th>id</th>
              <th>category</th>
              <th>maker</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </Scrollbar>
      <button disabled={change} onClick={() => handleChangeButton()}>
        редактировать цену
      </button>
      <button disabled={!change} onClick={() => handleSaveButton()}>
        сохранить
      </button>
    </Paper>
  );
}
