<template>
  <div>
    <el-dialog :title="userstate == 'add' ? '新增代理' : '编辑代理'" :visible.sync="dialogVisible" width="600px"
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
      </el-form>
      <div slot="footer">
        <el-button size="small" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" size="small" @click="handelConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { intermediatorcreate, intermediatorupdate, intermediatorchangePwd } from "@/api/table"
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
        password: null
      },
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
      this.formData = JSON.parse(JSON.stringify(this.userobj))
    }
    if (this.userstate == 'editmm') {
      this.formData.id = this.userobj.id
    }

  },
  methods: {
    handelConfirm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        if (this.userstate == 'add') {
          intermediatorcreate(this.formData).then((res) => {
            this.$parent.init()
            this.dialogVisible = false
            this.$message({
              type: "success",
              message: "新增成功!",
            });
          });
        }
        if (this.userstate == 'edit') {
          intermediatorupdate(this.formData).then((res) => {
            this.$parent.init()
            this.dialogVisible = false
            this.$message({
              type: "success",
              message: "编辑成功!",
            });
          });
        }
        if (this.userstate == 'editmm') {
          intermediatorchangePwd(this.formData).then((res) => {
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

  },
};
</script>

<style></style>
