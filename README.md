### 🚀 공부 시간과 쉬는 시간을 관리하는 자동 타이머

매 시간 정각부터 50분까지는 공부 시간,  
50분부터 다음 정각까지는 10분 쉬는 시간으로  
자동 체크되어 집중과 휴식을 놓치지 않고 챙길 수 있도록 도와줍니다.  
<br>
실시간으로 오늘의 요일과 시간이 화면에 표시되어 휴대폰을 보지 않아도 시간을 확인할 수 있습니다.  
<br>
또한, 50분과 정각마다 화면에 종이 울리지만 소리는 나지 않습니다.

An automatic timer that manages study and break time.<br>
It automatically tracks 50 minutes of study time from the start of each hour, followed by a 10-minute break until the next hour, helping you stay on schedule without missing your focus or rest time.<br><br>
The current day and time are displayed in real-time on the screen, so you don’t need to check your phone.<br><br>
Additionally, a visual bell rings at the 50th minute and on the hour, without any sound.

### 📌 Live Demo

[바로가기](https://lisarnjs.github.io/auto-break-time-tracker/)

### 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-yellow?logo=vite)
![GithubActions](https://img.shields.io/badge/GithubActions-CI/CD-3DDC84?logo=github)

### 🎯 자동화 흐름

| 이벤트 | 작업                | 결과                      |
| ------ | ------------------- | ------------------------- |
| PR     | Unit Test 실행      | ✅ 결과 표시만            |
| Push   | Unit Test + Build   | 🔥 GitHub Pages 자동 배포 |
| 실패시 | 아무것도 배포 안 됨 | ❌ CI/CD 실패 표시        |

### Build 상태

![Build](https://github.com/lisarnjs/auto-break-time-tracker/actions/workflows/webpack.yml/badge.svg)
[![Deploy](https://img.shields.io/badge/Groom_Timer-Live-blue?style=flat-square)](https://username.github.io/github-actions-practice/)
![Test](https://img.shields.io/badge/Test-Passing-green?style=flat-square)
