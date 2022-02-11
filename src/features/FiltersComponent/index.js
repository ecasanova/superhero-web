import React, {useState, setState} from 'react';
import {Form, Col, Row, Select, Input, Slider} from 'antd';
import './style.scss';
import {useDispatch} from 'react-redux';

const {Option} = Select;

function FiltersComponent({filters, setFilters}) {
  function filterByName(value) {
    setFilters({...filters, name: value});
  }
  function filterByGender(value) {
    setFilters({...filters, gender: value});
  }
  function filterByAlignment(value) {
    setFilters({...filters, alignment: value});
  }
  function filterByPowers(value) {
    setFilters({...filters, powerstats: [...value]});
  }
  function filterByIntelligence(value) {
    setFilters({...filters, intelligence: value});
  }
  function filterByPower(value) {
    setFilters({...filters, power: value});
  }
  function filterByStrength(value) {
    setFilters({...filters, strength: value});
  }
  function filterBySpeed(value) {
    setFilters({...filters, speed: value});
  }
  function filterByDurability(value) {
    setFilters({...filters, durability: value});
  }
  function filterByCombat(value) {
    setFilters({...filters, combat: value});
  }

  const isSelected = (value) => {
    return filters.powerstats.some(
      (power) => value.toLowerCase() == power.toLowerCase(),
    );
  };

  return (
    <div className="o-container c-filters">
      <Row gutter={[25, 0]}>
        <Col xs={24} md={12} l={4} xl={4}>
          <Form.Item name="keyword" label="Keyword">
            <Input
              placeholder="Keyword"
              value={filters.name}
              onChange={(e) => {
                filterByName(e.target.value);
              }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} l={4} xl={4}>
          <Form.Item name="gender" label="Gender">
            <Select
              defaultValue=""
              style={{minWidth: '100%'}}
              value={filters.gender}
              onChange={(e) => {
                filterByGender(e);
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
              value={filters.alignment}
              style={{minWidth: '100%'}}
              onChange={(e) => {
                filterByAlignment(e);
              }}>
              <Option value="">Select Alignment</Option>
              <Option value="God">Good</Option>
              <Option value="Bad">Bad</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12} l={4} xl={4}>
          <Form.Item name="powerstats" label="Powerstats">
            <Select
              value={filters.powerstats}
              mode="multiple"
              style={{width: '100%'}}
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
        <Col xs={24} md={12} l={6} xl={6}>
          <Row gutter={[25, 25]}>
            {isSelected('intelligence') && (
              <Col span={12}>
                <Form.Item name="intelligence" label="Intelligence">
                  <Slider
                    range
                    onChange={(e) => {
                      filterByIntelligence(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('strength') && (
              <Col span={12}>
                <Form.Item name="strength" label="Strength">
                  <Slider
                    range
                    onChange={(e) => {
                      filterByStrength(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('speed') && (
              <Col span={12}>
                <Form.Item name="speed" label="Speed">
                  <Slider
                    range
                    onChange={(e) => {
                      filterBySpeed(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('durability') && (
              <Col span={12}>
                <Form.Item name="durability" label="Durability">
                  <Slider
                    range
                    onChange={(e) => {
                      filterByDurability(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('power') && (
              <Col span={12}>
                <Form.Item name="power" label="Power">
                  <Slider
                    range
                    onChange={(e) => {
                      filterByPower(e);
                    }}
                  />
                </Form.Item>
              </Col>
            )}
            {isSelected('combat') && (
              <Col span={12}>
                <Form.Item name="combat" label="Combat">
                  <Slider
                    range
                    onChange={(e) => {
                      filterByCombat(e);
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
