<template>
    <div class="main-style">
      <h1 class="Main-title">공모전 상세페이지</h1>
      <br>
      <h2 class="sub-title">{{ $route.params.id }}</h2>
    <div class="container">
        <img :src="competitionImage" class="image" alt="공모전 이미지">
        <div class = "detail-text">
        <p>{{ competitionContent }}</p>
        <p>{{ competitionConten1}}</p>
        <p>{{ competitionConten2}}</p>
        <p>{{ competitionConten3}}</p>
        <p>{{ competitionConten4}}</p>
        <p>{{ competitionConten5}}</p>
        <p>{{ competitionConten6}}</p>
        <p>{{ competitionConten7}}</p>
    </div>
    </div><br><br><br>
    <h2 class = "team-title">팀원 구인</h2>
    <br><br>
    <div class = "container">
      <img class = "team-image" src="@/assets/user.png" alt="팀 이미지">
      <div class = "team-detail">
        <h4>제 15회 대한민국 청소년 디자인 공모전</h4>
        <h5>같이 할 팀원 구합니당</h5>
      </div>
    </div><br>
    <div class = "container">
      <img class = "team-image" src="@/assets/user.png" alt="팀 이미지">
      <div class = "team-detail">
        <h4>제 15회 대한민국 청소년 디자인 공모전</h4>
        <h5>저랑 같이 해봐요!!</h5>
      </div>
    </div><br>
    <div class = "container">
      <img class = "team-image" src="@/assets/user.png" alt="팀 이미지">
      <div class = "team-detail">
        <h4>제 15회 대한민국 청소년 디자인 공모전</h4>
        <h5>이번 공모전 열심히 준비하면서 할 사람 구해요~</h5>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CompetitionPage',
    computed: {
        competitionContent() {
      const id = this.$route.params.id;
      if (id === '제 15회 대한민국 청소년 디자인 공모전') {
        return '[공모주제] - 환경, 다문화, 학교폭력 예방, 양성평등, 장애인 인식개선';
      } else if (id === 'IM Super VR 공모전') {
        return '[공모기간] - 2020.3.30(월) ~ 4.24(금) 15시';
      }else if (id === '인공지능 학습용 데이터 활용 아이디어 공모전') {
        return '[공모기간] - 20년 12월 14일(월)~’21년 1월 20일(수)';
      }  else {
        return '다른 공모전 페이지의 내용입니다.';
      }
    },
    competitionConten1() {
      const id = this.$route.params.id; // $route.params에서 'id' 값을 받아옵니다.

      // 받아온 'id'를 기반으로 해당 공모전 페이지의 내용을 계산하여 반환합니다.
      if (id === '제 15회 대한민국 청소년 디자인 공모전') {
        return '[공모일정] ';
      } else if (id === 'IM Super VR 공모전') {
        return '[공모분야] - VR분야의 신규 웹/앱 서비스, 제품 솔루션 등의 B2B, B2C 사업화 아이템';
      } else if (id === '인공지능 학습용 데이터 활용 아이디어 공모전') {
        return '[서류접수] - 20년 12월 14일(월)~’21년 1월 7일(목)';
      }else {
        return '다른 공모전 페이지의 내용입니다.';
      }
    },
    competitionConten2() {
      const id = this.$route.params.id; 
      if (id === '제 15회 대한민국 청소년 디자인 공모전') {
        return '-접수 : 2023년 7월 31일 (목) 까지 ';
      } else if (id === 'IM Super VR 공모전') {
        return '[우대사항]';
      } else if (id === '인공지능 학습용 데이터 활용 아이디어 공모전') {
        return '[지원자격] - 대한민국 국민 누구나 참여 가능';
      }else {
        return '다른 공모전 페이지의 내용입니다.';
      }
    },
    competitionConten3() {
      const id = this.$route.params.id;
      if (id === '제 15회 대한민국 청소년 디자인 공모전') {
        return '-본석진출작 발표 : 2023년 8월 4일 (금) 까지 ';
      } else if (id ==='IM Super VR 공모전') {
        return '- VR만의 특징을 살린 UI/UX를 제공하여 Pc/모바일로 대체할 수 없는 경험을 제공하는 경우';
      }else if (id === '인공지능 학습용 데이터 활용 아이디어 공모전') {
        return '[공모주제] - 인공지능 학습용 데이터를 활용한 신규 서비스 아이디어';
      } else {
        return '다른 공모전 페이지의 내용입니다.';
      }
    },
    competitionConten4() {
      const id = this.$route.params.id;
      if (id === '제 15회 대한민국 청소년 디자인 공모전') {
        return '[작품규격]';
      } else if (id === 'IM Super VR 공모전') {
        return '- 프로토타입또는 VR HMD를 이용한 데모 시연이 가능한 경우';
      }else if (id ===  '인공지능 학습용 데이터 활용 아이디어 공모전') {
        return '[참가방법] - AI 허브 홈페이지에서 제공되고 있거나, 향후 제공할 인공지능 학습용 데이터를 활용하여 실제 구현 가능한 서비스 아이디어를 첨부 양식에 맞추어 작성';
      }  else {
        return '다른 공모전 페이지의 내용입니다.';
      }
    },
    competitionConten5() {
      const id = this.$route.params.id;
      if (id === '제 15회 대한민국 청소년 디자인 공모전') {
        return '- 포스터 :  A3/jpg '
      } else if (id === 'IM Super VR 공모전') {
        return '- 단기간에사업화가 가능한 아이템으로 판단되는 경우';
      } else if (id ==='인공지능 학습용 데이터 활용 아이디어 공모전') {
        return '[주최/주관] - 과학기술정보통신부/한국지능정보사회진흥원 ';
      }else {
        return '다른 공모전 페이지의 내용입니다.';
      }
    },
    competitionConten6() {
      const id = this.$route.params.id;
      if (id === '제 15회 대한민국 청소년 디자인 공모전') {
        return '[유의사항]'
      } else if (id ==='IM Super VR 공모전') {
        return '[참가제한]';
      } else if (id ==='인공지능 학습용 데이터 활용 아이디어 공모전') {
        return '[문의처] - 공모전 운영 사무국 070-4323-6885';
      } else {
        return '다른 공모전 페이지의 내용입니다.';
      }
    },
    competitionConten7() {
      const id = this.$route.params.id;
      if (id === '제 15회 대한민국 청소년 디자인 공모전') {
        return '-제출작은 순수 창작물이어야 하며, 모방 및 표절시 심사에서 제외 및 수상 취소 됩니다'
      } else if (id === 'IM Super VR 공모전') {
        return '- 공모전수상 이후 사업화지원 프로그램에 참여 불가 기업';
      } else if (id === '인공지능 학습용 데이터 활용 아이디어 공모전') {
        return '- AI 허브 웹사이트 공모전 카테고리(www.aihub.or.kr)';
      } else {
        return '다른 공모전 페이지의 내용입니다.';
      }
    },

      competitionImage() {
        const id = this.$route.params.id;
        if (id === '제 15회 대한민국 청소년 디자인 공모전') {
          return require('@/assets/competiton2.jpg');
        } else if (id === "IM Super VR 공모전") {
          return require('@/assets/competiton3.jpg');
        } else if (id === "인공지능 학습용 데이터 활용 아이디어 공모전") {
          return require('@/assets/competiton4.png');
        } else if (id === "생활체육 참여 표어/ 포스터 공모전") {
          return require('@/assets/competiton5.png');
        }else {
          return require('@/assets/competiton2.jpg');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @font-face {
    font-family: "PyeongChangPeace-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    font-family: "NeoDunggeunmoPro-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'KCC-Ganpan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

.team-title{
  font-family: "NeoDunggeunmoPro-Regular";
}
  
  .main-style {
    margin: 7%;
  }
  
  .Main-title {
    font-family: "PyeongChangPeace-Bold";
  }
  
  .sub-title {
    font-family: "NeoDunggeunmoPro-Regular";
  }

  .image{
    width: 18%;
  }

  .container {
  display: flex; /* 이미지와 텍스트를 수직 정렬 */
}
.detail-text{
    margin-left: 50px;
    font-family: 'KCC-Ganpan';
}

.team-image{
  width: 3%;
  height: 3%;
}

.team-detail{
  font-family: 'KCC-Ganpan';
}

  </style>
  