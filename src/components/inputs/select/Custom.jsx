import React, { Component } from "react";
import { components } from 'react-select';
const { Option, SingleValue } = components;

export const customSingleValue = (props) => (
  <SingleValue {...props}>
    {props.data.icon}
    {props.data.label}
  </SingleValue>
);

export const customOptionValue = (props) => (
  <Option className={`${props.data.isPrimary ? "primary" : ""}`} {...props}>
    {props.data.icon}
    {props.data.label}
  </Option>
);

export const customSingleIconValue = (props) => (
  <SingleValue {...props}>
    <img className="mr-2" src={`./assets/img/${props.data.icon}`} alt=""/>
    {props.data.label}
  </SingleValue>
);

export const customOptionIconValue = (props) => (
  <Option className={`${props.data.isExclude ? "exclude" : ""}`} {...props}>
    <img className="mr-2" src={`./assets/img/${props.data.icon}`} alt=""/>
    {props.data.label}
  </Option>
);