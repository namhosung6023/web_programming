<template>
  <div class="app">
    <h2 class = "mypage-title">마이페이지</h2>
    <div v-if="user" class="user-container">
      <img class="user-image" src="@/assets/mypage.png" alt="유저 이미지" />
      <div class="user-info">
        <h4>{{ user.name }} 회원</h4>
        <p>{{ user.age }} 세</p>
      </div>
    </div><p></p>
    <h5 class ="mypage-title" style="font-size: 15px;">내가 구인하는 팀 게시글</h5>
    <hr>
    <div  class ="mypage-title1" v-if="postData">
      <h3>{{ postData.competitionTitle }}</h3>
      <p >제목: {{ postData.title }}</p>
      <p>내용: {{ postData.content }}</p>
      <p>카테고리: {{ postData.category }}</p>
      <p>팀원 수: {{ postData.recruitment }}</p>
      <p>모집 마감: {{ postData.endDate }}</p>
    </div>
    <div v-else>
      <img class="user-image" src="@/assets/error.png" alt="유저 이미지" />
      <p>팀 구인을 구인하고 있지 않습니다</p>
    </div>
    <hr> <br>
    <h2 class = "mypage-title">자기소개 및 기능설명</h2>
    <h5 class = "mypage-title">페이지 간단한 소개</h5>
    <p class ="mypage-title1" >모든 카테고리의 공모전을 이 싸이트에서 한눈에 확인할 수 있고 또한 팀원 또한 손쉽게 구인할수 있도록 하게 하는 페이지 입니다</p>
    <h5 class = "mypage-title">페이지 기능 설명</h5>
    <p class ="mypage-title1" >먼저 메인 페이지에 카테고리 별로 공모전을 확인 할수 있도록 구현 하였습니다. 전체 카테고리를 누르면 전체 글씨 색깔이 변경되고 그 색으로 그림자를 주었습니다</p>
    <p class ="mypage-title1" >전체 카테고리에는 카테고리 구별없이 모든 카테고리의 인기공모전과 전체 공모전을 보여지도록 하였습니다. 또한 공모전 옆에 화살표 버튼을 누르면 다음 공모전으로 넘어가면서 다음 공모전을 확인 할수 있도록 구현 하였습니다</p>
    <p class ="mypage-title1">카테고리는 "전체", "IT", "스포츠/음악", "기획/아이디어" 가 있는데 각 해당 카테고를 누르면 카테고리에 해당하는 공모전을 보여지도록 구현 하였습니다</p>
    <p class ="mypage-title1" >인기 공모전 밑에 "팀원 모집중" 이라는 것을 만들어서 사용자가 팀원을 구인할 수 있도록 하였습니다.</p>
    <p class ="mypage-title1">또한 공모전 사진을 누르게 되면 각 해당 공모전의 상세페이지로 넘어가서 공모전에 대한 상세정보를 확인하고 해당 공모전의 팀원 구인 목록을 보여지도록 하였습니다</p>
    <p class ="mypage-title1">공모전 상세페이지로 넘어갈때는 각해당 공모전의 id인 제목을 넘겨줘서 자동으로 제목을 그려주도록 구현하였습니다</p>
    <p class ="mypage-title1">로그인 페이지는 회원가입을 하지 않거나 아이디와 비밀번호가 틀리다면 팝업창을 띄워서 로그인을 하지 못하도록 구현하였습니다.</p>
    <p class ="mypage-title1">만약 회원가입을 완료했고 아이디와 비밀번호를 정확하게 입력해서 로그인 버튼을 누른다면 메인 페이지인 전체 카테고리 페이지로 넘어가게 구현하였습니다</p>
    <p class ="mypage-title1">다음은 회원 가입 페이지 입니다. 회원 가입페이지에 형식에 맞게 정보를 입력하고 회원 가입 버튼을 누른다면 바로 로그인을 할수 있도록 로그인 페이지로 넘어가게 구현 하였습니다 </p>
    <p class ="mypage-title1">마이페이지 입니다. 마이페이지에 보여지는 회원 이름과 나이는 회원가입을 할때 입력했던 아이디와 나이의 정보를 가지고와서 보여지도록 하였습니다</p>
    <p class ="mypage-title1">등록하기 페이지 입니다. 우측상단에 있는 등록하기 버튼을 누르면 팀원을 구인할수 있도록 게시글을 등록하는 페이지 입니다</p>
    <p class ="mypage-title1">등록하기 페이지에는 헤당 공모전 제목, 제목, 내용을 입력하고 카테고리를 분류하기 위해 레디오 버튼을 눌러 해당 공모전의 카테고를 선택하도록 하였고 모집인원수는 셀렉트 버튼을 만들어 눌러서 원하는 인원수를 선택할수 있도록하였고 마지막으로 팀원 구인 마감일을 선택할수 있도록 입력창을 누르면 달력을 보이게해서 원하는 날짜를 선택하면 그 날짜가 입력창에 받아올수 있도록 구현했습니다.</p>
    <p class ="mypage-title1">모든 정보를 입력하고 등록버튼을 누른다면 마이페이지에 "내가 구인하는 팀 게시글" +밑에 등록한 글을 보여지도록 구현하였습니다. 하지만 게시글을 등록하지 않았다면 "팀을 구인하고 있지 않습니다"문구와 이미지를 보여지도록 하였습니다</p>
  

  </div>
</template>

<script>
export default {
  name: 'Mypage',
  data() {
    return {
      postData: null,
      user: null
    };
  },
  created() {
    // localStorage에서 데이터 불러오기
    const storedData = localStorage.getItem('postData');
    if (storedData) {
      this.postData = JSON.parse(storedData);
    }
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
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
.my{
  font-family: "PyeongChangPeace-Bold";
}
.mypage-title{
  font-family: "PyeongChangPeace-Bold";
}
.mypage-title1{
  font-family: "NeoDunggeunmoPro-Regular";
}
.app {
  margin-top: 80px;
  margin-left: 5%;
}

.user-info {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  font-family: "NeoDunggeunmoPro-Regular";
}

.user-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  
}

.user-image {
  margin-left: 10px;
  margin-right: 10px;
}

.rectangle1 {
  height: auto;
  background-color: aqua;
}
</style>
