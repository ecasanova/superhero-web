import React from 'react';
import {Switch} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove} from './redux/addToTeamReducer';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import {getMyTeam} from './redux/addToTeamSelector';
import {Modal} from 'antd';

import './style.scss';

export function AddToTeamComponent({superhero}) {
  const dispatch = useDispatch();

  const myteam = useSelector(getMyTeam);

  const inMyTeam = (team, supehero) => {
    return team.some((obj) => superhero === obj);
  };

  const modalConfig = {
    className: 'limit-characters-modal',
    centered: true,
    maskClosable: true,
    closable: true,
    width: '600px',
    distroyOnClose: true,
    okButtonProps: {style: {display: 'none'}},
    content: {},
  };

  const addToTeamHandler = (superhero) => {
    if (myteam.length >= 8) {
      let configLimitModal = modalConfig;
      configLimitModal.content = (
        <>
          <h1>Oops! You have too many team members</h1>
          <p>You may only select 8 team members at a time.</p>
        </>
      );
      Modal.warning(configLimitModal);
    } else {
      if (myteam.length > 0) {
        if (myteam[0].biography.alignment === superhero.biography.alignment) {
          dispatch(add(superhero));
        } else {
          let configAlignmentModal = modalConfig;
          configAlignmentModal.content = (
            <>
              <h1>
                Sorry! It looks like you started making a team of
                {` ${myteam[0].biography.alignment}`} Superheros
              </h1>
              <p>
                You can’t add a {` ${superhero.biography.alignment}`} Superhero
                to a {` ${myteam[0].biography.alignment}`} team!
              </p>
            </>
          );
          Modal.warning(configAlignmentModal);
          return false;
        }
      } else {
        dispatch(add(superhero));
      }
    }
  };

  return (
    <>
      <div className="c_add-to-team">
        <span>Add to team </span>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          checked={inMyTeam(myteam, superhero) ? true : false}
          onChange={(checked) => {
            checked ? addToTeamHandler(superhero) : dispatch(remove(superhero));
          }}
        />
      </div>
    </>
  );
}

export default AddToTeamComponent;
