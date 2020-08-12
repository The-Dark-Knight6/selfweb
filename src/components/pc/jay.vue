<template>
  <div class="jay">
    <div class="theimg">
      <img src="../../assets/img/adfqew2514.jpg" alt />
    </div>
    <el-form size="mini" label-width="80px">
      <p class="spacial_p">周杰伦世纪精选，万年永恒</p>
      <el-button
        style="float:right;margin-top:12px"
        type="primary"
        size="mini"
        @click="dialogVisible=!dialogVisible"
      >添加</el-button>
    </el-form>
    <el-table
      :data="tableData"
      :cell-style="{'text-align':'center'}"
      size="mini"
      border
      v-loading="loading"
    >
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="song" label="歌名"></el-table-column>
      <el-table-column prop="album" label="专辑"></el-table-column>
      <el-table-column prop="lyric" label="歌词" show-overflow-tooltip></el-table-column>
      <el-table-column label="热度">
        <template slot-scope="scope">
          <el-rate
            disabled
            show-score
            text-color="#ff9900"
            v-model="scope.row.hot"
          >score-template="{scope.row.hot}"</el-rate>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-link type="success" @click="down">下载</el-link>
          <!-- <el-button icon="el-icon-download" type="success" size="mini" plain @click="down">下载</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="total,prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="40%">
      <el-dialog width="30%" title="验证身份" :visible.sync="innerVisible" append-to-body>
        <el-form label-width="80px">
          <el-form-item label="密码：">
            <el-input v-model="the_password" show-password size="mini" placeholder="请输入添加密码："></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false" size="mini">取 消</el-button>
          <el-button type="primary" @click="sure_doadd" size="mini">确 定</el-button>
        </span>
      </el-dialog>
      <addjay v-if="dialogVisible" @children="father"></addjay>
    </el-dialog>
    <!-- <div>
      <wang v-model="detail" :isClear="isClear" @change="change"></wang>
      <el-button size="mini" type="warning" @click="publics">发布</el-button>
    </div>
    <input type="file" @change="toupload" /> -->
  </div>
</template>

<script>
import addjay from "./addjay"; //添加音乐的子组件
import wang from "./wang"; //富文本编辑器
export default {
  name: "jay",
  inject: ["reload"], //单页面刷新
  components: {
    addjay,
    wang
  },
  data() {
    return {
      detail: "",
      isClear: false,
      loading: false,
      innerVisible: false,
      dialogVisible: false,
      currentPage: 1,
      tableData: [],
      total: 1,
      the_password: "",
      par: {},
      contents: ""
    };
  },
  mounted() {
    this.getdata(1);
  },
  methods: {
    toupload(el) {
      console.log(el.target.files[0]);
      let data = new FormData();
      data.append("files", el.target.files[0]);
      let url = this.api.mysql,
        params = {};
      // params.contents = this.contents;
      this.$http.post(url, data).then(res => {
        let my = res.data;
        if (my.status == 1) {
          console.log(my);
        }
      });
    },
    publics() {
      // let url = this.api.mysql,
      //   params = {};
      // params.contents = this.contents;
      // this.$http.post(url, { params: params }).then(res => {
      //   let my = res.data;
      //   if (my.status == 1) {
      //     console.log(my);
      //   }
      // });
    },
    change(val) {
      // console.log(val);
      this.contents = val;
    },
    //确认添加password
    sure_doadd() {
      let params = {},
        url = this.api.addjay;
      params = this.par;
      if (this.the_password == "fulihua123") {
        this.$http.post(url, { params: params }).then(res => {
          let my = res.data;
          if (my.status == 1) {
            this.$message.success("添加成功！");
            this.reload();
          }
        });
      } else {
        this.$message("密码错误，请联系管理员或放弃添加！");
      }
    },
    //获取子组件传来的数据
    father(el) {
      this.innerVisible = true;
      this.par = el;
    },
    //前往第n页
    handleSizeChange(e) {
      this.getdata(e);
    },
    //前后翻页
    handleCurrentChange(e) {
      this.getdata(e);
    },
    down() {
      this.$message("未完成的功能！");
    },
    //获取数据
    getdata(page) {
      this.loading = true;
      let url = this.api.jay,
        params = {};
      params.page = page;
      this.$http.get(url, { params: params }).then(res => {
        let my = res.data;
        // console.log(my);
        this.tableData = my.data;
        this.total = my.total;
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin spacial_p {
  background: linear-gradient(to right, black, red);
  -webkit-background-clip: text;
  color: transparent;
}
.spacial_p {
  display: inline-block;
  color: #ccc;
  cursor: pointer;
  &:hover {
    @include spacial_p;
  }
}
.pagination {
  margin: 12px 0;
  text-align: center;
}
@keyframes identifier {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.jay {
  width: 100%;
  padding: 12px;
  .theimg {
    text-align: center;
    padding: 12px 0 25px 0;
    background-color: #fafafa;
    img {
      width: 200px;
      border-radius: 50%;
      animation: identifier 10s infinite linear;
    }
  }
}
/deep/ .el-table th {
  background: #f7faff;
  text-align: center;
}
</style>