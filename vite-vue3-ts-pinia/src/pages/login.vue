<template>
  <div class="login">
    <h3> 登录页 </h3>
    <div class="form">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        size="default"
        class="rule"
        status-icon
      >
        <el-form-item label="登录名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="admin" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="123456"
            type="password"
            show-password
            clearable
          />
        </el-form-item>
        <el-form-item class="btn">
          <el-button
            :loading="loading"
            type="primary"
            :loading-icon="Eleme"
            @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts" name="LoginPage">
  import { reactive, ref } from 'vue';
  import type { FormInstance, FormRules } from 'element-plus';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/user';
  import { ElMessage } from 'element-plus';
  import { Eleme } from '@element-plus/icons-vue';
  import api from '@/api';

  interface User {
    name: String;
  }
  interface IResponse<P = {}> {
    code: number;
    message: string;
    data: P;
  }

  const userStore = useUserStore();
  const router = useRouter();
  const ruleFormRef = ref<FormInstance>();
  let loading = ref(false);
  const ruleForm = reactive({
    name: '',
    password: ''
  });

  const rules = reactive<FormRules>({
    name: [
      { required: true, message: '请输入登录名', trigger: 'blur' },
      { min: 2, max: 8, message: '登录名长度2-8位', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 3, max: 12, message: '密码长度3-12位', trigger: 'blur' }
    ]
  });

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    if (ruleForm.name && ruleForm.password) {
      loading.value = true;
    }

    let result: Boolean = await formEl.validate((valid: Boolean) => {
      return valid;
    });

    if (result) {
      let res: IResponse = await api
        .login(ruleForm.name, ruleForm.password)
        .then((res) => res)
        .catch(() => {});
      loading.value = false;
      if (res.code === 0 && res.data) {
        userStore.$patch((state: User) => {
          state.name = ruleForm.name;
        });
        // userStore.name = ruleForm.name;
        // userStore.updateName(ruleForm.name);
        ElMessage({
          message: res.message,
          duration: 1000,
          type: 'success',
          onClose: function () {
            router.push('/home');
          }
        });
      } else {
        ElMessage.error(res.message);
      }
    }
  };
</script>

<style lang="less" scoped>
  .login {
    padding-top: 100px;
    h3 {
      padding: 10px 0;
      font-size: 20px;
    }
    .form {
      padding: 20px 0 0 0px;
      display: flex;
      justify-content: center;
      .rule {
        width: 500px;
        margin-left: -100px;
        .btn {
          margin-left: -10px;
          ::v-deep .el-form-item__content {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
</style>
