import React from 'react';
import {Switch} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import './style.scss';

export function AddToTeamComponent({superhero}) {
  return (
    <div className="c_add-to-team">
      <span>Add to team </span>
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />
    </div>
  );
}

export default AddToTeamComponent;
