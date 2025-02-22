<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加品牌按钮 -->
      <el-button
        type="primary"
        size="default"
        icon="Plus"
        @click="addTrademark"
      >
        添加品牌
      </el-button>
      <!-- table -->
      <el-table style="margin: 10px 0" border :data="trademarkArr">
        <el-table-column
          label="序号"
          width="80px"
          align="center"
          type="index"
        ></el-table-column>
        <el-table-column label="品牌名称" prop="name"></el-table-column>
        <el-table-column label="品牌LOGO">
          <!-- 作用域插槽，自定义内容 -->
          <template #="{ row, $index }">
            <img
              :src="row.logoUrl"
              alt="未有图片"
              style="width: 100px; height: 100px"
            />
          </template>
        </el-table-column>
        <el-table-column label="品牌操作">
          <template #="scope">
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="editTrademark"
            ></el-button>
            <el-button type="primary" size="small" icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器组件-->
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="limit"
        :page-sizes="[1, 2, 7, 9]"
        layout="prev, pager, next, jumper,->, sizes,total"
        :total="total"
        @change="getTradeList"
        background
      />
    </el-card>
    <el-dialog v-model="showDialog" title="添加品牌">
      <el-form style="width: 80%" label-width="80px">
        <el-form-item label="品牌名称">
          <el-input placeholder="请输入您的品牌名称" />
        </el-form-item>
        <el-form-item label="品牌LOGO">
          <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <!-- 具名插槽 -->
      <template #footer>
        <el-button type="primary" size="default" @click="cancel">
          取消
        </el-button>
        <el-button type="primary" size="default" @click="confirm">
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="" lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { reqHasTrademark } from '../../../api/product/trademark'
import type {
  TradeMarkResponseData,
  TradeMark,
} from '../../../api/product/trademark/type.ts'

// 当前页码
let pageNo = ref<number>(1)
// 每页展示多少数据
let limit = ref<number>(2)
// 数据总数
let total = ref<number>(1)
// data
let trademarkArr = ref<Array<TradeMark>>([])
// 是否展示对话框
let showDialog = ref<boolean>(false)

onMounted(() => {
  getTradeList()
})

const getTradeList = async () => {
  let result: TradeMarkResponseData = await reqHasTrademark(
    pageNo.value,
    limit.value,
  )
  if (result.status == 200) {
    total.value = result.total
    trademarkArr.value = result.data
    console.log('trade', trademarkArr.value)
  }
}

// 添加品牌
const addTrademark = () => {
  showDialog.value = true
}
// 编辑品牌
const editTrademark = () => {
  showDialog.value = true
}

// 对话框取消
const cancel = () => {
  showDialog.value = false
}
// 对话框确认
const confirm = () => {
  showDialog.value = false
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
