import React from 'react';
import { Marked, MarkedHTML } from '../../Library/markdown';
import { nowTime } from '../../Library/time';
import { utc } from '../../Library/utc';
import './style.scss';

let data = {};
let t = Date.now();
fetch(
  'https://api.netlify.com/api/v1/sites/f44e357a-0989-41b3-9bdc-f73f37499d6d'
)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    // eslint-disable-next-line no-unused-vars
    data = json;
    if (document.getElementById('state-deploy-id')) {
      document.getElementById(
        'state-deploy-id'
      ).innerHTML = `deploy id : <code id="state-value">${data['deploy_id']}</code>`;
    }
    if (document.getElementById('state-id')) {
      document.getElementById(
        'state-id'
      ).innerHTML = `id : <code id="state-value">${data['id']}</code>`;
    }
    if (document.getElementById('state-update')) {
      document.getElementById(
        'state-update'
      ).innerHTML = `updated at <code id="state-value">${data['published_deploy']['updated_at']}</code>`;
    }
    if (document.getElementById('state-full')) {
      document.getElementById('state-full').innerHTML = Marked(
        `\`\`\`json\n// Site\n${JSON.stringify(
          data
        )}\n// Deploy\n// Loading..\n\`\`\``
      );
    }
    // console.log(data);
    const st = Date.now();
    if (document.getElementById('state-time-f')) {
      document.getElementById(
        'state-time-f'
      ).innerHTML = `첫 번째 데이터 (site) : <code id="state-value">${
        st - t
      }ms</code>`;
    }
    // console.log('[deploy_id] ' + data['deploy_id']);
    fetch(`https://api.netlify.com/api/v1/deploys/${data['deploy_id']}`)
      .then((ress) => {
        return ress.json();
      })
      .then((jsonn) => {
        // console.log('[state] ' + jsonn.state);
        if (document.getElementById('state')) {
          document.getElementById(
            'state'
          ).innerHTML = `state : <code id="state-value">${jsonn.state}</code>`;
        }
        if (document.getElementById('state-create')) {
          document.getElementById(
            'state-create'
          ).innerHTML = `created at <code id="state-value">${data['published_deploy']['created_at']}</code>`;
        }
        if (document.getElementById('state-full')) {
          document.getElementById('state-full').innerHTML = Marked(
            `\`\`\`json\n// Site\n${JSON.stringify(
              data
            )}\n// Deploy\n${JSON.stringify(jsonn)}\n\`\`\``
          );
        }
        if (document.getElementById('state-time')) {
          document.getElementById(
            'state-time'
          ).innerHTML = `걸린 시간 : <code id="state-value">${
            Date.now() - t
          }ms</code>`;
        }
        if (document.getElementById('state-time-s')) {
          document.getElementById(
            'state-time-s'
          ).innerHTML = `두 번째 데이터 (deploy) : <code id="state-value">${
            Date.now() - st
          }ms</code>`;
        }
      });
  });

export default function App() {
  return (
    <div className="state-container">
      <h2># Site State</h2>
      <p id="state-day">{utc()}</p>
      <p id="state-day">{nowTime()}</p>
      <h3>State</h3>
      <p id="state">
        state : <code>Loading..</code>
      </p>
      <h3>About</h3>
      <p id="state-id">
        id : <code>Loading..</code>
      </p>
      <p id="state-deploy-id">
        deploy id : <code>Loading..</code>
      </p>
      <h3>Published Deploy</h3>
      <p id="state-create">
        Created At : <code>Loading..</code>
      </p>
      <p id="state-update">
        Updated At : <code>Loading..</code>
      </p>
      <h3>Full Info</h3>
      <p
        id="state-full"
        dangerouslySetInnerHTML={MarkedHTML(
          '```json\n// Site\n// Loading..\n// Deploy\n// Loading..\n```'
        )}
      ></p>
      <h3>ETC</h3>
      <p id="state-time">
        걸린 시간 : <code>Waiting..</code>
      </p>
      <h4>타임 스템프</h4>

      <p id="state-time-f">
        첫 번째 데이터 (site) : <code>Waiting..</code>
      </p>
      <p id="state-time-s">
        두 번째 데이터 (deploy) : <code>Waiting..</code>
      </p>
    </div>
  );
}
