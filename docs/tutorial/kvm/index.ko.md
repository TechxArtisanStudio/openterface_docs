---
title: "KVM 소프트웨어 튜토리얼"
description: "USB를 통한 완전한 KVM: 키보드, 비디오 및 마우스 제어가 하나의 장치에서 가능합니다. 이 튜토리얼은 Openterface KVM 시리즈 — 목표의 HDMI 영상 출력을 잡아서 HID 에뮬레이션을 통해 키보드/마우스 입력을 전달하는 장치를 다룹니다:"
---

# KVM 소프트웨어 튜토리얼

> USB를 통한 완전한 KVM: 키보드, 비디오 및 마우스 제어가 하나의 장치에서 가능합니다.

이 튜토리얼은 **Openterface KVM 시리즈** — 목표의 HDMI 영상 출력을 잡아서 HID 에뮬레이션을 통해 키보드/마우스 입력을 전달하는 장치를 다룹니다:

- **Mini-KVM** — 컴팩트한 USB KVM 어댑터
- **KVM-Go** — 툴킷 형식인 이동식 KVM
- **uConsole KVM 확장** — uConsole에 내장된 KVM

> **플랫폼:** macOS, Windows, Linux (데스크톱 앱), **Android** (모바일 앱) 및 **iPadOS** (태블릿 앱).
> Android 특수한 사항과 iPadOS 특수한 사항은 전반적으로 기록되어 있습니다.
> **참고:** iPadOS는 **KVM-Go 만 지원합니다.** — iPadOS 앱은 KVM-Go 동글을 통해 블루투스 LE로 연결됩니다.

> KeyMod(키보드 & 마우스 에뮬레이터만)을 찾으시나요? [KeyMod 튜토리얼](../keymod/index.md)를 확인해 주세요.

---

## 튜토리얼 시리즈

| # | 제목 | 대상 |
|---|-------|----------|
| [01 — 시작하기](01-getting-started.md) | 설치, 하드웨어 설정, 첫 번째 런처 | 초보자 |
| [02 — 기본 작업](02-basic-operations.md) | 마우스, 키보드, 비디오, 오디오, 녹화 | 모든 사람 |
| [03 — 고급 기능](03-advanced-features.md) | EDID, 플래시, 매크로, 스크립트, 진단 | 중간 수준에서 전문가 |
| [04 — 문제 해결](04-troubleshooting.md) | 일반적인 문제와 해결책 | 모든 사람 |

## 빠른 시작

1. **새 사용자?** [시작하기](01-getting-started.md)를 먼저 설치하고 장치를 연결하세요
2. **사용 준비가 되었나요?** [기본 작업](02-basic-operations.md)을 읽어 마우스, 키보드 및 비디오에 대해 알아보세요
3. **문제가 있나요?** [문제 해결](04-troubleshooting.md)로 가서 일반적인 문제를 확인하세요

## 빠른 링크

- [앱 개요](/app/overview.md) — 다운로드 및 설치 가이드
- [Mini-KVM 제품 페이지](/product/minikvm/)
- [KVM-Go 제품 페이지](/product/kvm-go/)
- [uConsole KVM 확장 제품 페이지](/product/uconsole-kvm-extension/)
- [iPadOS 앱](/app/ipados/) — 다운로드 및 설치 가이드
- [디스코드](https://discord.gg/sFTJD6a3R8) — 커뮤니티 지원
