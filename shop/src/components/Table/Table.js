import { makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import './styles.css';
import Scrollbar from 'react-custom-scroll';

const useStyles = makeStyles(
  {
    tableWrapper: {
      marginTop: 10,
      width: '40%',
      height: 400,
      margin: '0 auto',
      overflow: 'scroll',
    },
    scroll: {
      color: 'red',
    },
    table: { margin: 0 },
    td: {},
    tr: {
      // border: '1px solid black',
    },
    stickyColumn: {
      position: 'sticky',
      left: 0,
      backgroundColor: '#657D95',
      //border: 'none',
      //borderTop: '1px solid black',
      // outline:"1px solid black",
    },
    stickyColumnH: {
      position: 'sticky',
      zIndex: 3,
      left: 0,
    },
    textareaChange: {
      resize: 'both',
    },
    textarea: {
      resize: 'none',
    },
    qwe: {
      width: 400,
      margin: '0 auto',
      maxHeight: 200,
      //border: '1px solid red',
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

  const PARAGRAPHS_TEXT = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet malesuada efficitur. Praesent semper tortor id egestas volutpat. Aenean dui sapien, fermentum et dictum sagittis, finibus eget velit. Maecenas sed finibus risus, sed hendrerit odio. Nullam volutpat metus non enim consequat auctor. Vivamus gravida nibh in tempus vehicula. Donec venenatis luctus nulla, id facilisis turpis pharetra aliquet. Praesent non orci in turpis dapibus rutrum. Donec venenatis fermentum velit sit amet egestas. Duis quis ipsum et arcu scelerisque sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean suscipit feugiat justo a luctus. Sed placerat sapien sit amet risus efficitur, sed pharetra tellus faucibus.',
    'Nam mollis lectus ac mollis aliquet. Pellentesque sed dolor ac leo porttitor maximus nec sed velit. Maecenas quis faucibus nisl. Cras vel dignissim arcu. Donec in velit condimentum, efficitur velit nec, dignissim odio. Sed sapien tortor, facilisis in lacus id, condimentum lobortis nisl. Vestibulum porta sollicitudin risus, at tincidunt felis. Pellentesque pulvinar ante enim, vitae sagittis est vestibulum accumsan. Phasellus lobortis massa ac metus dictum interdum. Praesent ut eros malesuada, euismod diam eu, luctus orci. Sed ornare metus mauris, at ornare lectus malesuada eu. Fusce metus dui, sodales non metus in, rutrum pulvinar ante. Pellentesque a dolor massa. In auctor pellentesque eros. Curabitur pellentesque in mi non scelerisque.',
    'Nunc a luctus tortor. Duis maximus urna quis est commodo sodales. Sed sit amet accumsan purus, eget pellentesque est. In cursus metus ipsum, in condimentum ante molestie ac. Donec sit amet pulvinar turpis. Suspendisse elementum, ex sed lobortis fermentum, urna ex efficitur turpis, at consequat leo tellus in augue. Sed et varius ante. Phasellus iaculis, diam id ullamcorper semper, mi ipsum interdum ipsum, non fermentum est ligula sed mi. Vestibulum ornare interdum nulla, a convallis dolor molestie non. Curabitur convallis scelerisque augue quis fringilla. Aenean gravida libero nec eros convallis, vel lobortis sapien bibendum. Quisque faucibus lacus id purus placerat dapibus. Praesent pretium, tellus a dictum suscipit, ex leo scelerisque augue, vitae semper libero erat vel massa.',
    'Ut vitae condimentum nunc. Suspendisse nec magna pulvinar, molestie massa vitae, convallis odio. Vestibulum imperdiet metus velit, vitae interdum libero viverra non. Maecenas commodo, nulla sit amet vehicula blandit, eros ante consectetur turpis, vel viverra mi felis a tellus. Pellentesque consectetur purus massa, sit amet commodo neque rutrum eget. Aenean dictum magna nec condimentum dignissim. Phasellus enim mauris, maximus quis auctor et, congue sit amet justo. Nullam vel lacus non nisi bibendum euismod. Integer mattis at mi vel sollicitudin. Sed a turpis orci. Etiam est urna, dictum vitae ullamcorper sed, sollicitudin at magna. Sed vel iaculis augue. Fusce aliquet dictum urna, eget rutrum ante aliquet eu. In ac est ut tellus sagittis pretium. Pellentesque venenatis nulla et risus maximus, in hendrerit sapien rhoncus. Nunc ut tempor massa.',
    'Aenean tincidunt porttitor leo id sodales. Integer feugiat leo rutrum mi euismod convallis. In auctor arcu eget ligula cursus, vel gravida neque posuere. Donec ipsum enim, vulputate pulvinar sagittis at, varius in nibh. Quisque quis leo non metus lobortis euismod. Aenean et ultrices enim. Mauris posuere turpis eget imperdiet vestibulum. Morbi imperdiet mi felis, at varius magna pharetra vitae. Vestibulum at venenatis neque.',
    'Nulla nulla odio, ullamcorper nec lectus id, eleifend feugiat lorem. Praesent vulputate lacus nisi, a eleifend ex mollis eget. Fusce tempus convallis finibus. In sed sapien non mauris pellentesque semper at vel ante. Maecenas ut libero a tortor mollis pretium. Mauris laoreet nulla risus, non fermentum sapien fringilla pulvinar. Ut et mauris rhoncus, viverra orci ut, vulputate dui. Praesent volutpat, enim vel congue egestas, purus tortor pulvinar lorem, eget venenatis ex lorem vitae neque. Donec rutrum nulla quis odio fringilla, ac fringilla velit iaculis. Curabitur sit amet ante ut mi sagittis luctus sit amet pretium leo. Proin nec malesuada velit. Ut dictum orci at sapien suscipit, at mattis tortor vehicula. Nulla dui magna, venenatis nec imperdiet in, venenatis quis leo. Proin vel pulvinar arcu. In non ullamcorper tellus. Etiam dapibus, nibh nec efficitur blandit, erat lacus placerat dui, id vehicula quam ex nec eros.',
    'Nulla posuere condimentum scelerisque. Nulla rutrum posuere mi sed cursus. Aliquam laoreet faucibus nunc, in luctus orci facilisis ac. Sed aliquet, sem id lobortis congue, mauris ante consectetur diam, sit amet sagittis dui quam sit amet nibh. In vitae leo aliquet, fringilla nulla at, maximus urna. Phasellus elementum eros vel finibus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla lectus sapien, scelerisque ac libero vel, fermentum sagittis nulla. Sed ac scelerisque magna.',
    'Ut interdum, dolor in maximus ornare, tortor erat eleifend sapien, vel bibendum est quam sit amet justo. Quisque urna odio, fringilla in tristique ut, faucibus sit amet arcu. Nulla tempus lectus sem, nec scelerisque leo porttitor volutpat. Fusce tristique efficitur suscipit. Fusce gravida lectus vitae molestie fringilla. Morbi mi eros, auctor vel lorem id, ornare viverra ante. Sed pharetra interdum maximus.',
    'Nam sodales sem ut turpis porttitor, sed condimentum tortor iaculis. Quisque consectetur facilisis dui. In eu turpis euismod, lobortis mauris non, rhoncus risus. Aliquam erat volutpat. Nam fermentum interdum purus in rutrum. Duis tortor sapien, feugiat sit amet libero in, ornare suscipit neque. Vivamus sed sodales lorem. Donec quis mauris at elit tempor rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet commodo magna, ac sollicitudin lectus. In accumsan arcu diam, in euismod elit molestie eget. Aenean dui metus, sagittis a ex vitae, pretium pharetra mauris.',
    'Aliquam libero odio, feugiat in mattis eu, sagittis a eros. Vivamus quis lacus lectus. Vestibulum mi diam, pulvinar id neque et, porttitor aliquam magna. Nullam finibus ex ex, quis volutpat odio scelerisque sed. Phasellus in felis semper, cursus erat eu, interdum lorem. Quisque finibus quis elit eu semper. Etiam at erat eleifend, mattis nisl in, molestie enim. Aliquam nec tincidunt mauris.',
    'Morbi vel purus pretium, ullamcorper elit id, porttitor justo. Donec ut varius lacus, ut aliquam turpis. Pellentesque condimentum nec orci ut suscipit. Cras at mi sodales, tincidunt risus eget, tristique magna. Proin auctor sollicitudin arcu vitae convallis. Morbi aliquet sapien ut velit vehicula convallis. Vivamus mi metus, finibus vel sollicitudin quis, pulvinar nec nunc. Vestibulum ornare justo vel ex condimentum dignissim ac nec dolor. Pellentesque et diam et leo cursus interdum. Integer tincidunt massa justo, a efficitur libero vehicula id. Cras ex lacus, viverra ut orci nec, ultrices porta ipsum. Integer in placerat magna. Duis semper tempus dui, ac rutrum diam fringilla eu. Suspendisse purus massa, bibendum eu aliquet in, convallis sed augue. Proin finibus auctor elit, in pharetra leo interdum a.',
    'Vestibulum risus risus, tempus nec aliquet sit amet, gravida sed ipsum. In hac habitasse platea dictumst. In tincidunt nec mi id feugiat. Pellentesque luctus libero eget quam efficitur, at cursus purus cursus. In at dolor velit. Duis tristique urna eget blandit porttitor. In neque dolor, pharetra in risus id, egestas imperdiet leo. Duis nisl dolor, vestibulum eget fringilla non, vestibulum quis nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur cursus arcu sed rutrum faucibus. Maecenas vel egestas nisi. Vivamus gravida lectus sed imperdiet interdum. Integer vestibulum eros eget justo pharetra, eget lobortis velit ultrices. Curabitur sagittis non metus eget porta. Morbi nec ligula et massa cursus posuere a quis ligula. In hac habitasse platea dictumst.Nulla sit amet orci at nunc efficitur tempus in nec enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc viverra, arcu a malesuada molestie, sapien lacus rhoncus mi, sit amet posuere nisl eros eget turpis. Donec rutrum diam sapien, quis luctus nisi facilisis non. Aliquam a tellus id dolor congue lacinia. Aenean eu lorem nec libero accumsan feugiat quis id erat. Pellentesque condimentum ut purus egestas varius. Nullam non consequat enim, quis dapibus sem. Curabitur hendrerit non magna in pellentesque. Nam ac malesuada lacus. Mauris vulputate, mauris non lacinia volutpat, ipsum nisl pellentesque tellus, sollicitudin feugiat dui lorem eget justo. Pellentesque ornare nulla sed arcu ultricies, eu pulvinar dolor posuere. Cras ante odio, luctus sed tellus nec, maximus fringilla erat. Fusce auctor turpis a nibh egestas, vel iaculis neque aliquet.',
  ];

  const rows = data.map((row) => {
    return (
      <tr className={styles.tr} key={row.id}>
        <td className={styles.stickyColumn}>{row.name}</td>
        <td>
          {/* <div> */}
          {/* <textarea defaultValue={row.price}></textarea> */}
          {/* <input defaultValue={row.price}></input> */}
          <textarea
            className={change ? styles.textareaChange : styles.textarea}
            disabled={!change}
            defaultValue={row.price}></textarea>
          {/* </div> */}
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
      <div className={styles.tableWrapper}>
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
          <tbody>
            {rows}
            {rows}
          </tbody>
        </table>
      </div>
      <button disabled={change} onClick={() => handleChangeButton()}>
        редактировать цену
      </button>
      <button disabled={!change} onClick={() => handleSaveButton()}>
        сохранить
      </button>

      <div className={styles.qwe}>
        <Scrollbar
          trackXProps={{
            style: {
              height: 4,
              bottom: -20,
              display: 'block',
            },
          }}
          thumbXProps={{
            style: {
              background: 'rgba(31, 142, 250, 0.4)',
              height: 4,
              borderRadius: 2,
            },
          }}
          trackYProps={{
            style: {
              width: 4,
              right: -20,
            },
          }}
          thumbYProps={{
            style: {
              background: 'rgba(31, 142, 250, 0.4)',
              width: 4,
              borderRadius: 2,
            },
          }}
          style={{
            position: 'relative',
            height: 100,
          }}>
          <p>{PARAGRAPHS_TEXT[1]}</p>
        </Scrollbar>


        {/* <CustomScroll flex='1'>
          <div>

          </div>
        </CustomScroll> */}
      </div>
    </Paper>
  );
}

