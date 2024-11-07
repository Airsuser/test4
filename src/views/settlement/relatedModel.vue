<template>
  <el-dialog :title="relatedobj.imtName + '相关申报信息'" :visible.sync="dialogVisible" width="750px" top="2%"
    :close-on-click-modal="false">
    <div class="search">
      <el-form :model="pageInfo" :inline="true" ref="queryForm" size="small">
        <el-form-item label="是否支付" prop="paid">
          <el-select v-model="pageInfo.paid" placeholder="请选择" clearable filterable>
            <el-option label="已支付" :value="true"></el-option>
            <el-option label="未支付" :value="false"></el-option>
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
      </el-form>
    </div>
    <el-table :data="tableData" v-loading="loading" element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" border>
      <el-table-column prop="userName" label="用户姓名">
      </el-table-column>
      <el-table-column prop="userPhone" label="用户手机号">
      </el-table-column>
      <el-table-column prop="yearMonth" label="年月">
      </el-table-column>
      <el-table-column prop="consumption" label="申报电量">
      </el-table-column>
      <el-table-column prop="paid" label="是否支付">
        <template slot-scope="scope">
          <div v-if="scope.row.paid">已支付</div>
          <div v-else>未支付</div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageInfo.pageNo"
      :page-sizes="[10, 50, 100, 200]" :page-size="pageInfo.pageSize" background
      layout="total, sizes, prev, pager, next, jumper" :total="total" class="msgpaginationcontainer">
    </el-pagination>
  </el-dialog>
</template>

<script>
import { edSettlementedPage } from "@/api/table"
export default {
  props: {
    relatedmodel: {
      type: Boolean,
      default: false,
    },
    relatedobj: {
      type: Object,
      default: {}
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.relatedmodel;
      },
      set() {
        this.$emit("relatedemit");
      },
    },
  },
  data() {
    return {
      loading: false,
      total: 0,
      pageInfo: {
        paid: null,
        ymFrom: null,
        ymTo: null,
        date: [],
        id: this.relatedobj.id,
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
    };
  },
  created() {
    console.log(this.relatedobj.imtName);

    this.init()
  },
  methods: {
    init() {
      this.loading = true;
      if (this.pageInfo.date.length == 0) {
        this.pageInfo.ymFrom = null
        this.pageInfo.ymTo = null
      } else {
        this.pageInfo.ymFrom = this.pageInfo.date[0]
        this.pageInfo.ymTo = this.pageInfo.date[1]
      }

      edSettlementedPage(this.pageInfo)
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
