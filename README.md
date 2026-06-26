# Life RPG Point

몸을 움직여 포인트를 얻고, 포인트를 소비하거나 저축하며 성장하는 현실 RPG형 PWA입니다.

## 바로가기

- 앱 실행: <https://piaze729.github.io/LIFE-RPG-piaze/>
- 프로젝트 현황 문서: [PROJECT_STATUS.md](PROJECT_STATUS.md)

## 현재 구조

- 서버 없이 동작하는 정적 웹앱
- iPhone Safari 홈 화면 추가 가능
- 데이터는 각 기기의 브라우저 `localStorage`에 저장
- GitHub Pages로 배포

## Codex 작업 시작 규칙

새 Codex 채팅방에서 이어서 작업할 때는 먼저 [PROJECT_STATUS.md](PROJECT_STATUS.md)를 읽고 현재 기능, 철학, 주의사항을 확인합니다.

앱 기능을 수정할 때는 다음 값을 함께 올립니다.

- `app.js`의 `APP_VERSION`
- `index.html`의 화면 표시 버전
- `service-worker.js`의 `CACHE_NAME`

문서만 수정할 때는 앱 버전과 서비스 워커 캐시를 올리지 않습니다.
