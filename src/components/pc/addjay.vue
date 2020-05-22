<template>
  <div class="addjay">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      size="mini"
    >
      <el-form-item label="歌曲名称：" prop="song">
        <el-input v-model="ruleForm.song"></el-input>
      </el-form-item>
      <el-form-item label="所属专辑：" prop="album">
        <el-input v-model="ruleForm.album"></el-input>
      </el-form-item>
      <el-form-item label="歌词：" prop="lyric">
        <el-input v-model="ruleForm.lyric"></el-input>
      </el-form-item>
      <el-form-item label="评分：">
        <el-rate v-model="ruleForm.hot" :colors="colors"></el-rate>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addjay",
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      ruleForm: {
        song: "",
        album: "",
        lyric: "",
        hot: 3
      },
      rules: {
        song: [
          { required: true, message: "请输入歌曲名称", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        album: [
          { required: true, message: "请输入歌曲所属专辑", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        lyric: [
          { required: true, message: "请输入歌词副歌", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("children", this.ruleForm);
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
.el-input {
  width: auto;
}
</style>