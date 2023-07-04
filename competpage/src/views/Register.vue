<template>
  <div class="app-text-center">
    <h2 class="text-left">글 등록하기</h2>
    <div>
      <label class = "competitiontitle" for="competitiontitle">공모전 제목</label> 
      <input class = "text-area" type="text" id="competitiontitle" v-model="competitionTitle" @input="saveData"><br> <p></p>
      <label  class = "competitiontitle" for="maintitle">제목</label>
      <input class = "text-area1" type="text" id="maintitle" v-model="title" @input="saveData"><p></p>
    </div>
    <div>
      <label  class = "competitiontitle" for="content">내용</label>
      <textarea class = "text-area6" id="content" v-model="content" @input="saveData"></textarea> <p></p>
    </div>
    <div >
      <label  class = "competitiontitle">카테고리 분류</label>
      <label class = "text-area2" for="category1">
        <input type="radio" id="category1" value="IT" v-model="category" @change="saveData"> IT
      </label>
      <label for="category2">
        <input type="radio" id="category2" value="스포츠/ 음악" v-model="category" @change="saveData"> 스포츠/음악
      </label>
      <label for="category3">
        <input type="radio" id="category3" value="기획/ 아이디어" v-model="category" @change="saveData"> 기획/아이디어
      </label>
      <label for="category4">
        <input type="radio" id="category4" value="미술/ 디자인" v-model="category" @change="saveData"> 미술/디자인
      </label>
    </div><p></p>
    <div>
      <label  class = "competitiontitle" for="recruitment">모집원 수</label>
      <select class = "text-area3" id="recruitment" v-model="recruitment" @change="saveData">
        <option value="1">1명</option>
        <option value="2">2명</option>
        <option value="3">3명</option>
        <option value="4">4명</option>
        <option value="5">5명</option>
        <option value="6">6명</option>
      </select>
    </div><p></p>
    <div>
      <label  class = "competitiontitle" for="enddate">종료일</label>
      <flat-pickr class = "text-area4" v-model="endDate" :config="flatpickrConfig" @change="saveData"></flat-pickr><p></p>
    </div><p></p>
    <button  class= "text-area5" @click="submitPost" style="background-color: white;">등록</button>
  </div>
</template>

<script>
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    FlatPickr
  },
  data() {
    return {
      competitionTitle: '',
      title: '',
      content: '',
      category: '',
      recruitment: '',
      endDate: null,
      flatpickrConfig: {
        dateFormat: 'Y-m-d',
        enableTime: false
      },
      postData: [] // 배열로 게시물 데이터 저장
    };
  },
  name: 'Register',
  methods: {
    saveData() {
      // 데이터를 localStorage에 저장
      const data = {
        competitionTitle: this.competitionTitle,
        title: this.title,
        content: this.content,
        category: this.category,
        recruitment: this.recruitment,
        endDate: this.endDate
      };
      localStorage.setItem('postData', JSON.stringify(data));
    },
    submitPost() {
      // 등록 버튼 클릭 시 처리 로직

      // 데이터를 localStorage에 저장
      const data = {
        competitionTitle: this.competitionTitle,
        title: this.title,
        content: this.content,
        category: this.category,
        recruitment: this.recruitment,
        endDate: this.endDate
      };
      localStorage.setItem('postData', JSON.stringify(data));
      this.postData.push(data); // 배열에 게시물 추가

      // 페이지 이동 로직 (다른 페이지로 이동)
      this.$router.push({ name: 'MyPage' });
    },
    created() {
      // localStorage에서 데이터 불러오기
      const storedData = localStorage.getItem('postData');
      if (storedData) {
        const data = JSON.parse(storedData);
        this.competitionTitle = data.competitionTitle;
        this.title = data.title;
        this.content = data.content;
        this.category = data.category;
        this.recruitment = data.recruitment;
        this.endDate = data.endDate;
      }
    }
  }
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
.text-left{
  font-family: "PyeongChangPeace-Bold";
  font-size: 35px;
}
.competitiontitle {
  font-family: "NeoDunggeunmoPro-Regular"
}
app {
  margin-top: 80px;
}
.text-area { 
  width: 490px;
  margin-left: 10%;
  border-top-width : 0cm;
  border-right-width : 0cm;
  border-bottom-width: 0.1mm;
  border-bottom-color: black;
  border-left-width: 0cm;
}
.text-area1{
  width: 490px;
  margin-left: 14.77%;
  border-top-width : 0cm;
  border-right-width : 0cm;
  border-bottom-width: 0.1mm;
  border-bottom-color: black;
  border-left-width: 0cm;
}
.text-area2{
  margin-left: 8%;
}
.text-area3{
  margin-left: 11%;
}
.text-area4{
  margin-left: 13%;
}
.text-area5{
  margin-left: 80%;
  font-family: "NeoDunggeunmoPro-Regular"

}
.text-area6{
  margin-left: 14.9%;
}

.app-text-center{
  margin-top: 90px;
  margin-left: 380px;
}

.register-main {
  margin: 0 auto;
  max-width: 300px;
}

textarea {
  width: 50%; /* 필요에 따라 너비 조정 */
  height: 200px; /* 필요에 따라 높이 조정 */
}
</style>
