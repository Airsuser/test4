<template>
  <div class="app-container">
    <el-card>
      <div class="search">
        <el-form :model="reqData" :inline="true" ref="queryForm" size="mini">
          <el-form-item label="昵称" prop="crcName">
            <el-input
              v-model="reqData.crcName"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="(pageInfo.pageNum = 1), init()"
              >搜索</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button type="primary">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="tableData"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        border
      >
        <el-table-column
          prop="orgName"
          label="昵称"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="crcName" label="手机号" align="center">
        </el-table-column>

        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-delete"
              type="text"
              size="mini"
              style="color: #f56c6c"
              @click="remove(scope.row)"
              v-hasPermi="['orginfo:crcDoctorInfo:remove']"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.pageNum"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageInfo.pageSize"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        class="msgpaginationcontainer"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loading: false,
      total: 0,
      pageInfo: {
        pageNum: 1,
        pageSize: 10
      },
      tableData: [],
      reqData: {
        crcName: undefined
      },
      // 医生关联信息
      teamwork: false,
      teamworkstate: null,
      teamworklist: {}
    };
  },
  created() {},
  methods: {
    // 合作信息
    cooperation(row) {},
    // 删除
    remove(row) {
      this.$modal
        .confirm("此操作将删除该人员关联, 是否继续?")
        .then(function() {})
        .then(() => {
          crcDoctorInforemove([row.crcDoctorId]).then(res => {
            this.init();
            this.$modal.msgSuccess("删除成功");
          });
        })
        .catch(() => {});
    },
    init() {
      this.loading = true;
      crcDoctorInfolist({
        pageInfo: this.pageInfo,
        reqData: this.reqData
      })
        .then(res => {
          this.tableData = res.rows;
          this.total = res.total;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    },
    mechanism(e, row) {
      this.teamwork = !this.teamwork;
      this.teamworkstate = e;
      if (row) {
        this.teamworklist = row;
      }
    },
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
      this.init();
    },
    handleCurrentChange(val) {
      this.pageInfo.pageNum = val;
      this.init();
    }
  }
};
</script>

<style lang="scss" scoped></style>
