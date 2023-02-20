<template>
  <img class="logo" alt="logo" src="./../assets/logo.png" />
  <UsePinia />
  <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
  <div class="upload">
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="/upload"
      :on-preview="handlePreview"
      :on-success="handleSuccess"
      list-type="picture"
      accept=".jpg, .png"
    >
      <el-button type="primary">上传</el-button>
      <template #tip>
        <div class="el-upload__tip"> 只支持 jpg/png 图片</div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" name="IndexPage" setup>
  import UsePinia from '@/components/UsePinia.vue';
  import { ref } from 'vue';
  import type { UploadProps, UploadUserFile } from 'element-plus';

  interface Response {
    code: number;
    message: string;
    data: {
      url: string;
      name: string;
    };
  }

  const fileList = ref<UploadUserFile[]>([
    {
      name: 'food.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }
  ]);

  const handlePreview: UploadProps['onPreview'] = (file) => {
    window.open(file.url);
  };
  let handleSuccess = (res: Response) => {
    let len: number = fileList.value.length;
    fileList.value[len - 1].url = res.data.url;
  };
</script>

<style lang="less" scoped>
  .logo {
    padding-top: 50px;
  }
  .upload {
    padding: 20px;
  }
</style>
