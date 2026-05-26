---
title: "KeyMod 튜토리얼 - 대상 OS"
description: KeyMod가 올바른 키 매핑을 Windows, macOS 또는 Linux 컴퓨터에 보내도록 대상 운영 체제를 설정합니다. KeyMod은 대상 컴퓨터의 운영 체제에 맞는 키 입력을 보냅니다. 이를 올바르게 구성하면 올바른 키가 대상에 도착합니다. 헤더 표시줄에서 OS 아이콘을…
keywords: "KeyMod 대상 OS, 키 매핑, 수정자 키, 유니코드 입력"
---

# 3. 대상 OS

KeyMod은 대상 컴퓨터의 운영 체제에 맞는 키 입력을 보냅니다. 이를 올바르게 구성하면 올바른 키가 대상에 도착합니다.

## 설정 방법

헤더 표시줄에서 **OS 아이콘**을 탭하여 선택기를 엽니다.

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>대상 OS 선택기 - macOS, Windows 또는 Linux.</em></p>를 선택합니다.
</div>

> **참고:** 이에 대한 스크린샷은 아직 없습니다. OS 선택기는 헤더 표시줄에서 OS 아이콘을 탭할 때 나타나는 세 개의 아이콘 버튼(macOS, Windows, Linux)이 있는 대화 상자입니다.

## 변경되는 사항

| 대상 | 키 매핑 |
|---------|-------------|
| **Windows** | Win 키가 Windows 키에 매핑되었습니다. 표준 PC 수정자 동작 |
| **macOS** | Win 키가 Cmd에 매핑되었습니다. Alt이 Option에 매핑됨; 올바른 바로가기 라벨 |
| **Linux** | Super/Meta 주요 동작 |

이는 다음에 영향을 미칩니다.
- 바로가기 허브에 표시되는 **바로가기 라벨**
- **수정자 키 매핑**(Win 키 동작)
- ASCII가 아닌 문자에 사용되는 **유니코드 입력 방법**

## 유니코드 문자

ASCII가 아닌 문자(중국어, 일본어, 이모티콘)에는 OS별 입력 방법이 필요합니다.

| OS | 방법 |
|---|---|
| **Windows** | Alt+NumPad 16진수 유니코드 입력 |
| **Linux** | Ctrl+Shift+U 뒤에 16진수 코드 |
| **macOS** | Option+16진수 입력 |

유니코드 문자가 대상에 잘못 나타나는 경우 대상 OS가 올바르게 설정되었는지 확인하십시오.

## 키보드 모드(레이아웃 아님)

KeyMod는 입력을 위한 세 가지 키보드 모드를 제공합니다.

| 모드 | 전환하는 방법 |
|---|---|
| **ABC**(문자) | **ABC** 키 |
| **123**(숫자) | **123** 키 |
| **!?#** (기호) | **!?#** 키를 탭하세요 |

이는 실제 키보드 레이아웃이 아닌 앱 내의 입력 방법 토글입니다. KeyMod는 현재 표준 USB HID 스캔코드(US QWERTY 기반)를 보냅니다. 대상에서 미국 이외의 물리적 키보드를 사용하는 경우 동일한 키 위치에 있는 기호에 대해 약간의 문자 불일치가 나타날 수 있습니다.

## 다음 단계

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** — 입력, 수정자, touchpad 및 텍스트 입력
- **[Shortcut Hub →](04-shortcuts.md)** — 프로필 기반 키보드 단축키