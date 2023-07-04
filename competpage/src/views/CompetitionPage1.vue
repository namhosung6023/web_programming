<template>
    <div class="main-style">
      <h1 class="Main-title">공모전 상세페이지</h1>
      <h2 class="sub-title">{{ $route.params.id }}</h2>
      <img :src="competitionImage1" class = "image" alt="공모전 이미지">
    </div>
  </template>
  
  <script>
  export default {
    name: 'CompetitionPage1',
    computed: {
      competitionImage1() {
        const id = this.$route.params.id;
        if (id === 'Car options 콘테스트 공모전') {
          return require('@/assets/competiton20.jpg');
        } else if (id === '사이언스오너 모집 ') {
          return require('@/assets/competiton19.jpg');
        } else {
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
  </style>
  