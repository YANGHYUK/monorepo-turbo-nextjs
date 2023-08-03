## 설명

- turbo 를 이용한 monorepo 구성

## 구조

1. app (nextjs 기반 실서비스 )

- admin
- XX
- @@

2. packages (공용 ui 및 로직 관리)

- /config => common setting (ex:eslint, prettier etc...)
- /shared/ui => common emotion ui (emotionjs)
- /shared/utils => common logic function

## 참고

- monorepo reference : https://blog.logrocket.com/build-monorepo-next-js/#creating-workspaces
