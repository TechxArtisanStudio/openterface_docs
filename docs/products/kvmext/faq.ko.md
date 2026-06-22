---
title: "FAQ | 확장 모듈 v2"
description: "Openterface uConsole KVM 확장 모듈 v2 FAQ: 이더넷 카드, 업그레이드 키트, SD 카드, 소프트웨어 설정, 호환성 및 문제 해결."
keywords: "KVM 확장 v2 FAQ, uConsole KVM, 이더넷, SD 카드, 문제 해결, 업그레이드 키트"
---

# FAQ | 확장 모듈 v2

**Openterface uConsole KVM 확장 모듈 v2** FAQ에 오신 것을 환영합니다.

원하는 내용을 찾지 못하셨다면 [support@openterface.com](mailto:support@openterface.com)으로 이메일을 보내시거나 [Discord](/discord) 커뮤니티에 참여해 주세요.

---

## :material-clipboard-list: 빠른 탐색

- [제품 및 구매](#제품-및-구매)
- [설치 및 하드웨어](#설치-및-하드웨어)
- [호환성](#호환성)
- [제어 및 기능](#제어-및-기능)
- [비디오 및 오디오](#비디오-및-오디오)
- [문제 해결](#문제-해결)
- [기타](#기타)

---

## 제품 및 구매

**:material-chat-question:{ .faq } 확장 모듈 v2는 하나의 제품인가요, 두 가지 네트워크 버전인가요?**

**하나의 제품**입니다. 100M 및 1000M 이더넷 카드 모두 박스에 포함되어 있습니다. [구매 옵션](/products/kvmext/purchase-options/)을 참조하세요.

**:material-chat-question:{ .faq } 어떤 이더넷 카드를 사용해야 하나요?**

모든 uConsole 베이스 보드에서는 **100M** 카드를 사용하세요. **HackerGadgets uConsole 업그레이드 키트**가 있고 기가비트 네트워킹이 필요한 경우에만 **1000M** 카드를 사용하세요. [이더넷 가이드](/products/kvmext/ethernet/)를 참조하세요.

**:material-chat-question:{ .faq } HackerGadgets uConsole 업그레이드 키트가 필요한가요?**

**기가비트 이더넷**에만 필요합니다. 100M 카드는 업그레이드 키트 없이도 작동합니다. 키트가 없는 경우 결제 시 번들 옵션을 선택하거나 키트를 별도로 구매하세요.

**:material-chat-question:{ .faq } uConsole이 포함되어 있나요?**

아니요. ClockworkPi uConsole 기기는 별도로 판매됩니다.

---

## 설치 및 하드웨어

**:material-chat-question:{ .faq } 확장 모듈 v2는 어떻게 작동하나요?**

타겟 기기에서 HDMI를 캡처하여 uConsole에 표시합니다. uConsole 키보드와 트랙볼은 USB HID 에뮬레이션을 통해 타겟을 제어합니다. 선택 사양인 이더넷 및 SD 카드 기능은 네트워크 디버그 및 이미징 워크플로를 확장합니다.

**:material-chat-question:{ .faq } 4G/LTE 모듈이 설치된 상태에서도 사용할 수 있나요?**

아니요. 확장 모듈 v2는 uConsole 확장 슬롯을 사용하며 4G 또는 LTE 모듈과 **동시에** 사용할 수 없습니다.

**:material-chat-question:{ .faq } 설치에 어떤 도구가 필요한가요?**

장착 나사용 육각 드라이버. ESD 주의 사항을 권장합니다.

**:material-chat-question:{ .faq } 설치를 되돌릴 수 있나요?**

예. 확장 모듈 v2를 제거하고 필요한 경우 원래 4G/LTE 모듈을 다시 설치하세요.

---

## 호환성

**:material-chat-question:{ .faq } 어떤 uConsole 모델과 호환되나요?**

표준 확장 슬롯이 있는 uConsole 기기와 호환됩니다. 기기 사양을 확인하여 확인하세요.

**:material-chat-question:{ .faq } 어떤 타겟 기기를 제어할 수 있나요?**

HDMI 출력이 있는 모든 기기: 데스크톱, 서버, SBC(Raspberry Pi 등), 임베디드 시스템, 산업용 PC 등.

**:material-chat-question:{ .faq } 타겟에 특별한 소프트웨어가 필요한가요?**

아니요. KVM은 USB HID 에뮬레이션을 사용하므로 키보드와 마우스를 위한 드라이버가 타겟에 필요하지 않습니다. [USB 기반 KVM 기술](/tutorial/kvm/01-getting-started/)에서 자세히 알아보세요.

**:material-chat-question:{ .faq } 여러 타겟을 동시에 제어할 수 있나요?**

KVM은 한 번에 하나의 타겟입니다. HDMI 및 USB 케이블을 옮겨 타겟을 전환하세요.

---

## 제어 및 기능

**:material-chat-question:{ .faq } SD 카드를 통해 파일을 전송할 수 있나요?**

예. 확장 모듈 v2는 Openterface 앱을 통한 호스트/타겟 전환으로 SD 카드 읽기/쓰기를 지원합니다. [SD 카드 가이드](/products/kvmext/sd-card/)를 참조하세요.

**:material-chat-question:{ .faq } BIOS 수준 액세스를 지원하나요?**

예. 직접 USB HID는 네트워크 종속성 없이 전체 BIOS/UEFI 액세스를 허용합니다.

**:material-chat-question:{ .faq } 레거시 v1 모듈은 어떤가요?**

1세대 37 × 77 mm 모듈(이더넷/SD 없음)은 [레거시 v1 문서](/products/kvmext/v1/)에 문서화되어 있습니다.

---

## 비디오 및 오디오

**:material-chat-question:{ .faq } 어떤 비디오 해상도가 지원되나요?**

- **입력**: HDMI를 통해 최대 4K @ 30 Hz(RGB/YCBCR444) 또는 4K @ 60 Hz(YCBCR420)
- **출력**: uConsole 화면에서 1080p @ 60 Hz

**:material-chat-question:{ .faq } 비디오 지연 시간은 얼마인가요?**

**70 ms** 미만 — BIOS 액세스, 유지 보수 및 진단에 적합합니다.

**:material-chat-question:{ .faq } 오디오가 지원되나요?**

예. HDMI 임베디드 오디오는 uConsole 스피커로 전달됩니다.

---

## 문제 해결

**:material-chat-question:{ .faq } 비디오 신호가 없습니다**

- 양쪽 끝의 HDMI 연결 확인
- 타겟의 전원이 켜져 있고 HDMI를 통해 출력되는지 확인
- 다른 HDMI 케이블 시도
- Openterface QT 재시작

**:material-chat-question:{ .faq } 키보드 또는 마우스가 작동하지 않습니다**

- 확장 모듈에서 타겟으로의 USB 케이블 확인
- uConsole을 완전히 종료하고 10초 기다린 후 전원을 켜고 재시도
- Openterface QT 재설치(uConsole용 arm64 빌드)
- [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) 또는 [Discord](https://openterface.com/discord)에서 Linux 배포판 및 CM4 모듈 보고

**:material-chat-question:{ .faq } 소프트웨어 설치가 어려웠습니다**

[소프트웨어 설정](/products/kvmext/software-setup/)에서 GitHub 릴리스(옵션 1) 또는 ClockworkPi 커뮤니티 저장소(옵션 3)를 시도해 보세요. 단계별 도움은 [Discord](https://openterface.com/discord)에 참여하세요.

**:material-chat-question:{ .faq } USB 전환 포트가 작동하지 않습니다**

최신 Openterface QT 릴리스를 사용 중인지 확인하세요. 호스트 앱에서 USB 액세스를 토글하세요. 문제가 지속되면 [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues)에 이슈를 등록하세요.

**:material-chat-question:{ .faq } HDMI가 상자 안에만 표시되고 앱 설정 메뉴가 없습니다**

최신 Openterface QT로 업데이트하세요. [소프트웨어 설정](/products/kvmext/software-setup/) 및 Discord의 uConsole별 디스플레이 설정에 대한 커뮤니티 스레드를 확인하세요.

**:material-chat-question:{ .faq } 앱이 모듈을 감지하지 않습니다**

- 확장 슬롯에서 보드를 다시 장착
- uConsole 재시작
- Openterface QT 재설치

---

## 기타

**:material-chat-question:{ .faq } 소프트웨어가 오픈 소스인가요?**

예. Openterface 호스트 앱은 [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT)에서 오픈 소스로 제공됩니다.

**:material-chat-question:{ .faq } 어디에서 지원을 받을 수 있나요?**

- **이메일**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [커뮤니티 참여](https://openterface.com/discord)
- **GitHub**: [이슈 보고](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
