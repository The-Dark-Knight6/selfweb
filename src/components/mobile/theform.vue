<template>
  <div class="theform">
    <el-backtop></el-backtop>
    <div class="teens">
      <h2>少年，留下你的足迹！</h2>
      <img :src="thegood" alt="imgs" />
    </div>
    <div class="thetop">
      <el-timeline reverse="false">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="handle(activity)"
        >{{activity.contents}}</el-timeline-item>
      </el-timeline>
    </div>
    <el-form
      :model="ruleForm"
      size="mini"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :disabled="!thecount"
    >
      <el-form-item label="昵称：" prop="titles">
        <el-input v-model="ruleForm.titles" maxlength="10" show-word-limit placeholder="请输入您的昵称"></el-input>
      </el-form-item>
      <el-form-item label="段位：" prop="types">
        <el-radio-group v-model="ruleForm.types">
          <el-radio v-for="(v,i) in type_box" :key="i" :label="v.id">{{v.name}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="内容：" prop="contents">
        <el-input
          type="textarea"
          placeholder="请输入您评论的具体内容"
          v-model="ruleForm.contents"
          maxlength="50"
          show-word-limit
          :rows="6"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" v-show="thecount">立即评论</el-button>
        <el-button v-show="!thecount" disabled>{{counttime}}s可继续评论</el-button>
        <el-button @click="resetForm('ruleForm')" v-show="thecount">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thegood: this.api.whadsfci,
      thecount: true,
      activities: [],
      type_box: [
        {
          name: "拿铁",
          id: 0,
        },
        {
          name: "青铜",
          id: 1,
        },
        {
          name: "白银",
          id: 2,
        },
        {
          name: "黄金",
          id: 3,
        },
        {
          name: "铂金",
          id: 4,
        },
        {
          name: "钻石",
          id: 5,
        },
        {
          name: "星耀",
          id: 6,
        },
        {
          name: "王者",
          id: 7,
        },
      ],
      ruleForm: {
        titles: "",
        types: [],
        contents: "",
      },
      counttime: 5, //倒计时
      rules: {
        titles: [
          { required: true, message: "请输入您的昵称！", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        types: [
          { required: true, message: "请选择您的段位！", trigger: "change" },
        ],
        contents: [
          { required: true, message: "请填写您的评论内容！", trigger: "blur" },
        ],
      },
    };
  },
  //   引入单页面刷新
  inject: ["reload"],
  mounted() {
    this.getdata();
  },
  methods: {
    //处理数据显示格式
    handle(val) {
      let now = new Date(Number(val.time));
      let time = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      return `${time}-${val.titles}(${this.thetype(val.types)})`;
    },
    //段位展示
    thetype(val) {
      switch (Number(val)) {
        case 1:
          return "青铜";
          break;
        case 2:
          return "白银";
          break;
        case 3:
          return "黄金";
          break;
        case 4:
          return "铂金";
          break;
        case 5:
          return "钻石";
          break;
        case 6:
          return "星耀";
          break;
        case 7:
          return "王者";
          break;
        default:
          return "拿铁";
      }
    },
    //获取评论数据
    getdata() {
      let url = this.api.commonds;
      this.$http.get(url).then((res) => {
        let my = res.data;
        if (my.status) {
          // console.log(my.data);
          this.activities = my.data;
        }
      });
    },
    //提交
    submitForm(formName) {
      let url = this.api.addcommond,
        that = this,
        params = {};
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.thecount = false;
          let settime = setInterval(() => {
            this.counttime--;
            if (this.counttime <= 0) {
              this.thecount = true;
              clearInterval(settime);
              that.reload();
              window.scrollTo(0,0);
            }
          }, 1000);
          params = that.ruleForm;
          that.$http.post(url, { params: params }).then((res) => {
            let my = res.data;
            if (my.status == 1) {
              that.$message.success("成功");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //时间
    gettime() {
      let time = new Date();
      let year = time.getFullYear();
      let month =
        time.getMonth() >= 10 ? time.getMonth() + 1 : `0${time.getMonth() + 1}`;
      let day = time.getDate();
      let hour = time.getHours();
      let minuter = time.getMinutes();
      let second = time.getSeconds();
      return `${year}-${month}-${day} ${hour}:${minuter}:${second}`;
    },
    //充值
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.teens {
  text-align: center;
  margin: 10px 0 20px 0;
  img {
    margin: 20px 0 10px 0;
  }
}
.thetop {
  padding: 0 40px;
}
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