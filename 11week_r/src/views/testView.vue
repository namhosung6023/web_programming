<template>
  <div class="test">
    <h1>This is an test page</h1>
    <!--데이터 바인딩-->
    <h2>Hello , {{title}}</h2>
    <!-- v-html -->
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
    <label>
        <input type = "checkbox" value="서울" v-model="checked"> 서울
    </label>
    <label>
        <input type = "checkbox" value="부산" v-model="checked"> 부산
    </label>
    <label>
        <input type = "checkbox" value="제주" v-model="checked"> 제주
    </label>
    <br>
    <span>체크한 지역: {{checked}} </span>

  </div>
</template>
<script>
export default {
    data() {
        return {
            title : 'Vue-Test',
            htmlString : '<p style =" color:red ">이것은 문자열 색을 지정하는 내용입니다.</p>',
            checked : []
        }
    }
}
</script>

