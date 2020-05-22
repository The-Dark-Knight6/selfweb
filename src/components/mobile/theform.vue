<template>
  <div class="theform">
    <el-form
      :model="ruleForm"
      size="mini"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="题目：" prop="titles">
        <el-input v-model="ruleForm.titles"></el-input>
      </el-form-item>
      <el-form-item label="类型：" prop="types">
        <el-radio-group v-model="ruleForm.types">
          <el-radio label="诗歌"></el-radio>
          <el-radio label="小说"></el-radio>
          <el-radio label="散文"></el-radio>
          <el-radio label="戏曲"></el-radio>
          <el-radio label="其它"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="内容：" prop="contents">
        <el-input type="textarea" v-model="ruleForm.contents"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button @click="down" size='mini' type='danger'>down_test</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        titles: "",
        types: [],
        contents: ""
      },
      rules: {
        titles: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        types: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        contents: [
          { required: true, message: "请填写活动形式", trigger: "blur" }
        ]
      }
    };
  },
  //   引入单页面刷新
  inject: ["reload"],
  methods: {
       down() {
      let url = this.api.imgs,
        name = 'shenshi',
        a = document.createElement("a");
      a.href = url;
      a.download = name;
      a.click();
    },
    submitForm(formName) {
      let url = this.api.mysql,
        params = {};
      this.$refs[formName].validate(valid => {
        if (valid) {
          params = this.ruleForm;
          this.$http.post(url, { params: params }).then(res => {
            let my = res.data;
            if (my.status == 1) {
              console.log(my.info);
              this.$message.success("成功");
              this.reload();
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.el-radio {
  margin: 0.5rem;
}
.theform {
  background-color: #fefef2;
  padding: 1rem 0.5rem;
}
.el-input {
  width: auto;
}
</style>