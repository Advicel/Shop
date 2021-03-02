import { makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';
import './styles.css';
import Sun from '../../imgs/Task1Sun.png';

const useStyles = makeStyles(
  {
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
    table: {
      width: '100%',
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
  function handleGetDataButton() {
    console.log(getDataFromTable());
  }

  const rows = data.map((row) => {
    return (
      <tr className={styles.tr} key={row.id}>
        <td id={'td'} className={styles.stickyColumn}>
          {row.name}
        </td>
        <td id={'td'}>
          <div
            style={{ height: '100%' }}
            contentEditable={change}
            suppressContentEditableWarning={true}>
            {row.price}
          </div>
        </td>
        <td id={'td'}>{row.id}</td>
        <td id={'td'}>{row.category}</td>
        <td id={'td'}>{row.maker}</td>
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
            backgroundImage: `url(${Sun})`,
            backgroundSize: 'contain',
            width: 10,
            borderRadius: 2,
          },
        }}
        style={{ width: '35%', height: 500, margin: '0 auto' }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th id={'th'} className={styles.stickyColumnH}>
                name
              </th>
              <th id={'th'}>price</th>
              <th id={'th'}>id</th>
              <th id={'th'}>category</th>
              <th id={'th'}>maker</th>
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
      <button onClick={() => handleGetDataButton()}>getData</button>
    </Paper>
  );
}

function getDataFromTable() {
  const result = [];
  const columns = document.querySelectorAll('#th');
  const data = document.querySelectorAll('#td');
  let i = 0;

  while (i < data.length) {
    const row = {};
    columns.forEach((column) => {
      row[column.textContent] = data[i].textContent;
      i++;
    });
    result.push(row);
  }
  return result;
}
Table.propTypes = {
  data: PropTypes.array,
};