import React from 'react';
import {Switch} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove} from './redux/addToTeamReducer';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import {getMyTeam} from './redux/addToTeamSelector';

import './style.scss';

export function AddToTeamComponent({superhero}) {
  const dispatch = useDispatch();

  const myteam = useSelector(getMyTeam);

  const inMyTeam = (team, supehero) => {
    return team.some((obj) => superhero === obj);
  };

  return (
    <div className="c_add-to-team">
      <span>Add to team </span>
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        checked={inMyTeam(myteam, superhero) ? true : false}
        onChange={(checked) => {
          checked ? dispatch(add(superhero)) : dispatch(remove(superhero));
        }}
      />
    </div>
  );
}

export default AddToTeamComponent;
