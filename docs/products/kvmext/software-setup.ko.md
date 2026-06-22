---
title: "소프트웨어 설정 | 확장 모듈 v2"
description: "KVM 확장 모듈 v2용 Openterface 호스트 앱을 uConsole에 설치 및 구성 — HDMI 캡처, USB HID, SD 카드 전환 및 USB 공유."
keywords: "Openterface 앱 설치, uConsole 소프트웨어 설정, KVM 확장 v2, openterfaceqt"
---

# **소프트웨어 설정** | 확장 모듈 v2

## 설치 개요

Openterface 호스트 앱을 사용하면 uConsole이 HDMI 캡처, USB HID 제어, **SD 카드 전환**, 호스트와 타겟 간 **USB 포트 공유** 기능을 갖춘 KVM 인터페이스로 동작합니다.

!!! note "요구 사항"
    - **uConsole (호스트)**: Openterface QT 앱 필요
    - **타겟 장치**: 앱 불필요 — Windows, macOS, Linux, Android, iOS에서 KVM 지원
    - **비디오**: 표준 HDMI 케이블 사용. 전원 공급 컨버터로 VGA, DP 및 기타 포맷 지원
    - **권장 백엔드**: arm64 GPU 성능을 위해 **GStreamer** 권장 (Kali Linux는 GStreamer 지원이 제한될 수 있음)

## 설치 방법

### **옵션 1: GitHub 릴리스 (arm64 권장)**

1. [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) 페이지를 방문하세요.
2. **arm64**용 최신 `.deb` 파일을 다운로드하세요 (예: `openterfaceqt_*_arm64.deb`).
3. 설치:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **옵션 2: Flatpak**

[Flatpak 설치 가이드](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md)를 따르세요.

### **옵션 3: 커뮤니티 저장소 (ClockworkPi Bookworm)**

ClockworkPi 이미지를 위해 Rex가 관리합니다:

1. **저장소 추가**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **설치**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "저장소 참고 사항"
    명령어 실행에 `sudo` 권한이 필요합니다. 저장소는 arm64 Bookworm 패키지를 대상으로 합니다 — 설치 전에 uConsole OS와의 호환성을 확인하세요.

## 중요 알림

!!! tip "전원 및 최초 설정"
    - uConsole을 충전 상태로 유지하거나 안정적인 전원에 연결하세요 — 배터리 부족 시 연결 문제가 발생할 수 있습니다.
    - 첫 번째 시도에서 키보드/마우스 제어가 실패하는 경우:
        1. uConsole을 완전히 종료하세요.
        2. 최소 10초간 기다리세요.
        3. 전원을 켜고 다시 시도하세요.

!!! tip "시리얼 통신 baud rate"
    시리얼 사용 시 baud rate를 **9600**으로 설정하세요 — uConsole은 115200을 안정적으로 유지하지 못할 수 있습니다.

## 사용법

### **KVM 세션 시작**

1. uConsole에서 Openterface QT를 실행하세요.
2. 앱이 확장 모듈 v2를 자동으로 감지합니다.
3. HDMI 및 USB로 타겟을 연결하세요.
4. uConsole의 키보드와 트랙볼을 사용하여 타겟을 제어하세요.

### **제어 기능**

- **키보드**: 멀티미디어 키를 포함한 전체 에뮬레이션
- **마우스**: 절대 및 상대 위치 지정
- **오디오**: uConsole 스피커로 HDMI 오디오 패스스루
- **텍스트 전송**: 사용자 이름, 비밀번호 및 스니펫을 시뮬레이션된 키 입력으로 붙여넣기
- **USB 전환**: 호스트 앱을 통해 USB 저장 장치를 uConsole과 타겟 간 공유 — [타겟에 연결](/products/kvmext/connect-to-target/) 참조
- **SD 카드 전환**: 호스트 앱을 통해 SD 카드를 호스트 또는 타겟에 마운트 — [SD 카드 가이드](/products/kvmext/sd-card/) 참조

### **소프트웨어 설치 문제 해결**

앱 설치가 어렵거나 마우스/키보드가 작동하지 않는 경우:

- uConsole CM4/모듈에 **arm64** 빌드를 설치했는지 확인하세요
- 실시간 도움을 받으려면 [Discord](https://openterface.com/discord)에 참여하세요
- [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)에 이슈를 보고하세요

## 관련 항목

- [타겟에 연결](/products/kvmext/connect-to-target/)
- [SD 카드 가이드](/products/kvmext/sd-card/)
- [FAQ](/products/kvmext/faq/)
