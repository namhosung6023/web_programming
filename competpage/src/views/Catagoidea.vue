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
              <div
                v-for="(image, index) in displayedImages"
                :key="index"
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
              </div>
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
          <h4>ChatGPT 활용 사례로 보는 인공지능의 미래 공모전</h4>
          <h5>열심히 같이 할 팀원 구합니다 !</h5>
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
          <h4>2023 ICT 스마트 디바이스 전국 공모전</h4>
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
          <h4>웅진씽크빅 게임 개발 챌린지</h4>
          <h5>게임 개발 관련 관심있으신 분 같이 해요!!</h5>
        </div>
      </div>
      </div>
      <h2 class="font-face">전체 공모전</h2>
      <div class="slider-container">
        <div class="slider">
          <div class="slide">
            <div class="grid-container">
              <div
                v-for="(image, index) in displayedImages1"
                :key="index"
                class="grid-item"
              >
                <img
                  class="competition-image"
                  :src="require(`@/assets/${image.url}`)"
                  alt="공모전 사진"
                />
                <h5 class="font-face1">{{ image.title }}</h5>
              </div>
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
  name: "Catagoidea",
  data() {
    return {
      postData: null,
      images: [
        {
          id: 1,
          url: "i1.png",
          title: "2023 상반기 시민 아이디어 공모전",
        },
        { id: 2, url: "i2.png", title: "2023 제 7회 양성평등 대국민 아이디어 공모전" },
        {
          id: 3,
          url: "i3.jpg",
          title: "2023 아이디어 공모전 ",
        },
        {
          id: 4,
          url: "4.jpg",
          title: "2023 트래블 이노베이션 아이디어 공모전",
        },
        {
          id: 5,
          url: "5.jpg",
          title: "2023 청주시 규제개혁 아이디어 공모전",
        },
        {
          id: 6,
          url: "6.jpg",
          title: "'더나은 제주시'아이디어 공모전",
        },
        {
          id: 7,
          url: "7.webp",
          title: "대전 평생교육 정책 아이디어 공모전",
        },
        {
          id: 8,
          url: "8.jpg",
          title: "정책 아이디어 공모전",
        },
      ],
      allimages: [
        {
          id: 1,
          url: "9.jpg",
          title: "국가 산업단지 재생 대학생 아아디어 공모전",
        },
        { id: 1, url: "10.webp", title: "자치입법 아이디어 공모전" },
        {
          id: 2,
          url: "12.jpg",
          title: "2023 관악구 ESG 아이디어 공모전",
        },
        {
          id: 3,
          url: "13.jpg",
          title: "제 4회 국제수면/ 건강 아이디어 공모전",
        },
        { id: 4, url: "14.png", title: "지역통계 아이디어 공모전" },
        { id: 5, url: "15.png", title: "2023 대한민국 청소년 기자대상 공모전" },
        {
          id: 6,
          url: "16.jpg",
          title: "CURTAIN 마케팅 공모전",
        },
        {
          id: 7,
          url: "17.jpg",
          title: "KoAT 2023 대국민 혁신 아이디어 공모전 ",
        },
        {
          id: 8,
          url: "i1.png",
          title: "2023년도 상반기 시민 아이디어 공모전",
        },
        {
          id: 1,
          url: "i2.png",
          title: "2023 제 7회 양성평등 대국민 아이디어 공모전",
        },
        {
          id: 2,
          url: "i3.jpg",
          title: "2023 아이디어 공모전",
        },
        {
          id: 3,
          url: "4.jpg",
          title: "2023 트래블 이노베이션 아이디어 공모전",
        },
        {
          id: 4,
          url: "5.jpg",
          title: "20223 청주시 규제 개혁 아이디어 공모전",
        },
        {
          id: 5,
          url: "6.jpg",
          title: "'더 나은 제주시' 아이디어 공모전",
        },
        {
          id: 6,
          url: "7.webp",
          title: "대전 평생교육 정책 아이디어 공모전",
        },
        {
          id: 7,
          url: "8.jpg",
          title: "정책 아이디어 공모전",
        },
        {
          id: 8,
          url: "9.jpg",
          title: "국가 산업단지 재생 아이디어 공모전",
        },
        { id: 8, url: "10.webp", title: "자치입법 정책 아이디어 공모전" },
        {
          id: 8,
          url: "12.jpg",
          title: "2023 ESG 아이디어 공모전",
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
/* .team{
margin : flex;
} */


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
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
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




  