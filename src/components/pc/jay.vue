<template>
  <div class="jay">
    <div class="theimg">
      <img src="../../assets/img/adfqew2514.jpg" alt />
    </div>
    <el-table :data="tableData" :cell-style="{'text-align':'center'}" size="mini" border>
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="歌名"></el-table-column>
      <el-table-column prop="aim" label="专辑"></el-table-column>
      <el-table-column prop="lyric" label="歌词" show-overflow-tooltip></el-table-column>
      <el-table-column label="热度">
        <template slot-scope="scope">
          <el-rate
            disabled
            show-score
            text-color="#ff9900"
            v-model="scope.row.like"
          >score-template="{scope.row.like}"</el-rate>
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
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="100"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "jay",
  data() {
    return {
      currentPage1: 1,
      tableData: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    handleCurrentChange(e) {
      console.log(e);
    },
    down() {
      this.$message("未完成的功能！");
    },
    getdata() {
      let url = this.api.songs;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.tableData = my.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  margin:12px 0;
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
}
/deep/ .el-table th {
  text-align: center;
}
</style>