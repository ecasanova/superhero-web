import React, {useEffect} from 'react';
import {Form, Col, Row, Select, Input, Slider} from 'antd';

import './style.scss';

const {Option} = Select;

function FiltersComponent({
  filters,
  setFilters,
  dispatchFilters,
  powerstats,
  setPowerstats,
}) {
  useEffect(() => {
    dispatchFilters(filters);
    // eslint-disable-next-line
  }, []);

  const filterByPowers = (value) => {
    setFilters({...filters, powerstats: value});
    setPowerstats({powers: [...value]});
    dispatchFilters({...filters, powerstats: value});
  };

  const handleKeywordChange = (value) => {
    setFilters({...filters, keyword: value});
    dispatchFilters({...filters, keyword: value});
  };

  const handleGenderChange = (value) => {
    setFilters({...filters, gender: value});
    dispatchFilters({...filters, gender: value});
  };

  const handleAlignmentChange = (value) => {
    setFilters({...filters, alignment: value});
    dispatchFilters({...filters, alignment: value});
  };

  const handleInteligenceChange = (value) => {
    setFilters({...filters, intelligence: value});
    dispatchFilters({...filters, intelligence: value});
  };

  const handlePowerChange = (value) => {
    setFilters({...filters, power: value});
    dispatchFilters({...filters, power: value});
  };

  const handleCombatChange = (value) => {
    setFilters({...filters, combat: value});
    dispatchFilters({...filters, combat: value});
  };

  const handleSpeedChange = (value) => {
    setFilters({...filters, speed: value});
    dispatchFilters({...filters, speed: value});
  };

  const handleStrengthChange = (value) => {
    setFilters({...filters, strength: value});
    dispatchFilters({...filters, speed: value});
  };

  const handleDurabilityChange = (value) => {
    setFilters({...filters, durability: value});
    dispatchFilters({...filters, durability: value});
  };

  const isSelected = (value) => {
    return powerstats.powers.some(
      (power) => value.toLowerCase() === power.toLowerCase(),
    );
  };

  return (
    <div className="o-container c-filters">
      <Row gutter={[25, 0]}>
        <Col xs={24} md={12} l={4} xl={4}>
          <Form.Item name="keyword" label="Keyword">
            <Input
              placeholder="Keyword"
              value={filters.keyword}
              onChange={(e) => {
                handleKeywordChange(e.target.value);
              }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} l={4} xl={4}>
          <Form.Item name="gender" label="Gender">
            <Select
              defaultValue=""
              placeholder="Select Gender"
              style={{minWidth: '100%'}}
              value={filters.gender}
              onChange={(e) => {
                handleGenderChange(e);
              }}>
              <Option value="">Select Gender</Option>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12} l={4} xl={4}>
          <Form.Item name="alignment" label="Alignment">
            <Select
              placeholder="Select Alignment"
              value={filters.alignment}
              style={{minWidth: '100%'}}
              onChange={(e) => {
                handleAlignmentChange(e);
              }}>
              <Option value="">Select Alignment</Option>
              <Option value="good">Good</Option>
              <Option value="bad">Bad</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12} l={4} xl={4}>
          <Form.Item name="powerstats" label="Powerstats">
            <Select
              mode="multiple"
              style={{width: '100%'}}
              value={powerstats.powers}
              onChange={(e) => {
                filterByPowers(e);
              }}
              placeholder="Please select">
              <Option value="intelligence">Intelligence</Option>
              <Option value="strength">Strength</Option>
              <Option value="speed">Speed</Option>
              <Option value="durability">Durability</Option>
              <Option value="power">Power</Option>
              <Option value="combat">Combat</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={24} l={6} xl={6}>
          <Row gutter={[25, 25]}>
            {isSelected('intelligence') && (
              <Col span={12} xs={24} md={12} l={12} xl={12}>
                <Form.Item name="intelligence" label="Intelligence">
                  <Slider
                    range
                    onChange={(e) => {
                      handleInteligenceChange(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('strength') && (
              <Col span={12} xs={24} md={12} l={12} xl={12}>
                <Form.Item name="strength" label="Strength">
                  <Slider
                    range
                    onChange={(e) => {
                      handleStrengthChange(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('speed') && (
              <Col span={12} xs={24} md={12} l={12} xl={12}>
                <Form.Item name="speed" label="Speed">
                  <Slider
                    range
                    onChange={(e) => {
                      handleSpeedChange(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('durability') && (
              <Col span={12} xs={24} md={12} l={12} xl={12}>
                <Form.Item name="durability" label="Durability">
                  <Slider
                    range
                    onChange={(e) => {
                      handleDurabilityChange(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('power') && (
              <Col span={12} xs={24} md={12} l={12} xl={12}>
                <Form.Item name="power" label="Power">
                  <Slider
                    range
                    onChange={(e) => {
                      handlePowerChange(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('combat') && (
              <Col span={12} xs={24} md={12} l={12} xl={12}>
                <Form.Item name="combat" label="Combat">
                  <Slider
                    range
                    onChange={(e) => {
                      handleCombatChange(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FiltersComponent;
