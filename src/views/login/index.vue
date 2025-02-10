<template>
  <div class="login_container">
    <el-row>
      <!-- xs表示 宽度小于768px时，col占多少 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入"
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="login" lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '../../store/modules/user.ts'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
// 引入获取当前时间的函数
import { getTime } from '@/utils/time.ts'
// 获取路由器
let $router = useRouter()
// 获取表单检验对象
let loginForms = ref()
const userStore = useUserStore()
let loginForm = reactive({ username: 'admin', password: '111111' })
// 定义变量控制按钮加载效果
let loading = ref(false)
// 登录按钮回调
const login = async () => {
  // 保证全部表单项校验通过再发请求
  await loginForms.value.validate()

  // 加载效果：开始加载
  loading.value = true
  try {
    // 保证登录成功
    await userStore.userLogin(loginForm)
    // 编程式导航跳转到展示数据的首页
    $router.push('/')
    // 登录成功提示信息
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `Hi,${getTime()}好`,
    })
    // 登录成功加载效果消失
    loading.value = false
  } catch (error) {
    // 登录失败加载效果消失
    loading.value = false
    // 登录失败的提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

// 自定义校验规则函数
const validatorPass = (rule: any, value: any, callback: any) => {
  // rule:校验规则
  // value:表单元素文本内容
  // callback:函数，符合条件，放行通过，不符合条件，注入错误提示信息
  if (value.length >= 5 && value.length <= 10) {
    //  /^\d{5,10}$/.test(value)   5~10位 数字,
    callback()
  } else {
    callback(new Error('密码长度为5~10位'))
  }
}

// 定义表单校验需要配置对象
const rules = reactive({
  username: [
    {
      required: true,
      min: 5,
      max: 10,
      message: '长度在 5 ~ 10 之间',
      trigger: 'change',
    },
  ],
  password: [
    // UI组件提供的检验
    // { required: true,min: 5,max: 10,message: '长度在 5 ~ 10 之间',trigger: 'change',},
    // 自定义检验规则
    { validator: validatorPass, trigger: 'change' },
  ],
})
</script>

<style scope lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
