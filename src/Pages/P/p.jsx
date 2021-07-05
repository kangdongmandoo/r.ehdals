/* eslint-disable react/jsx-key */
import List from '../../Data/post.json';
import Error from '../../Components/Error/err';
import { MarkedHTML } from '../../Library/markdown';
import Tag from '../../Components/Tags/tag';
import './style.scss';
import config from '../../Data/config';
import React from 'react';
const PostStyle = {};

function addHr(content) {
  console.log(content);
  content = content.replaceAll('</h2>', '</h2><hr />');
  console.log(content);
  return { __html: content };
}

export default function App({ match }) {
  var result = (
    <Error
      title="등록된 글이 없어요."
      content="URL이 맞는지 다시 확인해주세요."
    ></Error>
  );
  List.forEach((element) => {
    var resultTag = element.tags.map((element) => (
      <Tag text={element} size="medium"></Tag>
    ));
    if (element.url === match.params.p) {
      result = (
        <div style={PostStyle} className="post">
          <h1 id={element.title.replace(' ', '-')}># {element.title}</h1>
          <span className="time">
            {element.time} : {config.nick}
          </span>
          <hr></hr>
          <div id="post-main-content">
            <p
              dangerouslySetInnerHTML={addHr(
                MarkedHTML(element.content).__html
              )}
            ></p>
          </div>
          <div className="p-tags">{resultTag}</div>
          <div className="author">
            <div className="image-p">
              <img src={config.img} alt="" aria-label={config.nick}></img>
            </div>
            By
            <strong className="p-author-left">
              <a href={'/u/@' + config.nick}>{config.nick}</a>
            </strong>
            <div>
              <span className="des">{config.des}</span>
            </div>
          </div>
        </div>
      );
    }
  });
  return result;
}
