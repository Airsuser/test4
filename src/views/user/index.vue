<template>
  <div class="app-container">
    <el-card>
      <div class="search">
        <el-form :model="pageInfo" :inline="true" ref="queryForm" size="small">
          <el-form-item label="用户姓名" prop="name">
            <el-input v-model="pageInfo.name" placeholder="请输入" clearable />
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="pageInfo.phone" placeholder="请输入" clearable />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="(pageInfo.pageNo = 1), init()">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="usermodel = true, userstate = 'add'">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="tableData" v-loading="loading" element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" border>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="phone" label="手机号">
        </el-table-column>
        <el-table-column prop="imtName" label="代理姓名">
        </el-table-column>
        <el-table-column prop="imtPhone" label="代理手机号">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini"
              @click="usermodel = true, userstate = 'edit', userobj = scope.row">编辑</el-button>
            <el-button type="text" size="mini"
              @click="usermodel = true, userstate = 'editmm', userobj = scope.row">修改密码</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="pageInfo.pageNo" :page-sizes="[10, 50, 100, 200]" :page-size="pageInfo.pageSize" background
        layout="total, sizes, prev, pager, next, jumper" :total="total" class="msgpaginationcontainer">
      </el-pagination>
    </el-card>
    <userModel v-if="usermodel" :usermodel="usermodel" :userstate="userstate" :userobj="userobj"
      @useremit="usermodel = false" />
  </div>
</template>

<script>
import { userpage } from "@/api/table"
import userModel from "@/views/user/userModel.vue"
export default {
  components: {
    userModel
  },
  data() {
    return {
      loading: false,
      total: 0,
      pageInfo: {
        name: null,
        phone: null,
        pageSize: 10,
        pageNo: 1
      },
      tableData: [],
      usermodel: false,
      userstate: null,
      userobj: {}
    };
  },
  created() {
    this.init()
  },
  methods: {
    // 删除
    remove(row) {
      this.$modal
        .confirm("此操作将删除该人员关联, 是否继续?")
        .then(function () { })
        .then(() => {
          crcDoctorInforemove([row.crcDoctorId]).then(res => {
            this.init();
            this.$modal.msgSuccess("删除成功");
          });
        })
        .catch(() => { });
    },
    init() {
      this.loading = true;
      userpage(this.pageInfo)
        .then(res => {
          this.tableData = res.data.records;
          this.total = res.data.totalRecords * 1;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    },
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
      this.init();
    },
    handleCurrentChange(val) {
      this.pageInfo.pageNo = val;
      this.init();
    }
  }
};
</script>

<style lang="scss" scoped></style>
