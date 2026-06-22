---
title: "대상 기기에 연결 | 확장 모듈 v2"
description: "HDMI, USB HID 및 네트워크 디버깅을 위한 선택적 이더넷을 통해 대상 기기를 Openterface uConsole KVM 확장 모듈 v2에 연결하세요."
keywords: "KVM 연결 설정, 대상 기기, HDMI, USB HID, 이더넷 디버그, uConsole KVM v2"
---

# **대상 기기에 연결** | 확장 모듈 v2

## 연결 개요

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

확장 모듈 v2는 **HDMI**(비디오/오디오) 및 **USB**(키보드/마우스 에뮬레이션)를 통해 대상 기기에 연결됩니다. 선택적으로 KVM이 디스플레이와 입력을 처리하는 동안 SSH, 웹 관리 또는 로그 캡처를 위해 **이더넷**을 사용할 수 있습니다.

## 사전 요구 사항

1. [하드웨어 설치](/products/kvmext/hardware-installation/) — 확장 슬롯에 모듈 장착 완료
2. [소프트웨어 설정](/products/kvmext/software-setup/) — uConsole에 Openterface QT 설치 완료
3. [이더넷 카드 선택](/products/kvmext/ethernet/) (네트워크 기능 사용 시)

## 연결 단계

### **USB 제어 (KVM 필수)**

확장 보드의 **Type-C 포트**를 대상 기기의 USB 포트에 연결하세요. 이렇게 하면 키보드와 마우스(USB HID)가 에뮬레이션됩니다.

대상 기기는 HID 제어에 드라이버나 추가 소프트웨어가 **필요하지 않습니다**.

### **비디오 입력 (KVM 필수)**

대상 기기의 HDMI 출력을 확장 모듈의 HDMI 입력에 연결하세요:

- HDMI 출력에는 표준 HDMI 케이블 사용
- VGA의 경우 **VGA-to-HDMI** 컨버터 사용 (컨버터 USB 전원 연결 확인)
- DVI, DisplayPort, Micro HDMI 등 필요에 따라 다른 어댑터 사용

### **이더넷 (선택 사항 — 네트워크 디버그)**

네트워크 카드를 설치한 경우:

- 이더넷 케이블을 카드에서 대상 기기 또는 네트워크 스위치로 연결
- KVM과 함께 SSH, 웹 UI 또는 로그 캡처에 uConsole 사용
- 100M 대 1000M 설정은 [이더넷 가이드](/products/kvmext/ethernet/) 참조

### **SD 카드 (선택 사항 — 이미징 및 파일)**

모듈 슬롯에 microSD 카드를 삽입하세요. 호스트 앱을 사용하여 uConsole와 대상 기기 간 액세스를 전환하세요. [SD 카드 가이드](/products/kvmext/sd-card/)를 참조하세요.

## USB 2.0 공유 전환

호스트 앱은 uConsole와 대상 기기 간에 공유 USB 2.0 포트를 전환할 수 있어, 케이블을 분리하지 않고도 플래시 드라이브 및 유지보수 워크플로우에 유용합니다.

## 연결 테스트

1. uConsole 전원을 켜고 대상 기기를 부팅하세요
2. Openterface QT를 실행하세요
3. HDMI 비디오가 uConsole 화면에 나타나는지 확인하세요
4. 키보드, 트랙볼 및 오디오 패스스루를 테스트하세요
5. SD 또는 USB 전환을 사용하는 경우, 호스트 앱에서 마운트/전환을 테스트하세요

## 관련 항목

- [사용 사례](/products/kvmext/use-cases/) — 현장 IT, 홈랩, 임베디드 디버그 시나리오
- [FAQ](/products/kvmext/faq/) — 문제 해결

