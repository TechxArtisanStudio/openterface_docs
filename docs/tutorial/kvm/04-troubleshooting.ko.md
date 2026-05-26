---
title: "KVM 튜토리얼 04 — 고장 해결"
description: "Openterface KVM 장치의 일반적인 문제와 해결책. Openterface 공식 문서: 설치, FAQ, 문제 해결. IT 및 개발자를 위한 KVM-over-USB 가이드."
---


# KVM 튜토리얼 04 — 고장 해결

Openterface KVM 장치의 일반적인 문제와 해결책.

---

## 장치가 감지되지 않음

### 증상
- 장치 메뉴에 "No devices found" 표시
- 키보드 및 마우스 표시등이 주황색 또는 회색
- 시리얼 포트가 "N/A"로 표시됨

### 진단

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
예상: `534d:2109`(HDMI 캡처) 및 `1a86:7523` 또는 `1a86:fe0c`(시리얼).

**macOS:** Apple 메뉴 > 이 Mac에 관하여 > 시스템 리포트 > 하드웨어 > USB — Openterface 찾기.

**Windows:** 장치 관리자 > "범용 직렬 버스 장치" 및 "포트(COM & LPT)" — CH340이 "USB-SERIAL CH340 (COMx)"로 표시되어야 함.

### 해결책

| 문제 | 해결 |
|---------|-----|
| lsusb/시스템 리포트에 장치 없음 | 다른 USB 케이블/포트 시도. USB 2.0+ 필요 |
| 장치는 보이지만 노드 없음 | udev 규칙 확인(Linux) 또는 드라이버 재설치(Windows) |
| 권한 거부됨 | 사용자를 `dialout` 및 `video` 그룹에 추가(Linux) |
| 감지 후 사라짐 | `brltty`가 시리얼 포트 점유(Linux) — 아래 참조 |

---

## BrlTTY 충돌 (Linux) {#brltty-conflict-linux}

**Linux에서 키보드/마우스가 동작하지 않는 가장 흔한 원인.**

`brltty`(점자 터미널) 서비스가 CH9329/CH32V208 칩을 포함한 USB 시리얼 장치를 점유합니다.

### 수정
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## 비디오 없음 / 검은 화면

### 단계

1. **HDMI 케이블**이 양쪽 끝에서 단단히 연결되었는지 확인
2. **타겟 장치**가 HDMI를 출력하는지 확인(일반 모니터로 테스트)
3. **다른 HDMI 케이블** 시도
4. **장치 재연결** — 앱이 핫플러그 이벤트를 처리함
5. **비디오 칩셋 감지 확인:** 지원: MS2109, MS2109S, MS2130S

### 백엔드 선택(Qt)

한 백엔드에서 검은 화면이 나오면 **Preferences > Video > Media Backend**에서 다른 것을 시도:
- **FFmpeg** — 가장 안정적(권장)
- **GStreamer** — Linux만
- **Qt Multimedia** — Windows 대체

### GStreamer 문제(Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
다른 sink 시도:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### EDID 불일치

타겟이 EDID를 인식하지 못하면 호환 해상도를 출력하지 않을 수 있습니다. 타겟 출력 해상도를 변경하거나 앱의 디스플레이 설정에서 EDID를 편집하세요.

---

## 키보드/마우스가 응답하지 않음

### 단계

1. **USB 스위치** 확인 — **Target**으로 설정(Host 아님)
2. **시리얼 포트 상태** 확인 — 포트 이름이 표시되고 "N/A"가 아님
3. **보드레이트 전환** — 9600 또는 115200
4. **제어 칩셋** 확인 — 지원: CH9329, CH32V208
5. **CTS 모니터링** 확인 — 앱이 HID 이벤트용 Clear-To-Send 라인을 모니터링함

### 마우스 관련 문제

- **macOS 상대 모드:** 접근성 권한 필요. **System Settings > Privacy & Security > Accessibility** 확인
- **절대 모드:** 종횡비가 타겟 디스플레이와 일치하는지 확인
- **마우스 지연:** 더 높은 성능 프리셋 시도 또는 보드레이트 증가
- **시리얼 포트 충돌(Linux):** 포트를 사용하는 다른 앱 종료: `sudo lsof /dev/ttyUSB0`

---

## 오디오가 재생되지 않음

### 단계

1. 오디오 아이콘 > Enable Audio로 **오디오 활성화**
2. **마이크 권한** 확인 — System Settings > Privacy & Security > Microphone(macOS)
3. **올바른 입력 장치** 선택 — "OpenterfaceA" 또는 캡처 장치 이름
4. **올바른 출력 장치** 선택 — 스피커 또는 헤드폰
5. **타겟의 HDMI 오디오 출력** 확인 — 타겟이 HDMI로 오디오를 내도록 설정되어 있나요?

---

## USB 시리얼 드라이버 문제

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

필요 시 [WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos)에서 WCH CH34x 드라이버 설치. **System Settings > General > Login Items & Extensions > Driver Extensions**에서 활성화.

### Windows

시리얼 칩이 장치 관리자에 나타나지 않으면 CH340/CH341 드라이버 설치. 설치 프로그램에 일반적으로 포함됨; 포터블 빌드는 별도 다운로드.

### Linux

CH340 드라이버(`ch341` 모듈)는 커널에 내장됨:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## 펌웨어 업데이트 실패

### USB 안정성

- 플래싱 중 케이블을 뽑지 마세요
- 호스트를 절전 모드로 두지 마세요
- USB 허브 대신 직접 USB 포트 사용

### 복구

1. 전원 사이클: USB 분리, 10초 대기, 재연결
2. ISP 모드 재진입(일부 장치: 전원 켤 때 버튼 길게 누름)
3. Serial Reset Tool로 부트로더 재플래시
4. 벽돌화된 경우 지원팀에 문의

---

## 성능 문제

### CPU 사용량 높음

1. **하드웨어 가속 활성화** — Preferences > Video > Hardware Acceleration(VAAPI, V4L2-M2M)
2. **해상도 낮추기** — 720p는 1080p보다 CPU 사용량이 훨씬 적음
3. **프레임 레이트 낮추기** — 15fps면 디코드 부하가 절반
4. **백엔드 전환** — HW 가속 FFmpeg가 일반적으로 GStreamer보다 CPU 사용량이 적음

### 프레임 드롭

상태 표시줄의 FPS 카운터 확인. 실제 FPS가 목표보다 낮으면 파이프라인에 병목이 있습니다. 부드러운 재생을 우선하려면 FFmpeg 프레임 프로세서에서 프레임 드롭을 활성화하세요.

---

## 로깅 및 진단

### 로깅 활성화

- **macOS:** Settings > Logging Setting > Log to file(`~/Documents/openterface.log`)
- **Qt:** Preferences > Log > 로그 수준 및 파일 경로 설정

### 시리얼 콘솔(Qt)

**Device > Serial Port Debug**로 열기 — Keyboard, Mouse, HID, Chip Info 필터가 있는 실시간 시리얼 프로토콜 메시지 표시.

---

## 플랫폼별 문제

### Linux: Qt 플랫폼 플러그인

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: Wayland 비디오 문제

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: CH340 드라이버

드라이버 설치 실패 시: 드라이버 서명 강제를 일시적으로 비활성화한 후 장치 관리자에서 수동 설치.

### Raspberry Pi: 비디오 끊김

Pi 3 또는 저메모리 Pi 4에서:
1. 해상도를 720p로 낮추기
2. FFmpeg 백엔드 사용(GStreamer 아님)
3. 시리얼 안정성을 위해 9600 보드레이트 사용

---

## Android 관련 문제

### 장치가 감지되지 않음

**증상:** 비디오 미리보기에 플레이스홀더가 표시되고 타겟 화면이 아님.

1. **USB OTG 연결** 확인 — 케이블을 뽑았다가 다시 연결
2. **OTG 지원** 확인 — USB 플래시 드라이브를 연결해 OTG 지원 여부 확인
3. **KVM 장치** 확인 — 전원이 켜져 있나요? 표시등이 켜져 있나요?
4. **다른 케이블** 시도 — 일부 OTG 어댑터는 불량
5. **앱 재시작** — 완전히 종료(최근 앱에서 스와이프) 후 다시 열기
6. **USB 권한** 확인 — 시스템 대화상자에서 USB 액세스를 요청했다면 **Allow** 탭

### 비디오 없음

**증상:** 장치는 감지되지만 화면이 검거나 멈춤.

1. **HDMI 케이블** 확인 — 타겟 PC의 HDMI가 KVM HDMI 입력에 단단히 연결되었나요?
2. **타겟 출력** 확인 — 타겟 PC가 실제로 무언가 표시하고 있나요?
3. **낮은 해상도** 시도 — 설정 열기 → **Video Format** → 낮은 해상도 선택
4. **카메라 권한** 확인 — Android 설정 → 앱 → Openterface → 권한 → Camera 허용
5. **앱 재시작**

### 마우스가 응답하지 않음

**증상:** 비디오는 되지만 화면 탭이 타겟에 반응하지 않음.

1. **HID용 USB 연결** 확인 — 설정 → **Device**를 열고 장치가 활성인지 확인
2. **다른 마우스 모드** 시도 — Absolute와 Relative 전환
3. **연결 해제 후 재연결** — 빨간 **Disconnect Device** 버튼 사용 후 재연결
4. **타겟 PC** 확인 — USB 키보드/마우스를 인식하나요? 타겟 쪽에서 USB 케이블을 뽑았다 꽂기

### 키보드가 키를 보내지 않음

**증상:** 마우스는 되지만 입력이 안 됨.

1. **키보드가 열려 있는지** 확인 — 키보드 버튼 탭
2. **시리얼 연결** 확인 — 설정 → **Device**를 열고 활성인지 확인
3. **보드레이트** 확인 — 설정 → **Baudrate**에서 장치와 일치(기본 115200)
4. **키보드 레이아웃** 확인 — 올바른 레이아웃(US, JP, DE) 선택

### 앱 충돌 또는 멈춤

1. 앱 **종료 후 재시작**
2. **비디오 해상도 및 프레임 레이트 낮추기** — 높은 설정은 메모리가 적은 장치에 부담
3. **사용 가능한 저장 공간** 확인 — 저장 공간 부족은 불안정 유발
4. **앱 업데이트** — Google Play 또는 GitHub Releases에서 새 버전 확인

### 스크린샷 또는 녹화가 저장되지 않음

1. **Storage 권한** 확인 — Android 설정 → 앱 → Openterface → 권한 → Storage
2. 장치의 **사용 가능한 저장 공간** 확인
3. 녹화와 스크린샷은 장치의 기본 미디어 폴더에 저장됨

### 로그 수집(Android)

일반 고장 해결로 해결되지 않으면 유지보수자와 공유할 로그 수집:

```bash
adb logcat | grep -i openterface > openterface.log
```

GitHub issue를 열 때 이 파일을 포함하세요.

---

## iPadOS 관련 문제

> **참고:** iPadOS는 **KVM-Go**에서만 지원됩니다. Mini-KVM 또는 uConsole KVM Extension을 사용 중이면 iPadOS 앱이 동작하지 않습니다.

### Bluetooth가 연결되지 않음

**증상:** BLE 버튼이 녹색이 아니거나 스캔 목록에 장치가 없음.

1. **iPad에서 Bluetooth 활성화** 확인 — 설정 > Bluetooth
2. **KVM-Go 전원** 확인 — dongle이 타겟 PC의 USB 포트에 연결되어 있어야 함
3. **iPad를 KVM-Go dongle에 가깝게** — BLE 범위는 보통 최대 10m
4. **iPad Bluetooth 권한** 확인 — 설정 > Privacy & Security > Bluetooth > Openterface 허용
5. BLE 화면에서 **Refresh** 탭하여 스캔 재시작
6. **Openterface 앱 Bluetooth 권한** 확인 — 첫 실행 시 거부했다면 설정에서 다시 활성화

### 비디오 미리보기 없음

**증상:** BLE는 연결되었지만 화면이 검거나 가이드 이미지 표시.

1. **HDMI 연결** 확인 — 타겟 PC의 HDMI 출력이 KVM-Go HDMI 입력에 단단히 연결되었나요?
2. **타겟 출력** 확인 — 타겟 PC가 실제로 무언가 표시하고 있나요?
3. **낮은 해상도** 시도 — Video 버튼을 탭하고 낮은 해상도(720p 또는 480p) 선택
4. **카메라 권한** 확인 — 설정 > Privacy & Security > Camera > Openterface 허용
5. **앱 재시작** — 최근 앱에서 위로 스와이프해 닫고 다시 열기

### 마우스/터치가 응답하지 않음

**증상:** 비디오는 되지만 화면 탭이 타겟에 반응하지 않음.

1. **BLE 연결** 확인 — BLE 버튼이 녹색이고 RSSI 값 표시
2. **다른 마우스 모드** 시도 — Pan Mode와 iPencil Mode 전환
3. **연결 해제 후 재연결** — BLE 화면을 열고 Disconnect 탭 후 Connect
4. **타겟 PC** 확인 — KVM-Go를 USB 키보드/마우스로 인식하나요?

### 키보드가 키를 보내지 않음

**증상:** 마우스는 되지만 입력이 안 됨.

1. **플로팅 키보드가 열려 있는지** 확인 — Keyboard 버튼 탭
2. **BLE 연결** 확인 — 입력은 USB가 아닌 Bluetooth 경유
3. **키보드 모드** 확인 — Normal과 Game 모드 전환
4. **외장 키보드:** 물리 iPad 키보드를 사용 중이면 iPadOS가 키 이벤트를 앱으로 라우팅하는지 확인

### 오디오가 재생되지 않음

**증상:** 비디오는 되지만 iPad로 타겟 PC 소리를 들을 수 없음.

1. **Audio 버튼** 확인 — 녹색 스피커 아이콘 표시
2. **마이크 권한** 확인 — 설정 > Privacy & Security > Microphone > Openterface 허용
3. **iPad 볼륨** 확인 — 음소거 또는 최소 볼륨이 아님
4. **타겟 오디오 출력** 확인 — 타겟 PC가 HDMI로 오디오를 내도록 설정되어 있나요?

### 앱 충돌 또는 멈춤

1. 앱 **종료 후 재시작**
2. **비디오 해상도 낮추기** — 높은 해상도는 구형 iPad에 부담
3. **사용 가능한 저장 공간** 확인 — 저장 공간 부족은 불안정 유발
4. **앱 업데이트** — App Store에서 새 버전 확인

### 스크린샷 또는 녹화가 저장되지 않음

1. **Photo Library 권한** 확인 — 설정 > Privacy & Security > Photos > Openterface 허용
2. **iPad 사용 가능한 저장 공간** 확인
3. **파일 앱으로 찾아보기** — Photo Library 권한 없어도 녹화는 `Documents/Recordings/`에 저장됨

---

## 공장 초기화

1. Settings(macOS) 또는 Device 메뉴(Qt)에서 Serial Reset Tool 사용
2. HID 칩이 공장 기본값으로 재설정됨
3. 재설정 후 장치 재연결

## 연결 복구

애플리케이션이 다음에 대한 자동 복구를 처리합니다:
- 장치 연결 해제/재연결(USB 핫플러그, iPadOS BLE 재연결)
- 통신 타임아웃
- 칩셋 폴백(MS2109 → MS2109S → MS2130S)
- 시리얼 포트 복구
- iPadOS BLE 자동 재연결(최대 3회, 2초 지연)

## 결함 보고서 제출

1. 로그 파일 로깅 활성화
2. 문제 재현
3. [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) 또는 info@techxartisan.com으로 이메일 제출
