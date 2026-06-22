---
title: "SD 카드 가이드 | 확장 모듈 v2"
description: "Openterface uConsole KVM 확장 모듈 v2에서 SD 카드 읽기/쓰기를 사용하세요. 이미지 작업, 로그, 파일 전송을 위해 uConsole과 대상 장치 간 접근을 전환할 수 있습니다."
keywords: "SD 카드, microSD, KVM 확장 v2, 이미지 플래싱, 파일 전송, uConsole"
---

# **SD 카드 가이드** | 확장 모듈 v2

확장 모듈 v2에는 **SD 카드 읽기/쓰기** 기능이 포함되어 있어, 외부 카드 리더기를 휴대하지 않고도 uConsole에서 이미지를 플래싱하고, 로그를 내보내며, 파일을 전송할 수 있습니다.

## 개요

이 모듈은 **uConsole (호스트)**와 **대상 장치** 간에 공유되는 microSD 슬롯을 제공합니다 — KVM-GO MicroSD 전환 워크플로와 개념적으로 유사하지만, uConsole 확장 모듈에 통합되어 있습니다.

!!! note "한 번에 한 쪽만"
    SD 카드는 uConsole **또는** 대상 장치 중 한 쪽에만 마운트되며, 동시에 양쪽에 마운트되지는 않습니다. Openterface 호스트 앱을 사용하여 접근을 전환하세요.

## SD 카드 설치

microSD 카드를 모듈 슬롯에 단단히 고정될 때까지 확실히 삽입하세요.

## 호스트 앱을 통한 제어

uConsole에서 **Openterface QT**를 사용하여 다음 작업을 수행할 수 있습니다:

- SD 접근을 **호스트** (uConsole)와 **대상** 간에 전환
- uConsole에서 카드에 OS 이미지 쓰기
- 카드를 제거하지 않고 로그 내보내기 또는 파일 전송

SD 기능을 사용하기 전에 [소프트웨어 설정](/products/kvmext/software-setup/)을 완료했는지 확인하세요.

## 일반적인 워크플로

| 워크플로 | 설명 |
|----------|-------------|
| **OS 이미징** | uConsole에서 Raspberry Pi, 임베디드 보드 또는 어플라이언스 이미지 플래싱 |
| **로그 내보내기** | 대상에서 로그를 카드로 가져온 다음 uConsole에서 읽기 |
| **파일 전송** | 네트워크를 사용할 수 없을 때 uConsole과 대상 간에 설정 파일이나 스크립트 이동 |

## 안전 팁

- 카드를 물리적으로 제거하기 전에 호스트 앱에서 **꺼내기/마운트 해제**를 수행하세요
- 읽기/쓰기 작업 전에 올바른 쪽(호스트 대 대상)으로 전환하세요
- 이미징 작업에는 품질 좋은 microSD 카드를 사용하세요

## 관련 항목

- [대상 장치에 연결](/products/kvmext/connect-to-target/)
- [소프트웨어 설정](/products/kvmext/software-setup/)
- [KVM-GO MicroSD 전환 가이드](/products/kvmgo/microsd-switch/) — KVM-GO에서 유사한 전환 개념
