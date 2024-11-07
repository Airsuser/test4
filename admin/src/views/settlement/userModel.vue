<template>
  <div>
    <el-dialog :title="userstate == 'add' ? '新增申报结算' : '编辑申报结算'" :visible.sync="dialogVisible" width="600px"
      :close-on-click-modal="false">
      <el-form ref="elForm" :model="formData" :rules="rules" label-width="80px" size="small">
        <el-form-item label="代理" prop="imtId">
          <el-select v-model="formData.imtId" placeholder="请选择" clearable filterable
            :style="{ width: '100%' }">
            <el-option v-for="(item, index) in userarr2" :key="index" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="年月" prop="date">
          <el-date-picker v-model="formData.date" type="monthrange" align="right" value-format="yyyy-MM" unlink-panels
            range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" :picker-options="pickerOptions" :style="{ width: '100%' }">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="用电量" prop="consumption">
          <el-input v-model="formData.consumption" placeholder="请输入" clearable :style="{ width: '100%' }">
          </el-input>
        </el-form-item>
        <el-form-item label="电费" prop="amount">
          <el-input v-model="formData.amount" placeholder="请输入" clearable :style="{ width: '100%' }">
          </el-input>
        </el-form-item>

      </el-form>
      <div slot="footer">
        <el-button size="small" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" size="small" @click="handelConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { intermediatorpage, edSettlementcreate } from "@/api/table"
export default {
  props: {
    usermodel: {
      type: Boolean,
      default: false,
    },
    userstate: {
      type: String,
      default: ""
    },
    userobj: {
      type: Object,
      default: {}
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.usermodel;
      },
      set() {
        this.$emit("useremit");
        this.$refs["elForm"].resetFields();
      },
    },
  },
  data() {
    return {
      formData: {
        imtId: null,
        ymFrom: null,
        ymTo: null,
        date: [],
        consumption: null,
        amount: null
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
      rules: {
        consumption: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
        amount: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
        date: [
          {
            required: true,
            message: "请选择",
            trigger: "change",
          },
        ],
        imtId: [
          {
            required: true,
            message: "请选择",
            trigger: "change",
          },
        ],
      },
    };
  },
  created() {
    intermediatorpage({ pageSize: 100000, pageNo: 1 }).then(res => {
      this.userarr2 = res.data.records
    })
  },
  methods: {
    handelConfirm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        this.formData.ymFrom = this.formData.date[0]
        this.formData.ymTo = this.formData.date[1]
        edSettlementcreate(this.formData).then((res) => {
          this.$parent.init()
          this.dialogVisible = false
          this.$message({
            type: "success",
            message: "新增成功!",
          });
        });
      });
    },
  },
};
</script>

<style></style>
