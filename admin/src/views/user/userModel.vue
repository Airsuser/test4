<template>
  <div>
    <el-dialog :title="userstate == 'add' ? '新增用户' : '编辑用户'" :visible.sync="dialogVisible" width="600px"
      :close-on-click-modal="false">
      <el-form ref="elForm" :model="formData" :rules="rules" label-width="80px" size="small">
        <el-form-item label="姓名" prop="name" v-if="userstate != 'editmm'">
          <el-input v-model="formData.name" placeholder="请输入" clearable :style="{ width: '100%' }">
          </el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone" v-if="userstate != 'editmm'">
          <el-input v-model="formData.phone" placeholder="请输入" clearable :style="{ width: '100%' }">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="userstate == 'add' || userstate == 'editmm'">
          <el-input v-model="formData.password" placeholder="请输入" clearable :style="{ width: '100%' }">
          </el-input>
        </el-form-item>
        <el-form-item label="代理" prop="intermediatorId" v-if="userstate != 'editmm'">
          <el-select v-model="formData.intermediatorId" placeholder="请选择" clearable filterable
            :style="{ width: '100%' }">
            <el-option v-for="(item, index) in userarr2" :key="index" :label="item.name" :value="item.id"></el-option>
          </el-select>
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
import { usercreate, userupdate, intermediatorpage, userchangePwd } from "@/api/table"
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
        id: null,
        phone: null,
        name: null,
        password: null,
        intermediatorId: null,
      },
      userarr2: [],
      rules: {
        phone: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    if (this.userstate == 'edit') {
      this.formData.phone = this.userobj.phone
      this.formData.name = this.userobj.name
      this.formData.id = this.userobj.id
      this.formData.intermediatorId = this.userobj.imtId
    }
    if (this.userstate == 'editmm') {
      this.formData.id = this.userobj.id
    }
    intermediatorpage({ pageSize: 100000, pageNo: 1 }).then(res => {
      this.userarr2 = res.data.records
    })
  },
  methods: {
    handelConfirm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        if (this.userstate == 'add') {
          usercreate(this.formData).then((res) => {
            this.$parent.init()
            this.dialogVisible = false
            this.$message({
              type: "success",
              message: "新增成功!",
            });
          });
        }
        if (this.userstate == 'edit') {
          userupdate(this.formData).then((res) => {
            this.$parent.init()
            this.dialogVisible = false
            this.$message({
              type: "success",
              message: "编辑成功!",
            });
          });
        }
        if (this.userstate == 'editmm') {
          userupdate(this.formData).then((res) => {
            this.$parent.init()
            this.dialogVisible = false
            this.$message({
              type: "success",
              message: "密码修改成功!",
            });
          });
        }

      });
    },
    init() {
      getConfig({ aid: this.aid }).then((res) => {
        this.formData.refreshToken = res.data.refreshToken;
        this.formData.AccessToken = res.data.accessToken;
      });
    },
  },
};
</script>

<style></style>
