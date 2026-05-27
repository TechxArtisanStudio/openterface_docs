---
title: "KeyMod 튜토리얼 - 시작하기"
description: KeyCmd 앱을 설치하고 KeyMod 장치에 연결한 후 5분 이내에 첫 번째 키 입력을 보내세요. KeyCmd 앱을 설치하고 KeyMod 하드웨어에 연결한 후 5분 이내에 첫 번째 키 입력을 보내세요.
keywords: "KeyMod 시작하기, KeyMod 설정, KeyMod 설치, KeyMod 연결"
---

# 1. 시작하기

KeyCmd 앱을 설치하고 KeyMod 하드웨어에 연결한 후 5분 이내에 첫 번째 키 입력을 보내세요.

## 필요한 것

- **Openterface KeyMod 하드웨어** — 전원이 켜져 있고 범위 내에 있습니다.
- **휴대전화 또는 태블릿** — KeyCmd 앱이 설치된 Android
- **USB 케이블**(초기 설정용) — USB-C: 휴대폰을 KeyMod 장치에 연결
- **블루투스**(옵션) — 초기 설정 후 무선 연결용

## 1단계: KeyCmd 앱 설치

**Android:**

1. 휴대폰의 브라우저를 열고 [KeyCmd beta APK (v0.19)](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)로 이동합니다.
2. 최신 `.apk` 파일을 다운로드하세요.
3. 다운로드한 파일을 눌러 설치하세요.
4. Android 메시지가 나타나면 브라우저에서 **"알 수 없는 앱 설치"**를 허용하세요.

또는 소스에서 빌드합니다. 아래 14를 참조하세요.

## 2단계: KeyMod 장치에 연결

KeyMod은 두 가지 방법으로 Openterface KeyMod 하드웨어에 연결됩니다.

### USB 연결(처음 설정 시 권장)

1. USB-C 케이블을 사용하여 휴대폰을 KeyMod 장치에 연결합니다
2. KeyCmd 앱을 엽니다
3. 연결 아이콘(메인 화면 오른쪽 상단)을 탭하세요.
4. **"USB 연결"**을 탭합니다.
5. 메시지가 표시되면 USB 권한 프롬프트를 수락합니다.
6. 녹색 **"연결됨"** 상태 표시기가 나타납니다.

### 블루투스 연결(무선)

1. 휴대폰에서 블루투스가 활성화되어 있는지 확인하세요
2. KeyMod를 열고 연결 아이콘을 탭합니다
3. **"블루투스 연결"**을 탭하세요.
4. KeyMod 장치가 검색 목록에 나타날 때까지 기다립니다.
5. 탭하여 페어링하세요.
6. 녹색 **"연결됨"** 상태 표시기가 나타납니다.

> **팁:** 연결 대화 상자에서 **"시작 시 자동 연결"**을 활성화하면 KeyMod을 열 때마다 자동으로 다시 연결됩니다. 앱은 마지막 연결 유형(USB 또는 BLE)을 기억합니다.

## 3단계: 모드 선택 — 환영 및 가이드

실행 후 모드 카드가 포함된 **환영 및 가이드** 화면이 표시됩니다.

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>환영 및 가이드 — 해당 모드로 들어가려면 아무 모드 카드나 탭하세요.</em></p>
</div>

사이드 메뉴(왼쪽 상단의 햄버거 아이콘)를 사용하면 언제든지 모드를 전환할 수 있습니다.

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>탐색 창 — 모드 전환, 매크로 액세스, 음성 및 설정.</em></p>
</div>

**"내 선택 기억"** — 향후 실행 시 시작 화면을 건너뛰고 마지막으로 사용한 모드로 바로 이동하려면 이 상자를 선택하세요.

**"건너뛰기" button** — 시작 화면을 건너뛰고 이전에 사용했던 모드로 즉시 들어갑니다.

## 4단계: 첫 번째 키 입력 보내기

1. **키보드 및 마우스** 모드를 선택합니다.
2. 온스크린 키보드의 아무 키나 탭하세요.
3. 해당 키 입력이 대상 컴퓨터로 전송됩니다.

그게 다야! 이제 대상 컴퓨터를 원격으로 제어하고 있습니다.

## 연결 상태 표시기

| 지표 | 의미 |
|---|---|
| **녹색**(연결된 아이콘) | 활성 연결, 입력 전송 준비 완료 |
| **황색/파란색** (연결 아이콘) | 연결 진행 중 |
| **회색**(연결이 끊어진 아이콘) | 활성 연결이 없습니다 |
| **신호바** | BLE 신호 강도 또는 USB 활성 상태 |

## 다음 단계

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — 입력, 수정자, touchpad 및 텍스트 입력