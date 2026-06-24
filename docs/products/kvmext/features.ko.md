---
title: "기능 및 사양 | 확장 모듈 v2"
description: "Openterface uConsole KVM 확장 모듈 v2의 전체 개요: HDMI KVM, 듀얼 이더넷, SD 카드, USB 전환 및 기술 사양."
keywords: "KVM 확장 v2 기능, uConsole KVM, HDMI KVM, 이더넷 확장, SD 카드, 휴대용 KVM, 기술 사양"
---

# **기능 및 사양** | 확장 모듈 v2

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## 핵심 기능

- **직접 KVM 제어**: HDMI 입력과 USB HID 키보드/마우스 에뮬레이션을 통해 대상 장치를 보고 제어 — BIOS 액세스, OS 설치, 헤드리스 서버 복구에 이상적입니다.
- **듀얼 네트워크 카드 지원**: **100M** 및 **1000M** 이더넷 카드가 모두 포함되어 있습니다. 모든 uConsole 베이스 보드에서 100M을 사용하고, 기가비트 네트워킹을 위해서는 [HackerGadgets uConsole 업그레이드 키트](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole)와 함께 1000M을 사용하세요.
- **SD 카드 읽기/쓰기**: 외부 카드 리더 없이 uConsole에서 이미지 작성, 로그 내보내기, 파일 전송이 가능합니다.
- **USB 2.0 공유 전환**: 유연한 디버깅 및 유지 보수를 위해 uConsole과 대상 장치 간에 USB 액세스를 전환합니다.
- **낮은 지연 시간**: uConsole 화면으로 **1080p @ 60 Hz** 출력에서 **70 ms 미만의** 비디오 지연 시간.
- **휴대용 및 슬롯 전원 공급**: 컴팩트한 **77.3 × 34.7 mm** 디자인, uConsole 확장 슬롯에서 전원 공급 — 외부 전원 어댑터 불필요.
- **오픈 소스 정렬**: 오픈 호스트 앱 및 커뮤니티 지원을 갖춘 Openterface KVM 플랫폼 기반.

## 기술 사양

| 항목 | 사양 |
|------|---------------|
| **제품명** | Openterface uConsole KVM 확장 모듈 v2 |
| **보드 크기** | 77.3 × 34.7 mm |
| **비디오 입력** | HDMI 최대 4K @ 30 Hz (RGB/YCBCR444) 또는 4K @ 60 Hz (YCBCR420) |
| **비디오 출력** | uConsole 화면으로 1080p @ 60 Hz |
| **지연 시간** | &lt; 70 ms |
| **KVM 제어** | USB HID 키보드 및 마우스 에뮬레이션 |
| **네트워크** | 100M은 모든 uConsole 베이스 보드에서 작동; 1000M은 uConsole 업그레이드 키트 필요 |
| **SD 카드** | 호스트 앱을 통한 호스트/대상 전환으로 읽기/쓰기 |
| **USB 공유** | USB 2.0 Full Speed (12 Mbps) 공유 전환 |
| **대상 플랫폼** | Windows, macOS, Linux, x86 시스템, ARM SBC |
| **전원** | uConsole 확장 슬롯에서 전원 공급 |
| **외부 전원** | 필요 없음 |

### 전체 키보드 및 마우스 에뮬레이션

- **USB HID**: 절대 및 상대 마우스 위치 지정, 전체 키보드 지원, 멀티미디어 키.
- **연결**: 확장 보드의 Type-C 포트를 통한 대상과의 USB 연결.

### 비디오 및 오디오

- **입력**: HDMI를 통한 최대 4K (모드 세부 정보는 위 표 참조)
- **출력**: 70 ms 미만의 지연 시간을 갖춘 Full HD 1080p @ 60 Hz
- **디스플레이**: uConsole 내장 화면 사용
- **압축**: YUV 및 MJPEG 지원
- **호환성**: VGA, DVI, Micro HDMI (어댑터 사용)
- **오디오**: HDMI 임베디드 오디오 패스스루

### 연결성 및 전원

- **전원**: uConsole 확장 슬롯에서 직접 전원 공급
- **대상 소프트웨어**: 대상 장치에 설치 불필요

## 관련 항목

- [이더넷 가이드](/products/kvmext/ethernet/) — 100M vs 1000M 카드 선택
- [SD 카드 가이드](/products/kvmext/sd-card/) — 이미지 작성 및 파일 전송
- [구매 옵션](/products/kvmext/purchase-options/) — 확장 모듈만 vs 업그레이드 키트 번들
- [레거시 v1 사양](/products/kvmext/v1/features/) — 1세대 모듈
