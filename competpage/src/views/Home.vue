<template>
  <div class="header">
    <div class="content">
      <div class="image-container"></div>
      <P></P>
      <p></p>
      <h2 class="font-face">인기 공모전</h2>
       <div class="slider-container">
        <div class="slider">
          <button class="prev-button" @click="prevSlide">&#10094;</button>
          <div class="slide">
            <div class="grid-container">
              <router-link
                v-for="(image, index) in displayedImages"
                :key="index"
                :to="'/competition/' + (image.title )"
                class="grid-item"
              >
                <img
                  class="competition-image"
                  :src="require(`@/assets/${image.url}`)"
                  alt="공모전 사진"
                />
                <div class="image-title">
                  <h5 class="font-face1">{{ image.title }}</h5>
                </div>
              </router-link>
            </div>
          </div>
          <button class="next-button" @click="nextSlide">&#10095;</button>
        </div>
      </div>
      <h2 class="font-face">팀원 모집중</h2>
      <div>
      <div class="team">
        <img
          class="user-icon"
          src="@/assets/user.png"
          alt="팀원 모집 글 사용자 아이콘"
        />
        <div class="text-container">
          <h4>대한민국 국제 청소년 포스터 디자인 공모전</h4>
          <h5>열심히 같이 할 팀원 구합니당</h5>
        </div>
      </div>
      <div class="team">
        <img
          class="user-icon"
          src="@/assets/user.png"
          alt="팀원 모집 글 사용자 아이콘"
        />
        <div class="text-container">
          <h4>IM Super VR 기업 공모전</h4>
          <h5>VR 공모전 같이 할 팀워 구인</h5>
        </div>
      </div>
      <div class="team">
        <img
          class="user-icon"
          src="@/assets/user.png"
          alt="팀원 모집 글 사용자 아이콘"
        />
        <div class="text-container">
          <h4>2023 영주 릴스 영상 사진 공모전</h4>
          <h5>팀원 구합니다</h5>
        </div>
      </div>
      <div class="team">
        <img
          class="user-icon"
          src="@/assets/user.png"
          alt="팀원 모집 글 사용자 아이콘"
        />
        <div class="text-container">
          <h4>ICT 2023 해커톤</h4>
          <h5>해커톤 경험 같이 쌓고 싶은 팀원 구해요!!</h5>
        </div>
      </div>
      </div>
      <h2 class="font-face">전체 공모전</h2>
      <div class="slider-container">
        <div class="slider">
          <div class="slide">
            <div class="grid-container">
              <router-link
                v-for="(image, index) in displayedImages1"
                :key="index"
                :to="'/competition1/' + (image.title )"
                class="grid-item"
              >
                <img
                  class="competition-image"
                  :src="require(`@/assets/${image.url}`)"
                  alt="공모전 사진"
                />
                <h5 class="font-face1">{{ image.title }}</h5>
              </router-link>>
            </div>
          </div>
          <button class="prev-button1" @click="prevSlide1">&#10094;</button>
          <button class="next-button1" @click="nextSlide1">&#10095;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      postData: null,
      images: [
        {
          id: 1,
          url: "competiton2.jpg",
          title: "제 15회 대한민국 청소년 디자인 공모전",
        },
        { id: 2, url: "competiton3.jpg", title: "IM Super VR 공모전" },
        {
          id: 3,
          url: "competiton4.png",
          title: "인공지능 학습용 데이터 활용 아이디어 공모전",
        },
        {
          id: 4,
          url: "competiton5.png",
          title: "생활체육 참여 표어/ 포스터 공모전",
        },
        {
          id: 5,
          url: "competiton6.jpg",
          title: "2023 울산 관광 콘텐츠 아이디어 공모전 ",
        },
        {
          id: 6,
          url: "competiton7.jpg",
          title: "야생동물과 함께 공존 포스터 공모전",
        },
        {
          id: 7,
          url: "competiton8.jpg",
          title: "2023 대국민 안전 사진/ 포스터 공모전",
        },
        {
          id: 8,
          url: "competiton9.jpg",
          title: "대한민국 체육 100년 기념 생활체육 참여 표어/ 포스터 공모전",
        },
      ],
      allimages: [
        {
          id: 1,
          url: "competiton20.jpg",
          title: "Car options 콘테스트 공모전",
        },
        { id: 1, url: "competiton19.jpg", title: "사이언스오너 모집 " },
        {
          id: 2,
          url: "competiton18.png",
          title: "2023 문화도시 춘천 일러스트/ 디자인 공모전",
        },
        {
          id: 3,
          url: "competiton17.jpg",
          title: "2022 순천 전국학생 웹툰 공모전",
        },
        { id: 4, url: "competiton16.jpg", title: "Girls in ICT 2023 해커톤" },
        { id: 5, url: "competiton15.jpg", title: "2023 인권 공모전 " },
        {
          id: 6,
          url: "competiton14.jpg",
          title: "2323 영주 릴스 영상 사진 공모전",
        },
        {
          id: 7,
          url: "competiton13.jpg",
          title: "2023 제 23회 대한민국 국제 청소년 영화제",
        },
        {
          id: 8,
          url: "competiton12.png",
          title: "2023 아시아역도 선수권 대회 ",
        },
        {
          id: 1,
          url: "competiton11.png",
          title: "2023 의왕시인재육성재단 공모전 모집",
        },
        {
          id: 2,
          url: "competiton10.jpg",
          title: "지역문제 해결을 위함 창업아이디어 공모전",
        },
        {
          id: 3,
          url: "competiton9.jpg",
          title: "대한민국 체육 100년 기념 생활체육 참여 표어/ 포스터 공모전",
        },
        {
          id: 4,
          url: "competiton8.jpg",
          title: "2023 대한민국 안전사진/ 포스터 공모전",
        },
        {
          id: 5,
          url: "competiton7.jpg",
          title: "야생과 함꼐 공존 하는 포스터 공모전",
        },
        {
          id: 6,
          url: "competiton6.jpg",
          title: "2023 울산 관광 콘텐츠 아이디어 공모전",
        },
        {
          id: 7,
          url: "competiton5.png",
          title: "생활체육 참여 표어/ 포스터 공모전 ",
        },
        {
          id: 8,
          url: "competiton4.png",
          title: "인공지능 학습용 데이터 활용 아이디어 공모전",
        },
        { id: 8, url: "competiton3.jpg", title: "SUPER VR 기업 공모전" },
        {
          id: 8,
          url: "competiton2.jpg",
          title: "대한민국 청소년 디자인 공모전",
        },
      ],
      displayedImages: [],
      displayedImages1: [],
      startIndex: 0,
      startIndex1: 0,
      endIndex: 2,
      endIndex1: 8,
    };
  },
  created() {
    // localStorage에서 데이터 불러오기
    const storedData = localStorage.getItem("postData");
    if (storedData) {
      this.postData = JSON.parse(storedData);
    }
  },
  mounted() {
    this.displayedImages = this.images.slice(
      this.startIndex,
      this.endIndex + 1
    );
    this.displayedImages1 = this.allimages.slice(
      this.startIndex1,
      this.endIndex1 + 1
    );
  },
  methods: {
    goToCompetition(path) {
      this.$router.push(path);
    },
    prevSlide() {
      if (this.startIndex > 0) {
        this.startIndex--;
        this.endIndex--;
        this.displayedImages = this.images.slice(
          this.startIndex,
          this.endIndex + 1
        );
      }
    },
    prevSlide1() {
      if (this.startIndex1 > 0) {
        this.startIndex1--;
        this.endIndex1--;
        this.displayedImages1 = this.allimages.slice(
          this.startIndex1,
          this.endIndex1 + 1
        );
      }
    },
    nextSlide() {
      if (this.endIndex < this.images.length - 1) {
        this.startIndex++;
        this.endIndex++;
        this.displayedImages = this.images.slice(
          this.startIndex,
          this.endIndex + 1
        );
      }
    },
    nextSlide1() {
      if (this.endIndex1 < this.allimages.length - 1) {
        this.startIndex1++;
        this.endIndex1++;
        this.displayedImages1 = this.allimages.slice(
          this.startIndex1,
          this.endIndex1 + 1
        );
      }
    },
  },
};
</script>


  
<style>
@font-face {
  font-family: "PyeongChangPeace-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "NeoDunggeunmoPro-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
.font-face {
  font-family: "PyeongChangPeace-Bold";
  font-size: 45px;
  text-align: left;
}
.font-face1 {
  font-family: "NeoDunggeunmoPro-Regular";
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.grid-item {
  text-align: center;
}

.competition-image {
  margin: 35px;
  width: 350px;
  height: 350px;
  border-radius: 20px;
}

.image-title {
  display: flex;
  margin-left: 71px;
}

.user-rectangle {
  display: flex;
  flex-direction: column;
  height: 1.8cm;
  width: 80%;
  background-color: #9ab1f4;
  margin: 0 auto; /* 가로 중앙 정렬 */
  padding-top: 10px;
  border-radius: 15px; /* 각 모서리를 둥글게 만듦 */
  padding-top: 2px; /* 위로부터 20px 아래로 내림 */
}
.user-icon {
  margin: 25px;
  width: 25px;
  height: 25px;
}
.competiotion-image {
  margin: 35px;
  width: 350px;
  height: 350px;
  border-radius: 20px; /* 각 모서리를 둥글게 만듦 */
}
.centered-image {
  margin: 35px;
  width: 30px;
  height: 30px;
}

.header {
  text-align: left;
}

.content {
  flex-direction: column;
  align-items: left;
}

.rectangle {
  display: flex;
  flex-direction: column;
  height: 1cm;
  width: 100%;
  background-color: #9ab1f4;
  margin: 0;
  padding-top: 10px;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}

.hamburger-button {
  margin-right: auto;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
}

.right-buttons {
  display: flex;
}

.button {
  margin-left: 1px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
}

.cmp-text {
  font-size: 19px;
  color: #1a1d25;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

.image-button-container {
  display: flex;
  align-items: center;
}

.image-button {
  margin-top: 5px;
  border-radius: 5px;
  border: none;
}

.rectangle h2 {
  text-align: left; /* 인기 공모전 글씨를 왼쪽 정렬 */
  padding-left: 30px;
}
.popular-contests {
  /* 인기 공모전 내용을 그리기 위한 스타일을 추가 */
  margin-top: 20px;
}

.carousel {
  position: relative;
  overflow: hidden;
}

.slide-container {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slides {
  display: flex;
  width: 100%;
}

.slide {
  flex: 0 0 20%; /* 5개의 이미지만 보이도록 설정 */
  padding: 10px;
}

.contest-image {
  width: 100%;
  height: auto;
  max-width: 200px; /* 필요에 따라 최대 너비를 조정하세요 */
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  z-index: 1;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.team-recruitment .rectangle {
  width: 1300px;
  height: 40px;
  background-color: #9ab1f4;
  margin: 0 auto; /* 가로 중앙 정렬 */
  border-radius: 15px; /* 각 모서리를 둥글게 만듦 */
}

.team {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.user-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.text-container {
  display: flex;
  flex-direction: column;
}

h4 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

h5 {
  font-size: 14px;
  margin: 0;
}
</style>




  