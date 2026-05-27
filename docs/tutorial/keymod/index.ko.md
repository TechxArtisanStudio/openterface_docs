---
title: "KeyMod 튜토리얼"
description: KeyCmd 앱 사용에 대한 전체 가이드입니다. 휴대폰에서 컴퓨터를 연결하고 제어하며 키보드, 마우스, 게임패드, 매크로 및 음성 입력 모드를 사용하는 방법을 알아보세요. 이 튜토리얼에서는 KeyCmd 앱의 Android 버전을 다룹니다. iOS 버전은 개발 중입니다.…
keywords: "KeyMod 튜토리얼, KeyMod 사용 방법, 휴대폰 키보드 가이드, KeyCmd 앱 튜토리얼"
---

# KeyMod 튜토리얼

{% include "partials/keymod-tutorial-slideshow.html" %}

이 튜토리얼에서는 KeyCmd 앱의 **Android** 버전을 다룹니다. iOS 버전은 개발 중입니다.

## KeyMod란 무엇인가요?

KeyMod는 휴대폰이나 태블릿을 모든 컴퓨터의 **범용 입력 장치**로 바꿔줍니다. **Openterface KeyMod** 하드웨어(KVM — 키보드, 비디오, 마우스 전환기)에 연결되어 실제 USB 키보드 및 마우스에서 나온 것처럼 휴대폰의 키 입력, 마우스 움직임 및 게임 패드 입력을 대상 컴퓨터로 보냅니다.

### 연결 작동 방식```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyCmd app)                (CH9329 protocol)              (Windows/macOS/Linux)
앱은 직렬 연결(115200 보드에서 USB-C, 8N1 또는 Bluetooth BLE)을 통해 **CH9329 프로토콜**을 사용하여 KeyMod 하드웨어와 통신합니다. KeyMod 장치는 대상 컴퓨터에 표준 USB 키보드 및 마우스로 표시되며 드라이버가 필요하지 않습니다.

### 이것은 누구를 위한 것인가요?

| 당신은... | KeyMod이 도움이 됩니다... |
|---|---|
| **시스템 관리자** | 여분의 키보드와 모니터를 가지고 다닐 필요 없이 휴대폰으로 서버를 관리하세요 |
| **발표자/연사** | 클릭커가 필요 없이 실내 어디에서나 슬라이드를 제어할 수 있습니다 |
| **게이머** | 휴대폰을 레트로 게임용 게임패드로 사용하거나 추가 컨트롤러로 사용 |
| **컨텐츠 제작자** | 다른 컴퓨터에서 녹음하는 동안 바로가기, 매크로 및 음성 입력 트리거 |
| **고급 사용자** | 휴대폰에서 복잡한 키보드 단축키, 텍스트 조각 또는 자동화 시퀀스 보내기 |
| **누구나** | 소파, 침대 또는 방 건너편에서 컴퓨터에 입력 |

## 튜토리얼 섹션

| 가이드 | 설명 |
|---|---|
| [1. Getting Started](01-getting-started.md) | 첫 번째 모드 설치, 연결 및 선택(5분) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | 입력, 수정자, touchpad 및 텍스트 입력 |
| [3. Target OS](03-target-keyboard.md) | 대상 운영 체제 매핑 |
| [4. Shortcut Hub](04-shortcuts.md) | 인기 앱을 위한 프로필 기반 키보드 단축키 |
| [5. Macros](05-macros.md) | 지연이 있는 자동화된 키 시퀀스 |
| [6. Voice Input](06-voice-input.md) | Whisper AI를 통한 음성-키보드 |
| [7. AI Integration](07-ai.md) | 텍스트 개선 및 명령 도우미 |
| [8. Gamepad](08-gamepad.md) | 사용자 정의 가능한 레이아웃을 갖춘 가상 게임 컨트롤러 |
| [9. Numpad](09-numpad.md) | 데이터 입력용 숫자 키패드 |
| [10. Presentation](10-presentation.md) | 슬라이드 리모콘 및 타이머 |
| [11. Settings](11-settings.md) | 앱 구성 및 기본 설정 |
| [12. Troubleshooting](12-troubleshooting.md) | 일반적인 문제 및 해결 방법 |

## 도움 받기

- **버그 신고:** [Discord](https://discord.gg/techxartisan)
- **커뮤니티:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **소스 코드:** KeyCmd *(coming soon)*