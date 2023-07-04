<template>
  <div class="login-container">
    <div class="login-main">
      <br>
      <img class="user-image" src="@/assets/login.png" alt="유저 이미지" /><br><br>
      <label for="username" class="input-label">아이디</label>
      <input class = "text-area" type="text" id="username" v-model="username" /><br /><br>
      <label for="password" class="input-label">비밀번호</label>
      <input class = "text-area" type="password" id="password" v-model="password" /><br />
      <br><br>
      <div class="link-container">
        <router-link to="/signpage" class="login-main" style="font-size: 14px;">회원가입</router-link>
        <button @click="login" class="login-main1">로그인</button>
      </div>
      <img class="user-image1" src="@/assets/naver.png" alt="유저 이미지" /><br><br>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ""
      };
    },
    methods: {
      login() {
      // 실제로는 백엔드로 로그인 정보를 전송해야 하지만,
      // 여기서는 로컬 스토리지에 저장된 회원 정보를 검사하여 시뮬레이션합니다.
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.username === this.username && user.password === this.password) {
          // 로그인 성공
          this.$router.push("/"); // home.vue로 이동
        } else {
          // 로그인 실패
          alert("아이디나 비밀번호를 잘못 입력하셨습니다")
        }
      } else {
        // 회원 정보가 없는 경우
        alert("회원 정보를 찾을 수 없습니다. 회원가입을 해주세요")
      }
    }
    }
  };
  </script>
<style>

.text-area { 
  border-top-width : 0cm;
  border-right-width : 0cm;
  border-bottom-width: 0.1mm;
  width: 250px;
}

.link-container {
  display: flex;
  justify-content: space-between;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150vh;
}

.login-main1{
  background-color: white;
  border-top-width : 0cm;
  border-right-width : 0cm;
  border-bottom-width: 0mm;
  border-left-width : 0cm;
  font-family: "NeoDunggeunmoPro-Regular"
}

.login-main {
  text-align: center;
  font-family: "NeoDunggeunmoPro-Regular"
}

.input-label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-family: "NeoDunggeunmoPro-Regular"
}

.user-image {
  width: 150px; /* 조절할 크기 설정 */
  height: 150px; /* 조절할 크기 설정 */
  margin-bottom: 20px;
}
.user-image1 {
  width: 50px; /* 조절할 크기 설정 */
  height: 50px; /* 조절할 크기 설정 */
  margin-bottom: 20px;
}


</style>
  