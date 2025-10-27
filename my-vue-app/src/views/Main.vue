<template>
  <div class="common-layout">
      <el-container class="lay-container">
        <!-- 自定义左侧组件 -->
         <common-aside />
         <el-container>
          <el-header class="el-header">
            <common-header />
          </el-header>
            <common-tag />
          <el-main class="right-main">
            <router-view></router-view>
          </el-main>
         </el-container>
      </el-container>
  </div>
</template>

<script setup name='Main'>
  import CommonAside from '@/components/Common-aside.vue'
  import CommonHeader from '@/components/Common-header.vue'
  import CommonTag from '@/components/Common-tag.vue';

</script>


<style scoped lang="less">
  .common-layout,.common-layout{
    height: 100%;
  }
  .el-header{
    background-color: #333;
  }
  .el-main{
    background-color: #eee;
  }


</style>