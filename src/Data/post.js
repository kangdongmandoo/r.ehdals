/* eslint-disable no-multi-str */
module.exports = [
  {
    url: 'r.ehdals',
    title: '@r.ehdals',
    des: '여기는 어디인가요?',
    content:
      '이곳은 저의 개인 블로그입니다.\n## 🎈 템플릿 사용\n[이곳에](/p/template) 자세히 적어두었습니다.',
    tags: ['r.ehdals', 'pin'],
    time: '2021/05/05',
  },

  {
    url: 'template',
    title: '템플릿 사용',
    des: '템플릿 사용에 대해',
    content:
      '## 다운로드\n먼저 Github에서 코드를 다운로드합니다.  \n그 다음으로 `yarn` 또는 `npm install`을 이용하여 모듈을 다운로드하세요.\n## 글 작성\n이제 다운로드를 완료했으니 글을 작성해봅시다.  \n`src/Data/post.js`를 수정합니다.  \n```javascript\nmodule.exports = [\n   {url: "URL", des: "Des", title: "Title", content: "Content", tags: [], time: ""}\n    // ...\n]\n```\n`url` : 글의 URL입니다.  \n`des` : 글의 간단한 설명입니다.  \n`title` : 글의 제목입니다.  \n`content` : 글의 내용입니다.  \n마크다운을 지원합니다.  \n`tags` : 글의 해시태그입니다.  \n`time` : 글을 작성한 날짜입니다.\n \
    \n## 프로필 설정\n이제 `src/Data/config.js`를 수정해주세요.  \n`nick` : 사용자 이름  \n`des` : 사용자 설명  \n`email` : 이메일  \n`img` : 사용자 프로필 사진  \n`instagram` : Instagram 주소  \n`github` : Github 주소  \n`doing` : 현재 하고 있는 일\n\
    \n## 실행\n`yarn build`를 한 후, `yarn start`를 해주세요.\n## 커스텀 스타일\n현재 커스텀 스타일을 쉽게 수정할 수 있게 만들지는 않았지만, `src/Style/global.scss`과 `src/Pages`폴더에 있는 각 페이지의 `scss`파일을 변경해주시면 됩니다.\n## 주의사항\n하단 텍스트(footer)를 지우지 마세요.',
    tags: ['template', 'pin'],
    time: '2021/05/05',
  },
]
