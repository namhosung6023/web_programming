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
  name: "catagosport",
  data() {
    return {
      postData: null,
      images: [
        {
          id: 1,
          url: "c1.jpg",
          title: "2023 GRAND DANCE COMPETITION 대회",
        },
        { id: 2, url: "c2.jpg", title: "2023 슈퍼레이스 음원 공모전" },
        {
          id: 3,
          url: "c6.jpg",
          title: "인디뮤직 D.I.Y 프로젝트 라이브 기획 ",
        },
        {
          id: 4,
          url: "c3.jpg",
          title: "제1회 전국 실용음악과 학생 창작경연대회",
        },
        {
          id: 5,
          url: "c4.png",
          title: "2023 슈퍼레이스 음원 공모전",
        },
        {
          id: 6,
          url: "c5.jpg",
          title: "버블탭 스포츠 공모전",
        },
        {
          id: 7,
          url: "c7.jpg",
          title: "2022 인디열전 공모",
        },
        {
          id: 8,
          url: "c8.jpg",
          title: "THE DRUMMER 두드려나 나를 표현하라 공모전",
        },
      ],
      allimages: [
        {
          id: 1,
          url: "c7.jpg",
          title: "2022 M 인디열전 공모",
        },
        { id: 1, url: "c8.jpg", title: "THE DUMMER 나를 표현하라 공모전" },
        {
          id: 2,
          url: "c9.jpg",
          title: "부산 국제음악 콩쿠르",
        },
        {
          id: 3,
          url: "c10.png",
          title: "2023 M 인디열전 공모",
        },
        { id: 4, url: "c11.jpg", title: "전국 청소년 댄스크루 대회" },
        { id: 5, url: "c12.png", title: "위대한 대한민국 노래 공모전" },
        {
          id: 6,
          url: "c13.jpg",
          title: "브랜드 필름 & 응원가 공모전",
        },
        {
          id: 7,
          url: "c14.jpg",
          title: "통일염원 창작 대중음악 경연대회",
        },
        {
          id: 8,
          url: "c1.jpg",
          title: "2023 실용/ 순수 무용 경연대회",
        },
        {
          id: 1,
          url: "c2.jpg",
          title: "2023 슈퍼레이스 음원 공모전",
        },
        {
          id: 2,
          url: "c3.jpg",
          title: "제 1회 전국 실용음악과 학생 창작 경연대회",
        },
        {
          id: 3,
          url: "c4.png",
          title: "2023 슈퍼레이스 음원 공모전",
        },
        {
          id: 4,
          url: "c5.jpg",
          title: "버블탭 스포츠 공모전",
        },
        {
          id: 5,
          url: "c6.jpg",
          title: "서울 라이브 인디뮤직 프로젝트",
        },
        {
          id: 6,
          url: "competiton12.png",
          title: "아시아 역도선수권 대회",
        },
        {
          id: 7,
          url: "sp1.jpg",
          title: "2023 SPORTS 스포츠 실무맞춤 인재양성",
        },
        {
          id: 8,
          url: "sp2.jpg",
          title: "강원 2024 올림픽 무브먼트 프로젝트 공모전",
        },
        { id: 8, url: "sp3.jpg", title: "2023 에이스 야구 칼럼 공모전" },
        {
          id: 8,
          url: "sp4.jpg",
          title: "2023 철원컵 전국태권도 시범경연대회",
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




  