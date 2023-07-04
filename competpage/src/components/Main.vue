<template>
  <div class="header">
    <div class="content">
      <img src="@/assets/mainlogo.jpg" alt="My Image" class="centered-image1" />
      <div class="rectangle">
        <div class="buttons-container">
         <p class = "name">20200722 남호성</p>
          <div class="right-buttons" :class="{ 'open': isMenuOpen }">
            <router-link to="/register" class="button button-register">등록하기</router-link>
            <router-link to="/mypage" class="button button-mypage">마이페이지</router-link>
            <router-link to="/loginpage" class="button button-login">로그인</router-link>
          </div>
        </div>
        <div class="image-container">
          <div class="image-button-container">
            <img src="@/assets/all.png" alt="My Image" class="centered-image" />
            <router-link to="/" class="nav-link" :class="{ 'router-link-active': $route.path === '/' }">전체</router-link>

          </div>
          <div class="image-button-container">
            <img src="@/assets/all.png" alt="My Image" class="centered-image" />
            <router-link to="/catagoIT" class="nav-link">IT</router-link>
          </div>
          <div class="image-button-container">
            <img src="@/assets/all.png" alt="My Image" class="centered-image" />
            <router-link to="/catagosport" class="nav-link">스포츠/음악</router-link>
          </div>
          <div class="image-button-container">
            <img src="@/assets/all.png" alt="My Image" class="centered-image" />
            <router-link to="/catagoidea" class="nav-link">기획/아이디어</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
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
.name{
  font-family: "PyeongChangPeace-Bold";
}

.centered-image1{
  width: 7%;
  height: 7%;
}
  .router-link-active:focus{
    color: darkblue;
    text-shadow: 3px 4px 5px ;
  }
  
  .nav-link,
  .button {
    color: darkgrey;
    font-size: 13px;
    text-decoration: none;
    font-family: 'NeoDunggeunmoPro-Regular';
  }
  
  
  .button-register {
    color: aliceblue;
  }
  
  .button-mypage {
    color: aliceblue;
  }
  
  .button-login {
    color: aliceblue;
  }
.main-image{
  height: 50px;
  width: 80px;
}
.open .right-buttons {
  display: flex;
}
  .user-rectangle{
    display: flex;
    flex-direction: column;
    height: 1.8cm;
    width: 80%;
    background-color: #9AB1F4;
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
    margin: 20px;
    width: 30px;
    height: 30px;
    
  }
  a {
  text-decoration: none;
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
    background-color: #9AB1F4;
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
    text-decoration: none;
  }
  
  .button {
    margin-left: 1px;
    margin-right: 10px;
    border-radius: 5px;
    border: none;
  }
  
  .cmp-text {
    font-size: 19px;
    color: #1A1D25;
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
    padding-left : 30px;
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
  background-color: #FFF;
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
  background-color: #9AB1F4;
  margin: 0 auto; /* 가로 중앙 정렬 */
  border-radius: 15px; /* 각 모서리를 둥글게 만듦 */

}
</style>




  