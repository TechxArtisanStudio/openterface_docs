
# KVM 튜토리얼 03 — 고급 기능

**대상:** 중급~전문가 — 파워 유저 기능 및 설정

---

## 1. 환경설정 시스템

### 비디오

- **해상도 및 프레임 레이트** — 선호 캡처 설정
- **미디어 백엔드** — FFmpeg, GStreamer (Linux) 또는 Qt Multimedia (Windows)
- **하드웨어 가속** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **종횡비 및 스케일링** — 사용자 지정 비율, Stretch/Fit/Fill

### 오디오

- **활성화** — 타겟에서 오디오 캡처 전환
- **입력/출력 장치** — 소스 및 재생 장치 선택

### 타겟 제어

- **마우스 모드** — Absolute, Relative (HID), Relative (Events)
- **마우스 이벤트 스로틀** — 초당 30–1000 이벤트
- **키보드 레이아웃** — 타겟 OS 및 지역 레이아웃
- **반복 키 입력 간격** — 키를 누르고 있을 때 반복 속도
- **커서 자동 숨김** — 비디오 영역 위에서 호스트 커서 숨기기

### 로깅

- **로그 수준** — Debug, Info, Warning, Error
- **파일로 로그** — `~/Documents/openterface.log` (macOS) 또는 구성된 경로 (Qt)
- **시리얼 로깅** — 별도의 시리얼 통신 로그

---

## 2. EDID 관리

### EDID란?

EDID(Extended Display Identification Data)는 KVM 장치가 타겟에 전송하여 표시 기능 — 지원 해상도, 주사율, 벤더 정보 — 을 설명하는 데이터입니다. KVM은 「가상 모니터」 역할을 하므로 EDID가 타겟이 출력할 해상도를 결정합니다.

### EDID 표시 이름 편집

KVM 장치가 타겟에 보고하는 표시 이름을 변경할 수 있습니다. 이 이름은 타겟 OS의 디스플레이 설정에 표시됩니다.

> **참고:** 현재는 표시 이름 편집만 지원됩니다. 해상도 편집 및 사용자 지정 해상도 항목은 아직 사용할 수 없습니다.

**접근:** Settings > EDID Display Name Editor (macOS) 또는 Device > Update Display Settings (Qt)

### 사용 사례

- 타겟 OS 설정에서 **디스플레이 식별**
- 멀티 모니터 구성에서 KVM 디스플레이를 구분하기 위한 **사용자 지정 이름**

---

## 3. 매크로 시스템 (macOS)

매크로는 도구 모음 매크로 패널에서 트리거할 수 있는 저장된 키보드 동작 시퀀스입니다.

### 키 시퀀스 형식

**수정자 태그:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (타겟 OS에 따라 Cmd/Win/Super로 매핑)

**특수 키:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**지연:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### 예시

<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
### AI 지원 생성

매크로 편집기의 **Magic** 버튼은 자연어로부터 매크로를 생성합니다. 원하는 동작을 설명하면 AI가 키 시퀀스를 생성합니다.

### 검증

테스트 후 매크로를 **verified**(검증됨)로 표시합니다. 검증된 매크로만 AI 에이전트의 자율 실행에 사용할 수 있습니다.

---

## 4. 스크립트 도구 (Qt)

AutoHotKey에서 영감을 받은 스크립트 언어로, 타겟에서 키보드 및 마우스 동작을 자동화합니다.

### 열기

메뉴: **Device > Script Tool**

### 명령

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | 실행 일시 정지 | `Sleep 1000` |
| `Send` | 키 입력 전송 | `Send Hello World` |
| `Click` | 마우스 클릭 | `Click 100 200` |
| `SetCapsLockState` | CapsLock 전환 | `SetCapsLockState On` |
| `FullScreenCapture` | 스크린샷 | `FullScreenCapture "/tmp/shot.png"` |

### 수정자 접두사

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. 펌웨어 업데이트

### 업데이트 시기

- 새 하드웨어 기능
- 버그 수정
- 호환성 개선

### 업데이트 절차

1. Firmware Update Tool 열기 (macOS에서는 **Settings > Firmware Update Tool**, Qt에서는 **Device > Update Firmware**)
2. 도구가 네트워크에서 최신 버전 확인
3. 쓰기 작업 중 진행률 추적
4. **업데이트 중에는 장치를 분리하지 마세요**

### 복구

1. 장치 전원 유지
2. Firmware Update Tool을 닫았다가 다시 열고 재시도
3. 장치가 응답하지 않으면 Serial Reset Tool 사용

---

## 6. Serial Reset Tool

**접근:** Settings > Serial Reset Tool (macOS) 또는 Device > Factory Reset HID Chip (Qt)

다음 경우에 사용:
- 펌웨어 업데이트 실패 후 장치가 알 수 없는 상태
- HID 칩이 응답하지 않음
- 장치를 재판매하기 전 준비

---

## 7. 진단 (Qt)

메뉴: **Device > Device Diagnostics**

하드웨어 테스트를 순차적으로 실행:
1. 시리얼 연결 테스트
2. 타겟 USB 상태
3. 공장 초기화 테스트
4. 고/저 baudrate 테스트
5. 스트레스 테스트 (빠른 명령, 성공률 측정)
6. 플러그 앤 플레이 테스트 (USB 연결 해제/재연결 감지)

실행 후 **Support Email Dialog**를 통해 결과를 내보냅니다.

---

## 8. AI 채팅 시스템 (macOS)

타겟 화면을 분석하고, 동작을 제안하며, 키보드/마우스 작업을 실행할 수 있는 내장 AI 어시스턴트.

### 채팅 모드

| Mode | Description |
|------|-------------|
| **Interactive** | 질문하고 안내 받기 |
| **Agentic** | AI가 자율적으로 계획하고 다단계 작업 실행 |
| **Guide** | 한 번에 하나의 지시를 단계별로 |
| **Planner** | 복잡한 요청을 구조화된 계획으로 분해 |

### 구성

Settings > AI Chat: API 엔드포인트, 키 (Keychain에 저장), 모델, 타겟 시스템 (macOS/Windows/Linux 등)

---

## 9. 원격 제어 (VNC/RDP — macOS)

**Control > Connection Protocol**을 통해 **Hardware KVM**, **VNC**, **RDP** 모드 간 전환.

| Scenario | Mode |
|----------|------|
| BIOS/UEFI, 네트워크 없음, 부팅 중, 충돌한 타겟 | Hardware KVM |
| 고대역폭 데스크톱 사용, Windows 서버 | VNC 또는 RDP |

---

## 10. TCP 서버 (Qt)

포트 12345에서 원격 제어를 위한 내장 TCP 서버.

### 명령

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Python 예시

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **보안:** 인증, 암호화 또는 속도 제한 없음. 신뢰할 수 있는 네트워크에서만 활성화하세요.

---

## iPadOS 전용 기능

### Bluetooth 연결 관리

iPadOS 앱은 **Bluetooth Low Energy (BLE)** 를 통해 KVM-Go 동글에 연결하여 키보드/마우스 HID 입력을 수행합니다:

- **자동 연결:** 기본적으로 활성화. 시작 시 앱은 5초간 스캔하고 가장 신호가 강한 `kvm*` 장치에 자동 연결합니다.
- **재연결:** 연결이 끊기면 앱은 2초 간격으로 최대 3회 재연결을 시도합니다.
- **신호 모니터링:** RSSI는 2초마다 업데이트. BLE 버튼은 신호 강도(예: `-45 dBm`)와 색상 표시: 녹색 (-50~0 dBm), 주황 (-70~-50 dBm), 빨강 (-70 dBm 미만).
- **장치 스캔:** 이름이 `kvm`으로 시작하는 장치(대소문자 구분 없음)만 목록에 표시됩니다.
- **수동 제어:** BLE 화면을 열어 스캔, 연결, 연결 해제 또는 자동 연결 비활성화.

### 정보 오버레이

**Info** 버튼을 탭하면 오른쪽 상단에 실시간 입력 상태 오버레이가 표시됩니다:

```
┌─ 입력 상태 ────────────┐
│ 마우스                 │
│ 모드: Absolute         │
│ 위치: 512.0, 384.0     │
│ 드래그 모드: Active    │
│ 스크롤: Inactive       │
│ 키보드                 │
│ 모드: Normal           │
│ Caps Lock: OFF         │
│ 수정자: Ctrl, Shift    │
└────────────────────────┘
```

오버레이는 터치에 투명 — 비디오 미리보기와의 상호작용을 차단하지 않습니다.

### 화면 방향 보정

**Rotate** 버튼을 탭하여 방향 보정 모드를 순환: Normal, 90° CW, 180°, 90° CCW. KVM-Go 동글이 비표준 방향으로 장착된 경우 비디오 미리보기를 보정합니다. 회전은 라이브 미리보기와 저장된 캡처 모두에 적용됩니다.

### 유휴 타이머 비활성화

앱은 사용 중 유휴 타이머를 비활성화하여 iPad 화면을 **켜진 상태**로 유지하고, 타겟 PC를 모니터링하는 동안 iPad가 자동 잠금되는 것을 방지합니다.

### 로깅 시스템

앱에는 카테고리 기반 필터링을 갖춘 내장 `Logger`가 있습니다:

| Category | Covers |
|---|---|
| `bluetooth` | BLE 스캔, 연결, 데이터 전송 |
| `mouse` | 마우스 입력, 제스처 감지, 모드 변경 |
| `keyboard` | 키 이벤트, 수정자 상태, 복합 키 |
| `camera` | 비디오 녹화, 스크린샷, 사진 캡처 |
| `ui` | 터치 처리, 제스처 인식, 미리보기 레이어 |
| `general` | 앱 수명 주기, 일반 정보 |

콘솔 노이즈를 줄이기 위해 앱 소스에서 로깅을 조정할 수 있습니다.

---

## 다음 단계

- **[고장 해결 →](04-troubleshooting.md)** — 일반적인 문제와 해결책

---

## Android 전용 기능

### 설정 패널

Android 앱의 설정 패널(메뉴 버튼 ☰)에는 모든 구성 옵션이 포함되어 있습니다:

| Setting | Description |
|---|---|
| **Device** | 연결된 USB 장치 및 상태 표시. 탭하여 선택 또는 재스캔. |
| **Disconnect Device** | 모든 USB 연결을 안전하게 해제. 분리 전에 사용. |
| **Baudrate** | 시리얼 통신 속도: **115200** (기본값) 또는 **9600** (느림, 문제 발생 시). |
| **Controls** | 카메라 밝기, 대비, 색조 슬라이더. |
| **Video Format** | 해상도 및 프레임 레이트 선택기. |
| **Rotate/Flip** | 90° CW/CCW 회전, 수평/수직 뒤집기. |
| **Screen Capture / Record Video** | 스크린샷 및 비디오 녹화. |
| **Relative / Absolute / Drag** | 마우스 제어 모드 전환. |
| **About Device** | Android 버전 및 앱 버전 정보 표시. |

### 설정 유지

Android 앱은 세션 간 설정을 기억합니다:

| Setting | Persisted? |
|---|---|
| 마우스 제어 모드 | 예 |
| 비디오 형식 (해상도, FPS) | 예 |
| 카메라 매개변수 (밝기, 대비, 색조) | 예 |
| 키보드 레이아웃 (US, JP, DE) | 예 |
| Baudrate | 예 |
| 장치 연결 기록 | 예 |

앱을 다시 열면 마지막 설정이 복원됩니다. 모두 재설정하려면: Android 설정 → 앱 → Openterface → 저장소 → **데이터 지우기**.

### 안전한 연결 해제

Android에서 KVM 장치를 분리하기 전:

1. 설정 패널 열기
2. **Disconnect Device** 탭 (빨간색으로 표시)
3. 앱이 USB 연결을 해제할 때까지 대기
4. 케이블 분리

이렇게 하면 데이터 손상을 방지하고 타겟 컴퓨터가 키보드/마우스를 올바르게 해제합니다.

### Android 성능 팁

- **해상도 낮추기** — 640×480은 1920×1080보다 훨씬 가볍습니다
- **프레임 레이트 줄이기** — 30fps는 60fps보다 대역폭을 적게 사용합니다
- **다른 앱 닫기** — 휴대폰 메모리 확보
- **고품질 USB OTG 어댑터 사용** — 저렴한 어댑터는 연결 병목이 될 수 있습니다
- 개발팀은 카메라 파이프라인 자체의 지연 시간 감소 작업을 진행 중입니다
