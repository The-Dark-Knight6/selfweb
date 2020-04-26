<template>
  <div class="listen">
      <div class="rota_img">
          <img src="../../assets/img/adfqew2514.jpg" alt="">
      </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(v,i) in data" :key="i" :title="v" :name="String(i)">
        <template slot="title">
          <i class="el-icon-trophy"></i>
          <span class="margin_spam">{{v}}</span>
        </template>
        <div class="box_mus">
          <el-button icon="el-icon-headset" type="primary" size="mini" plain @click="trying(i)">试听</el-button>
          <el-button icon="el-icon-download" type="success" size="mini" plain @click="down(i)">下载</el-button>
          <el-button
            icon="el-icon-chat-square"
            type="warning"
            size="mini"
            plain
            @click="commend(v)"
          >评论</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-dialog :title="commend_title" :visible.sync="dialogVisible" width="60%">
      <el-input type="textarea" :rows="10" v-model="descretion" placeholder="随乐而起，有感而发。"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="sure_submit" size="mini">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "listen",
  data() {
    return {
      commend_title: "",
      descretion: "",
      dialogVisible: false,
      data: [],
      activeName: "0"
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    sure_submit() {
      let data = this.descretion;
      if (data.trim()) {
        this.$message({
          type: "success",
          message: "您的提交已经反馈给后台，感谢您的参与！"
        });
        this.dialogVisible = false;
      } else {
        this.$message({
          type: "error",
          message: "请填写您的评论！"
        });
      }
    },
    //评论留言（假）
    commend(par) {
      this.commend_title = `评论《${par}》`;
      this.dialogVisible = true;
    },
    //试听
    trying(par) {
      let arr = ["qing", "yi", "shuo", "shen"],
        url = this.api[arr[par]];
      window.open(url);
    },
    //下载歌曲
    down(par) {
      let arr = ["qing", "yi", "shuo", "shen"],
        url = this.api[arr[par]],
        name = url.split("sound")[1].replace("/", ""),
        a = document.createElement("a");
      a.href = url;
      a.download = name;
      a.click();
    },
    getdata() {
      let url = this.api.the_music;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.data = my.list;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes identifier {
    from{
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
}
.listen {
  padding: 15px;
  .rota_img{
      text-align: center;
      margin: 12px 0;
      img{
          width: 50%;
          border-radius: 50%;
          animation: identifier 5s linear infinite;
      }
  }
  .margin_spam {
    margin-left: 12px;
  }
  .box_mus {
    display: flex;
    align-items: center;
  }
}
</style>