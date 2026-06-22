---
title: "이더넷 가이드 | 확장 모듈 v2"
description: "Openterface uConsole KVM 확장 모듈 v2에 포함된 100M 또는 1000M 이더넷 카드를 선택하고 설치하세요. 기가비트를 위한 업그레이드 키트 요구 사항."
keywords: "uConsole 이더넷, 100M, 1000M, 기가비트, 업그레이드 키트, KVM 확장 v2 네트워크"
---

# **이더넷 가이드** | 확장 모듈 v2

확장 모듈 v2에는 **100M과 1000M 이더넷 카드가 모두** 포함되어 있습니다. 하드웨어 설정 시 **하나의** 카드만 설치하세요 — 별도의 네트워크 버전을 구매할 필요가 없습니다.

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## 어떤 카드를 사용해야 하나요?

| 카드 | 호환성 | 권장 용도 |
|------|---------------|----------|
| **100M 이더넷** | 모든 uConsole 베이스 보드 | 범용 사용, SSH, 웹 UI, 로그 캡처 |
| **1000M 이더넷** | **HackerGadgets uConsole 업그레이드 키트** 필요 | 기가비트 네트워킹, 더 빠른 전송 |

!!! tip "잘 모르겠나요?"
    업그레이드 키트가 이미 설치되어 정상 작동하는 것이 확인되지 않았다면, **100M** 카드로 시작하세요.

## 구매 옵션 & 업그레이드 키트

| 옵션 | 이더넷 기능 |
|--------|---------------------|
| **확장 v2 단품** | 기본적으로 100M 지원; 1000M 카드 포함되어 있지만 기가비트를 사용하려면 업그레이드 키트 필요 |
| **확장 v2 + 업그레이드 키트 번들** | 포함된 업그레이드 키트로 기가비트 지원 |

전체 비교: [구매 옵션](/products/kvmext/purchase-options/)

**HackerGadgets**의 업그레이드 키트에 대한 자세한 정보는 [TechxArtisan Shop listing](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole)에서 확인하세요.

## 설치

1. [하드웨어 설치](/products/kvmext/hardware-installation/)의 1–2단계(전원 끄기, 기존 모듈 제거)를 완료하세요.
2. 모듈 설계에 따라 선택한 이더넷 카드를 확장 모듈 v2에 장착하세요.
3. 메인 보드를 확장 슬롯에 설치하고 나사를 고정하세요.
4. 대상 장치 또는 네트워크에 이더넷 케이블을 연결하세요.

## 사용 시나리오

- KVM으로 헤드리스 서버를 보면서 **SSH** 접속
- 라우터, 스위치, 어플라이언스의 **웹 관리**
- 현장에서의 **로그 캡처** 및 네트워크 유지보수
- 추가 어댑터 없이 **KVM + 네트워크** 워크플로우 결합

## 관련 항목

- [대상에 연결](/products/kvmext/connect-to-target/)
- [사용 사례](/products/kvmext/use-cases/)
- [FAQ](/products/kvmext/faq/)
