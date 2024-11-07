<template>
  <div class="app-container">
    <el-card>
      <div class="search">
        <el-form :model="pageInfo" :inline="true" ref="queryForm" size="small">
          <el-form-item label="代理" prop="imtId">
            <el-select v-model="pageInfo.imtId" placeholder="请选择" clearable filterable>
              <el-option v-for="(item, index) in userarr2" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年月" prop="date">
            <el-date-picker v-model="pageInfo.date" type="monthrange" align="right" value-format="yyyy-MM" unlink-panels
              range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" :picker-options="pickerOptions">
            </el-date-picker>
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
        <el-table-column prop="imtName" label="代理姓名">
        </el-table-column>
        <el-table-column prop="imtPhone" label="代理手机号">
        </el-table-column>
        <el-table-column prop="yearMonths" label="年月">
        </el-table-column>
        <el-table-column prop="consumption" label="用电量">
        </el-table-column>
        <el-table-column prop="amount" label="电费">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="relatedmodel = true, relatedobj = scope.row">相关申报信息</el-button>
            <el-button type="text" size="mini" @click="remove(scope.row)">删除</el-button>
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
    <relatedModel v-if="relatedmodel" :relatedmodel="relatedmodel" :relatedobj="relatedobj"
      @relatedemit="relatedmodel = false" />
  </div>
</template>

<script>
import { edSettlementpage, edSettlementdelete, intermediatorpage } from "@/api/table"
import userModel from "@/views/settlement/userModel.vue"
import relatedModel from "@/views/settlement/relatedModel.vue"
export default {
  components: {
    userModel,
    relatedModel
  },
  data() {
    return {
      loading: false,
      total: 0,
      pageInfo: {
        imtId: null,
        ymFrom: null,
        ymTo: null,
        date: [],
        pageSize: 10,
        pageNo: 1
      },
      pickerOptions: {
        shortcuts: [{
          text: '本月',
          onClick(picker) {
            picker.$emit('pick', [new Date(), new Date()]);
          }
        }, {
          text: '今年至今',
          onClick(picker) {
            const end = new Date();
            const start = new Date(new Date().getFullYear(), 0);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近六个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 6);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      userarr2: [],
      tableData: [],
      usermodel: false,
      userstate: null,
      userobj: {},
      // 相关
      relatedmodel: false,
      relatedobj: {}
    };
  },
  created() {
    this.init()
    intermediatorpage({ pageSize: 100000, pageNo: 1 }).then(res => {
      this.userarr2 = res.data.records
    })
  },
  methods: {
    // 删除
    remove(row) {
      this.$confirm('此操作将删除该结算, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        edSettlementdelete({ id: row.id }).then(res => {
          this.init();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        });
      })
    },
    init() {
      this.loading = true;
      if (this.pageInfo.date.length == 0) {
        this.pageInfo.ymFrom = null
        this.pageInfo.ymTo = null
      } else {
        this.pageInfo.ymFrom = this.pageInfo.date[0]
        this.pageInfo.ymTo = this.pageInfo.date[1]
      }

      edSettlementpage(this.pageInfo)
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
