/* eslint-disable react/prop-types */
import config from '../../Data/config';
import './style.scss';
import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-text">
        <a href={'/p/' + props.url}>
          <div className="title-card">{props.title}</div>
          <div className="des">
            <span>{props.des}</span>
          </div>
          <div className="au">
            <span>
              {config.nick} | {props.time}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
