># Learnify : 학습 관리 플랫폼

1조 최승인, 민인섭, 이형준, 조해솔

2025.01.20 ~ 2025.02.21

---

>## Live Demo

배포 링크

[https://www.choi5801.xyz/login](https://www.choi5801.xyz/login)

>## GitHub Repo

[FrontEnd](https://github.com/Choi-Seungin/Learnify-Frontend)

[BackEnd](https://github.com/Choi-Seungin/Learnify-Backend)

---

<aside>
💬

**LMS 프로젝트에 대한 간단한 소개**

온라인 학습 환경을 제공하여 강사와 수강생이 효율적으로 강의를 등록하고 수강할 수 있도록 지원

이를 통해 사용자들이 편리하게 강의를 관리하고, 학습 콘텐츠를 제공하며, 강의와 관련된 다양한 기능(퀴즈, 수강 신청, 강의 영상 시청 등)을 통합하여 학습 경험을 개선

</aside>

---

>## 개발 일정

| **01/20~01/21** | 주제 선정 및 유스케이스 다이어그램 작성 |
| --- | --- |
| **01/22~01/23** | 프로토타입 디자인 및 데이터베이스 설계 |
| **01/24~02/20** | 기능 구현 및 테스트 |
| **02/20~02/21** | 배포 |
| **02/21** | 발표 |

---

>## 개발 도구

- Figma
  
- Visual Studio Code
  
- Spring Tool Suite 4
 

 
    

---

>## 기술 스택

| **Category**         | **Technologies**                          |
|----------------------|------------------------------------------|
| **Programming Languages** | JavaScript, Java                    |
| **Frameworks**       | Spring Boot                             |
| **Databases**        | Oracle                                  |
| **Version Control**  | GitHub                                  |
| **Cloud Services**   | AWS, Vercel                             |
| **APIs**            | 카카오 로그인 API, JWT, YouTube API    |
| **Libraries**       | React, WebSocket, Lombok                |


---

>## 주요 기능

- 로그인 및 회원가입(담당 : 최승인)
    - 카카오 간편 로그인
    - 회원가입
    - 아이디 비밀번호 찾기
    - 이메일 인증
- 메인페이지
    - 헤더, 푸터(담당 : 조해솔, 최승인)  
    - 최신 강의 조회(담당 : 조해솔)
    - 사이드바에서 미니 대시보드(담당 : 조해솔)
    - 검색 기능(담당 : 조해솔)
    - 사이드바 퀴즈 진행률(담당 : 최승인)
- 강의 목록
    - 카테고리별 조회(담당 : 조해솔)
    - 강사 - 강의 등록, 수정, 삭제(담당 : 이형준)
- 강의 상세 페이지(담당 : 이형준, 조해솔)
    - 강사
      - 강의 수정 및 삭제(담당 : 조해솔)
      - 챕터 등록, 수정, 삭제(담당 : 이형준)
      - 퀴즈 등록, 수정, 삭제(담당 : 최승인)
      - 강의 영상 등록, 수정, 삭제(담당 : 이형준)
    - 수강생
      - 수강 신청 및 취소(담당 : 이형준)
      - 챕터 별 퀴즈 풀기(담당 : 최승인)
      - 강의 영상 시청(담당 : 이형준)
    - 강사 소개 페이지(담당 : 최승인)
    - 하위 메뉴
        - 공지사항(담당 : 조해솔)
        - Q&A(담당 : 조해솔)
        - 수강평(담당 : 조해솔)
        - 실시간 채팅(담당 : 민인섭)

- 대시보드(담당 : 조해솔)
    - 강사
      - 등록된 강의 조회
    - 수강생
      - 수강 중인 강의 조회
      - 퀴즈 진행률(담당 : 최승인)
- 마이페이지(담당 : 민인섭)
    - 정보 수정 및 탈퇴

---

>## 구현 화면

### - 로그인
![image](https://github.com/user-attachments/assets/213f5af6-06db-4d3a-ac31-ec4bb1039fd9) 
카카오 로그인 api 활용, 아이디, 비밀번호 찾기 

---
### - 회원가입
![5c39bc1d-f189-49bc-9a32-d131217f53bc](https://github.com/user-attachments/assets/856f7f5c-10d5-401d-a5f4-6c6232596799)
아이디 및 닉네임 중복 확인/수강생 또는 강사 선택하여 회원가입/이메일 인증 기능

---
### - 카카오 로그인 시 기존 회원이 아니면 추가 정보 입력

![image 1](https://github.com/user-attachments/assets/1d8c48ae-95ab-4e6b-8520-1974c6f33c11)
이메일은 카카오 아이디에서 가져온 이메일 사용, 기존에 동일한 이메일이 있을 경우 로그인 불가능

---

### - 아이디 찾기

![image](https://github.com/user-attachments/assets/b1926859-00de-4fb2-a322-d31ff74ae1a3)
이메일로 인증번호 발송을 요청하고, 이메일 인증이 완료되면 아이디 조회, 비밀번호 찾기 버튼을 누르면 비밀번호 찾기 화면으로 이동

---

### - 비밀번호 찾기

![image](https://github.com/user-attachments/assets/92a5930f-970c-475d-849a-6f62728f5ec4)
![image](https://github.com/user-attachments/assets/b6f180af-7acf-4dc6-b50c-71511fa41035)
이메일 인증을 완료하면 해당 이메일로 가입된 계정의 비밀번호를 변경 할 수 있음

---
### - 메인페이지(강사로 로그인 했을 경우)

![screencapture-localhost-3000-2025-02-20-14_34_46](https://github.com/user-attachments/assets/8a50f5f8-bea8-455a-a0f7-c39f52740e98)

최신 강의 조회, 본인이 등록한 강의 조회(최근 강의 10개)

---
### - 헤더 검색 기능
    
![screencapture-localhost-3000-classList-2025-02-20-14_06_06](https://github.com/user-attachments/assets/ad82f50f-0a85-46f9-a908-be220a9e67e7)

특정 단어를 입력하면 그 단어가 포함된 강의 리스트 조회

---
### - 강의 목록 조회

![screencapture-localhost-3000-classList-2025-02-20-14_05_24](https://github.com/user-attachments/assets/54382e17-1131-476a-8096-10e159d1747d)

카테고리 별 조회

---
### - 강의 등록

![screencapture-localhost-3000-classList-2025-02-20-14_21_59](https://github.com/user-attachments/assets/c3f6163d-2aa3-42cd-8024-0914a09ed2bd)


강사 입장에서만 보이는 강의 등록하기 버튼을 누르면 모달이 뜸, 강의 정보를 입력한 후 등록 완료

---
### - 강의 상세 페이지(강사로 로그인 했을 경우)

![screencapture-localhost-3000-class-134-2025-02-20-14_20_56](https://github.com/user-attachments/assets/1f51748a-997e-4a6c-879e-5cb83f8a9b2a)

강사로 로그인 했을 경우 강의 소개부분 강의 수정, 강의 삭제 버튼이 보임, 강의 하위 메뉴 중 챕터 및 영상 목록이 기본값으로 조회

---
### - 챕터 등록

![image 2](https://github.com/user-attachments/assets/9ee14787-2fca-4dca-a4dc-6d1018479f65)

---
### - 동영상 등록

![screencapture-localhost-3000-class-134-2025-02-20-14_24_16](https://github.com/user-attachments/assets/d2ba0d15-b706-4f70-b35d-b6e89beee221)

---
### - 강의 상세 페이지 → 강사 소개 페이지(강사로 로그인 했을 경우)

![screencapture-localhost-3000-teacherProfile-19-2025-02-20-14_23_41](https://github.com/user-attachments/assets/247262c5-ee06-43d8-995c-748709ee5112)

toast ui를 활용한 강사 소개 페이지

---
### - 공지사항 페이지

![screencapture-localhost-3000-class-134-2025-02-20-14_25_55](https://github.com/user-attachments/assets/f3debbd0-7679-4cec-bbff-67371d4aa6b8)

해당 강의를 등록한 강사일 경우 공지사항 등록 및 삭제 가능

---
### - Q&A게시판

![screencapture-localhost-3000-class-134-2025-02-20-14_26_30](https://github.com/user-attachments/assets/f305f374-f90d-4af0-8da0-df6a6be45275)

해당 강의를 등록한 강사이거나, 해당 강의를 수강 중인 학생일 경우 질문 및 답변을 할 수 있음

![screencapture-localhost-3000-class-134-2025-02-20-14_26_48](https://github.com/user-attachments/assets/ce620064-9898-4a40-b1f4-67c98a6e3405)

챕터별로 궁금한 내용을 질문할 수 있음

### - 수강평 페이지

![screencapture-localhost-3000-class-134-2025-02-20-14_27_09](https://github.com/user-attachments/assets/1013014d-3973-44c9-bbb3-6e8721d55282)

별점 및 해당 강의를 수강한 학생이 남긴 수강평 조회

---
### - 강의별 강사-학생 간 채팅 기능

![screencapture-localhost-3000-class-134-2025-02-20-14_27_37](https://github.com/user-attachments/assets/79f06547-695d-497c-a604-3a04b1bc3546)

웹소켓을 활용한 실시간 채팅 기능

---
### - 대시보드(강사로 로그인 했을 경우)

![image](https://github.com/user-attachments/assets/7ab84eb3-2670-4ab7-a36e-3e41204953e1)

본인이 등록한 강의 목록 조회, 챕터 개수, 영상 개수, 해당 강의의 수강생 수, 평점 조회

---
### - 마이페이지

![screencapture-localhost-3000-mypage-2025-02-20-14_35_02](https://github.com/user-attachments/assets/bcf40bb8-8812-4553-9787-bfdca02ee7e0)

프로필 이미지를 누르면 새로운 프로필 사진을 업로드할 수 있음

![screencapture-localhost-3000-mypage-2025-02-20-14_35_20](https://github.com/user-attachments/assets/da770d3c-1818-45b1-ba3a-0c2e5add29ab)

이름, 닉네임, 이메일, 전화번호 수정 기능 및 회원 탈퇴, 비밀번호 변경 기능

---
### - 강의 영상(수강생으로 로그인 했을 경우)

![screencapture-localhost-3000-video-221-2025-02-20-14_38_22](https://github.com/user-attachments/assets/a53fed4f-1355-4a43-a853-1ccbbc34940c)

강의 제목, 챕터 제목, 영상 제목 상단에 조회, 강의 페이지로 돌아가는 버튼, 이전 영상 및 다음 영상으로 이동하는 버튼

---
### - 수강평 작성 (수강생으로 로그인 했을 경우)

![screencapture-localhost-3000-class-134-2025-02-20-14_42_33](https://github.com/user-attachments/assets/334aceb6-4f8e-40f7-9fc8-e31fb045daca)

별점과 수강평 내용 작성, 수강평을 이미 작성한 수강생은 작성 불가

![screencapture-localhost-3000-class-134-2025-02-20-14_43_37](https://github.com/user-attachments/assets/38fb235e-a0b7-447d-b9d7-ded4f80e0726)

수강평 수정 및 삭제 

---
### - 채팅 기능(수강생으로 로그인 했을 경우)

![screencapture-localhost-3000-class-134-2025-02-20-14_44_10](https://github.com/user-attachments/assets/e2b552a5-8de2-4916-95ce-e7c416340543)

수강중인 상태이면 상태 표시

---

### - 강사 소개(수강생으로 로그인 했을 경우)

![screencapture-localhost-3000-teacherProfile-19-2025-02-20-14_46_55](https://github.com/user-attachments/assets/dcc1d9dc-bdbc-420e-b4c1-67a329e23ead)

---

### - 해당 강의가 수강 상태가 아닐 때, Q&A 조회 불가

![screencapture-localhost-3000-class-134-2025-02-20-14_46_38](https://github.com/user-attachments/assets/e8d900cf-6eed-4149-b8b5-3d4a843d5abc)

---
### - 비밀번호 변경(마이페이지에서)

![screencapture-localhost-3000-checkUser-2025-02-20-14_35_36](https://github.com/user-attachments/assets/04d5a561-f478-49cb-bc4f-ce487e58927d)

아이디와 비밀번호 확인

![screencapture-localhost-3000-updatePassword-2025-02-20-14_35_57](https://github.com/user-attachments/assets/c3857ace-ed7f-422e-b006-fe7088d3b26f)

---

### - 퀴즈 등록(강사)

![screencapture-localhost-3000-class-134-2025-02-20-14_52_59_(1)](https://github.com/user-attachments/assets/82bd18fb-ac60-4e20-ace6-47e2849d9fc7)

챕터별로 퀴즈 등록 가능, OX퀴즈 형식, 질문과 정답 이유 설명 등록

---
### - 퀴즈 풀기(수강생)

![screencapture-localhost-3000-quiz-134-55-2025-02-20-14_54_52](https://github.com/user-attachments/assets/166d5dfb-fdde-45a5-91f0-5189a74540a5)

![screencapture-localhost-3000-quiz-134-55-2025-02-20-14_55_13](https://github.com/user-attachments/assets/df37c3e3-1af1-4b47-851d-dd9282536f53)
정답을 누를 경우 정답과 설명이 나옴, 진행률이 저장되어서 퀴즈 진행 중 페이지를 이탈하여도 다시 퀴즈를 풀 경우 마지막으로 진행한 문제부터 시작

---
### - 퀴즈 풀기 완료할 경우

![screencapture-localhost-3000-quiz-134-55-2025-02-20-14_56_13](https://github.com/user-attachments/assets/e0b44b3c-e78b-4ae8-9372-655fe5d65a42)

퀴즈 정답률, 강의로 돌아가는 버튼이 나옴

---
### - 퀴즈 풀이 완료 후 재풀이 불가

![screencapture-localhost-3000-class-134-2025-02-20-14_56_23](https://github.com/user-attachments/assets/998ca1ec-a9e4-4963-87b8-89145113703f)

---
### - 대시보드(수강생)

![image](https://github.com/user-attachments/assets/e1ad4a7a-8693-4081-a490-36bdbf64048e)

수강중인 강의 목록 조회 및 해당 강의 퀴즈 진행률 조회

---
### - 메인페이지 사이드바

![screencapture-localhost-3000-2025-02-20-14_56_56](https://github.com/user-attachments/assets/e3174b1c-7209-4ce1-b2cc-41ae753776ed)

수강 중인 강의 및 퀴즈 진행률 조회, 본인이 남긴 질문 조회
