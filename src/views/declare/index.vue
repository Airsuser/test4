<template>
  <div class="app-container">
    <el-card>
      <div class="search">
        <el-form :model="pageInfo" :inline="true" ref="queryForm" size="small">
          <el-form-item label="用户" prop="userId">
            <el-select v-model="pageInfo.userId" placeholder="请选择" clearable filterable>
              <el-option v-for="(item, index) in userarr1" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="代理" prop="imtId">
            <el-select v-model="pageInfo.imtId" placeholder="请选择" clearable filterable>
              <el-option v-for="(item, index) in userarr2" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否支付" prop="paid">
            <el-select v-model="pageInfo.paid" placeholder="请选择" clearable>
              <el-option label="已支付" :value="true"></el-option>
              <el-option label="未支付" :value="false"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年" prop="year">
            <el-date-picker v-model="pageInfo.year" value-format="yyyy" type="year" placeholder="选择年">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="月" prop="month">
            <el-select v-model="pageInfo.month" placeholder="请选择" clearable>
              <el-option label="一月" :value="1"></el-option>
              <el-option label="二月" :value="2"></el-option>
              <el-option label="三月" :value="3"></el-option>
              <el-option label="四月" :value="4"></el-option>
              <el-option label="五月" :value="5"></el-option>
              <el-option label="六月" :value="6"></el-option>
              <el-option label="七月" :value="7"></el-option>
              <el-option label="八月" :value="8"></el-option>
              <el-option label="九月" :value="9"></el-option>
              <el-option label="十月" :value="10"></el-option>
              <el-option label="十一月" :value="11"></el-option>
              <el-option label="十二月" :value="12"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="(pageInfo.pageNo = 1), init()">搜索</el-button>
          </el-form-item>

        </el-form>
      </div>
      <el-table :data="tableData" v-loading="loading" element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" border>
        <el-table-column prop="userName" label="用户姓名">
        </el-table-column>
        <el-table-column prop="userPhone" label="用户手机号">
        </el-table-column>
        <el-table-column prop="consumption" label="申报电量">
        </el-table-column>
        <el-table-column prop="yearMonth" label="申报年月">
        </el-table-column>
        <el-table-column prop="imtPhone" label="是否支付">
          <template slot-scope="scope">
            <span v-if="scope.row.paid">已支付</span>
            <span v-else>未支付</span>
          </template>
        </el-table-column>
        <el-table-column prop="imtName" label="代理手机号">
        </el-table-column>
        <el-table-column prop="imtPhone" label="代理手机号">
        </el-table-column>
        <!-- <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini"
              @click="usermodel = true, userstate = 'edit', userobj = scope.row">编辑</el-button>
          </template>
        </el-table-column> -->
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="pageInfo.pageNo" :page-sizes="[12, 24, 36, 72]" :page-size="pageInfo.pageSize" background
        layout="total, sizes, prev, pager, next, jumper" :total="total" class="msgpaginationcontainer">
      </el-pagination>
    </el-card>
    <userModel v-if="usermodel" :usermodel="usermodel" :userstate="userstate" :userobj="userobj"
      @useremit="usermodel = false" />
  </div>
</template>

<script>
import { electronDatapage, intermediatorpage, userpage } from "@/api/table"
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
        userId: null,
        imtId: null,
        paid: null,
        year: null,
        month: null,
        pageSize: 12,
        pageNo: 1
      },
      tableData: [],
      userarr1: [],
      userarr2: [],
      usermodel: false,
      userstate: null,
      userobj: {}
    };
  },
  created() {
    this.init()
    userpage({ pageSize: 100000, pageNo: 1 }).then(res => {
      this.userarr1 = res.data.records
    })
    intermediatorpage({ pageSize: 100000, pageNo: 1 }).then(res => {
      this.userarr2 = res.data.records
    })
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
      electronDatapage(this.pageInfo)
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
