const config = {
    profile: {
        name: '송승효',
        githubAccountId: 'Songseunghyo1',
        profileImg: 'https://avatars.githubusercontent.com/u/15643765?v=4',
        email: 'tmdgy15@gmail.com',
        phone: '',
        description: '실시간 국내/해외 렌터카 가격 비교 플랫폼인 제주패스를 서비스하는 캐플릭스에서 백엔드 개발자로 근무하고 있습니다. 주요 업무로는 제주패스와 B2B 서비스를 위한 통합 API 그리고 정산 업무를 위한 정산 사이트 등 회사에서 제공하는 서비스의 전반적인 개발 및 유지 보수 업무를 맡고 있습니다.',
        github: 'https://github.com/Songseunghyo1',
    },
    skills: [
        "JAVA", 
        "Spring Framework/Spring Boot", 
        "Git",
        "JPA",
        "Oracle Database/MySQL", 
        "MariaDb"
    ],
    careers: [
        {
            name: "Kaflix",
            duration: "2024.02 ~",
            description: "제주패스와 아울러 B2B서비스를 위한 통합 API, 정산 담당자가 사용하는 정산 사이트 등 캐플릭스에서 제공하는 전반적인 서비스 개발 및 유지보수를 담당하고 있습니다. "
        },
        {
            name: "Kaflix",
            duration: "2022.05 ~ 2023.10",
            description: "제주패스와 아울러 제주패스를 서비스하기 위한 배치, 관리자 사이트 개발 및 유지보수 업무를 담당하였습니다."
        },
        {
            name: "보고정보시스템",
            duration: "2020.09 ~ 2022.04",
            description: "제주은행 차세대 프로젝트와 신한은행 The Next 프로젝트에 참여한 경험이 있습니다."
        },
        {
            name: "(주)ITeyes",
            duration: "2019.03 ~ 2020.08",
            description: "농생명클라우드 플랫폼 구축 프로젝트와 Dr.Answer 프로젝트를 진행하며 데이터 수집기, 데이터 수집현황 조회 화면/서비스를 개발하였습니다."
        }
    ],
    educations: [
        {
            name: "제주대학교",
            duration: "2013.03 ~ 2019.01",
            description: "시스템 소프트웨어 연구실에 학생연구원으로 활동하며 산학연 연계 프로젝트를 진행한 경험이 있습니다. 2016~2018 동안 제주대학교와 카카오가 주관하는 Kakao 트랙 교육을 받았습니다."
        },
        {
            name: "영주고등학교",
            duration: "2010.03 ~ 2013.01",
            description: "특성화 고등학교인 영주고등학교에서 컴퓨터공업과를 졸업하였습니다."
        }
    ],
    projects: [ 
        {
            name: "제주패스",
            duration: "2024.02 ~ ",
            description: `제주패스, B2B 서비스를 위한 통합 API 등 캐플릭스에서 서비스중인 전반적인 서비스 개발 및 유지보수업무를 담당하고 있습니다.`,
            contribution: `렌터카 
                - 로그인 속도 개선
                - 업체전용 서비스/업체전용 부가서비스 설계 및 API 개발
                - 국내렌터카 검색속도 개선
                - 토스 퀵 계좌 이체 결제수단 추가 개발
                - 이용권(쿠폰/적립포인트/렌터카 이용권) 만료 알림톡 전송 배치 개발
                - 음성인식 로깅 API 개발
                - 해외렌터카 지점 추가 및 변경시 알림톡 추가 및 수정

                카페패스 
                - 사용자 추이 데이터 추출 및 운영팀 전달
                - 카페 이미지 노출 건수 개선
                - QR 스캔 기능 개발
                - QR 코드 생성 API 개발
                - 이용일 노출 오류 개선
                - 리뷰 유도 알림톡 발송 기능 개발 및 개선
                - 리뷰 중복노출 오류 개선
                - 이용권 중복등록 방지 API 개발

                화이트라벨 
                - 인터파크/트리플 화이트라벨 개발
                - 진에어 화이트라벨 개발
                - 디지로카(롯데카드) 화이트라벨 개발
                - KB 화이트라벨 유지보수
                - 로그인 쿠폰 자동발행 API 개발
                - 제 3자 정보제공 동의 철회 API 개발(KB Pay 화이트라벨 고객 제주패스 탈퇴 기능)
                - 비즈마켓(인터파크 복지몰)
                - PG 결제창 로딩되지 않는 이슈 개선

                정산 사이트 
                - 야놀자 정산데이터 추가
                - 업체 전용 부가서비스 예약건 추가
                - 관리자 사이트
                - 정산 보정 API 개발
                - 해외렌터카 예약현황 엑셀 다운시 데이터 누락 개선
                - 카페패스 카페 QR 관리 페이지 개발
                - 카페 QR코드 조회, 다운로드 API 개발

                통합 API 
                - API 유지보수
                - 인터파크 사용 API 응답 전문 개선
                - 트립닷컴 응답전문 다국어 처리

                제주패스 렌터카(구 제주패스렌터카)
                - 마이스 판매 기능 개발
                - 렌터카 예약 혜택(카페패스 무료 이용권) 오류 개선

                CS 처리
                - 고객센터/운영팀에서 조치하지 못하는 개발적 이슈 대응
                - DB 변경, 서버에러, 예약오류 확인, 결제오류 확인 등
            `,
            skills: ["Spring Boot", "Spring Framework", "Spring Batch", "Oracle Database"],
            images: []
        },
        {
            name: "제주패스",
            duration: "2022.05 ~ 2023.10",
            description: `국내/해외 렌터카 실시간 가격비교 플랫폼 제주패스 개발 및 유지보수 업무를 담당하였습니다.`,
            contribution: `- 제주패스 개발 및 유지보수
                - 제주패스 배치 개발 및 유지보수
                - 제주패스 관리자 사이트 개발 및 유지보수
                - 모자이카 앱 서비스 유지보수
                - 제주패스 정산 사이트 유지보수
            `,
            skills: ["Spring Boot", "Spring Framework", "Spring Batch", "Oracle Database"],
            images: []
        },
        {
            name: "신한은행 The Next 프로젝트",
            duration: "2021.11 ~ 2022.04",
            description: `Tmax Soft의 C언어 기반 프레임워크인 ProFrame을 사용하여 진행한 프로젝트입니다. 대행 파트에서 세무 업무를 담당하였습니다.`,
            contribution: `비대면 서비스 중 세무 업무를 담당하였습니다. 

                - 디지털 제세계산 및 과세정보 인계 서비스 개발
                - 디지털 전자세금계산서 가입관리 서비스 개발
                - 디지털 소득 및 과세내역인계 서비스 개발
                - 디지털 세무원장 갱신 업무팀연동 서비스 개발
                - 디지털 소득인수도 세무원장 INSERT 서비스 개발
                - 디지털 부가세 및 지출증빙 정보인계 서비스 개발
                - 원천징수영수증 출력처리 서비스 개발
            `,
            skills: ["ProFrame(C Language)", "Oracle Database"],
            images: []
        },
        {
            name: "제주은행 차세대 프로젝트",
            duration: "2020.09 ~ 2021.10",
            description: `LG CNS에서 개발한 Java 기반 Framework인 MDD(Model Driven Development)사용하여 코볼로 개발되어있던 ASIS 프로그램을 Java로 전환하는 프로젝트입니다.`,
            contribution: `카드 승인과 관련하여 은행 직원과 고객이 사용하는 화면 및 서비스를 개발하였습니다.

                - 승인거래내역 조회 화면/서비스, 승인거래내역 Mail/Fax 전송 서비스 개발, 승인 SMS전송 서비스 개발
                - 승인매출내역 Fax 전송 서비스 개발
                - 승인전문조회 화면/서비스개발
                - 승인시간제한 조회/등록 화면/서비스, 승인제한업종 조회/등록 화면/서비스 개발
                - 클린카드코드 조회/등록 화면/서비스 개발
            `,
            skills: ["MDD(Model Driven Development/Java/Speing Framework)", "Oracle Database"],
            images: []
        }
    ]
}

export default config;