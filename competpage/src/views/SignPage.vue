<template>
    <div class="signup-form">
      <h2 class = "sigin-title">회원 가입</h2>
  
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="name" placeholder="이름을 입력하세요" />
      </div>
  
      <div class="form-group">
        <label for="username">아이디</label>
        <input type="text" id="username" v-model="username" placeholder="아이디를 입력하세요" />
      </div>
  
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" placeholder="비밀번호를 입력하세요" />
      </div>

      <div class="form-group">
        <label for="password">비밀번호확인</label>
        <input type="password" id="password" v-model="confirmPassword" placeholder="비밀번호를 입력하세요" />
      </div>
  
      <div class="form-group">
        <label for="phone">전화번호</label>
        <input type="text" id="phone" v-model="phone" placeholder="전화번호를 입력하세요 ex) 01012345678" />
      </div>

      <div class="form-group">
        <label for="phone">나이</label>
        <input type="text" id="phone" v-model="age" placeholder="나이를 적으세요 ex) 23" />
      </div>
  
      <button @click="register" class="login-main">회원가입</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignPage",
    data() {
      return {
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        phone: "",
        age: ""
      };
    },
    methods: {
    register() {
      // 비밀번호 확인
      if (this.password !== this.confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      // 회원 가입 처리 로직을 추가해야 합니다.
      // 여기서는 간단한 예시로 로컬 스토리지에 회원 정보를 저장합니다.
      const user = {
        name: this.name,
        username: this.username,
        password: this.password,
        phone: this.phone,
        age : this.age
      };

      localStorage.setItem('user', JSON.stringify(user));
      alert('회원가입이 완료되었습니다.');
      this.$router.push("/loginpage");

      // 회원가입 후 로그인 페이지로 이동하거나 다른 작업을 수행할 수 있습니다.
    }
  }
  }
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
.form-group{
  font-family: "NeoDunggeunmoPro-Regular";

}

  .sigin-title {
    font-family: "PyeongChangPeace-Bold";
  }
  .signup-form {
    margin-top: 90px;
    margin-left: 380px;
  }
  
  .signup-form .form-group {
    margin-bottom: 15px;
  }
  
  .signup-form .form-group label {
    display: inline-block;
    font-weight: bold;
    width: 100px;
  }
  
  .signup-form .form-group input[type="text"],
  .signup-form .form-group input[type="password"] {
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .signup-form .login-main {
    display: inline-block;
    margin-left: 100px;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  