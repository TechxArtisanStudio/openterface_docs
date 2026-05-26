# KVM-Go 펌웨어 업그레이드

## 개요

KVM-Go는 키보드 및 마우스 에뮬레이션에 WCH의 CH32V208 칩을 사용합니다. 현재 펌웨어 플래싱에는 WCH 공식 프로그래밍 도구가 필요하며, 이 도구는 Windows에서만 사용할 수 있습니다. 따라서 현재는 Windows 시스템에서 펌웨어 업데이트를 수행해야 합니다.

장치에 직접 통합될 크로스 플랫폼 자체 개발 펌웨어 업그레이드 솔루션을 적극적으로 개발 중입니다. 준비되면 서드파티 도구 없이 모든 주요 운영 체제에서 펌웨어 업데이트를 지원합니다.

> **참고:** 이 수동 펌웨어 업그레이드 절차는 초기 개발 유닛을 위한 임시 솔루션입니다. 공식 양산 제품의 경우 펌웨어 업데이트가 소프트웨어에 원활하게 통합되어 서드파티 도구나 수동 절차 없이 애플리케이션을 통해 직접 펌웨어를 업데이트할 수 있습니다.

## 사전 요건

진행하기 전에 다음을 준비하세요:

- Windows 컴퓨터
- WCH ISP Tool 설치
- 플래싱용 펌웨어 파일(`.hex` 형식)

### 펌웨어 다운로드

최신 KVM-Go 펌웨어 파일 다운로드:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — KVM-Go 키보드 및 마우스 에뮬레이션용 최신 펌웨어(CH32V208 칩)

업그레이드 프로세스를 진행하기 전에 펌웨어 파일을 Windows 컴퓨터의 쉽게 접근할 수 있는 위치에 저장하세요.

### WCH ISP Tool 다운로드

[WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") 다운로드 및 설치(Windows 전용).

인내와 지원에 감사드립니다!

## 단계별 안내

### 1단계: Windows에서 도구 다운로드 및 열기

Windows 컴퓨터에서 WCH ISP Tool을 실행합니다.

![WCH ISP Tool 인터페이스](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### 2단계: KVM-Go 플래싱 준비

KVM-Go에 펌웨어를 플래싱하려면:

1. 장치 전원을 끕니다
2. 버튼을 누른 상태에서 USB Type-C 포트에 연결합니다

**팁:** 어느 포트든 플래싱할 수 있지만, «target» 포트가 플래싱 중 더 안정적입니다.

![KVM-Go 배선 및 연결 설정](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### 3단계: 펌웨어 파일 선택

연결이 성공하면 도구가 자동으로 칩 모델(CH32V20X 시리즈)을 감지합니다.

1. «...» 버튼을 클릭하여 플래싱할 펌웨어 파일 찾아보기 및 선택
2. `.hex` 펌웨어 파일 선택
3. **중요:** 펌웨어 파일 옆의 체크박스를 선택해야 합니다

![WCH ISP Tool에서 감지된 칩 모델](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![펌웨어 파일 찾아보기 및 선택](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![체크박스가 선택된 펌웨어 파일](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### 4단계: 현재 펌웨어 보호 해제

새 펌웨어를 플래싱하기 전에 현재 펌웨어의 쓰기 보호를 제거해야 합니다:

1. 도구에서 «Deprotect» 옵션 클릭
2. KVM-Go의 물리적 버튼을 잠시 눌러 플래싱 모드 진입
3. 보호 해제 프로세스 완료 대기

![도구의 Deprotect 옵션](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![KVM-Go 버튼을 눌러 플래싱 모드 진입](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### 5단계: 펌웨어 다운로드 및 플래싱

펌웨어 보호 해제 및 선택 완료 후:

1. 플래싱 도구에서 «Download» 버튼 클릭
2. 플래싱 프로세스 완료 대기
3. 도구가 펌웨어 플래싱 성공을 표시합니다

![펌웨어 다운로드 및 플래싱 프로세스](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## 추가 자료

- [Openterface KVM-Go 리뷰 가이드](review-guide.md) — 엔지니어링 프로토타입 유닛의 중요 참고 사항 및 알려진 문제
