# DEL Frontend

음식 배달용 웹서비스 앱의 프론트엔드 애플리케이션입니다.

[데모 보기](https://food-del-6b5bf.web.app)

## 목차

- [소개](#소개)
- [기능](#기능)
- [기술 스택](#기술-스택)
- [설치 및 실행 방법](#설치-및-실행-방법)
- [프로젝트 구조](#프로젝트-구조)
- [기여 방법](#기여-방법)
- [라이선스](#라이선스)
- [문의](#문의)

## 소개

이 프로젝트는 음식 배달 서비스를 위한 프론트엔드 애플리케이션으로, 사용자에게 직관적인 UI/UX를 제공하여 손쉽게 음식을 주문할 수 있도록 돕습니다.  
React와 Vite를 기반으로 하며, Firebase를 통해 백엔드와의 연동이 이루어집니다.

## 기능

- **사용자 인증**: Firebase 인증을 활용한 로그인 및 회원가입 기능
- **음식 메뉴**: 다양한 음식 메뉴를 확인하고 선택할 수 있음
- **주소 검색**: react-daum-postcode를 이용한 간편한 주소 검색 기능
- **주문 기능**: 선택한 음식을 장바구니에 담고 주문 진행 가능
- **반응형 디자인**: TailwindCSS를 사용하여 다양한 디바이스에서 최적화된 UI 제공

## 기술 스택

- **프레임워크**: React
- **빌드 도구**: Vite
- **스타일링**: TailwindCSS
- **라우팅**: React Router
- **백엔드 연동**: Firebase
- **기타**: react-icons, react-daum-postcode

## 설치 및 실행 방법

### 1. 레포지토리 클론

```bash
git clone https://github.com/aidenjangkkj/del-frontend.git
cd del-frontend
