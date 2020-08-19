<template>
  <div class="maps">
    <div id="all-map" class="map"></div>
    <div class="show_po">
      <p>标记坐标：{{center}}</p>
      <p>当前点击位置：{{position}}</p>
    </div>
    <div class="introduce">
      <h4>七步云游高德地图（vue）</h4>
      <ul>
        <li>1、官网申请密匙key。</li>
        <li>
          2、index.html文件引入script：
          <div>
            &lt;script src="https://webapi.amap.com/maps?v=1.4.15&key=你申请的key"&gt;&lt;/script&gt;
            &lt;script&gt; src="https://webapi.amap.com/ui/1.0/main.js?v=1.0.11"&gt;&lt;/script&gt;
          </div>
        </li>
        <li>
          3、webpack.base.config.js文件加入：
          <div>
            externals: {
            "AMap": "AMap",
            },
          </div>
        </li>
        <li>
          4、组件中引入高德地图
          <div>import AMap from 'AMap'</div>
        </li>
        <li>
          5、组件中创建容器：
          <div>
            &lt;div id="map" class="map"&gt;&lt;/div&gt;
            .map{
            width:600px;
            height:600px;
            }
          </div>
        </li>
        <li>
          6、组件中创建方法：
          <div>
            map(){
            var map = new AMap.Map('all-map', {
            center: [116.397428, 39.90923],
            resizeEnable: true,
            zoom: 10
            });
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
            map.addControl(new AMap.ToolBar())
            map.addControl(new AMap.Scale())
            })
            }
          </div>
        </li>
        <li>
          7、mounted生命周期调用：
          <div>
            mounted(){
            this.map()
            }
          </div>
        </li>
        <li>
            另：更多地图操作详见高德官网JS API
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AMap from "AMap"; //引入高德地图
export default {
  name: "maps",
  data() {
    return {
      position: "0,0",
      center: "112.744372, 25.736049",
    };
  },
  mounted() {
    this.GaodeMap();
  },
  methods: {
    GaodeMap() {
      let that = this;
      //高德地图初始化
      var marker,
        map = new AMap.Map("all-map", {
          center: [112.764613, 25.747146], //经纬度
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 12, //初始化地图层级
        });
      AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function () {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });
      //增加地图点标记
      marker = new AMap.Marker({
        icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [112.744372, 25.736049],
      });
      marker.setMap(map);
      //为地图注册click事件获取鼠标点击出的经纬度坐标
      map.on("click", function (e) {
        that.position = `${e.lnglat.lng},${e.lnglat.lat}`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.maps {
  width: 100%;
  overflow: hidden;
  .map {
    width: 100%;
    height: 300px;
    z-index: 5;
  }
  .show_po {
    padding: 0 10px;
    p {
      margin-bottom: 10px;
      &:first-child {
        margin-top: 10px;
      }
    }
  }
  .introduce {
    padding: 10px;
    li {
      margin: 10px 0;
    }
    div {
      background-color: #fafafa;
      color: black;
      padding: 10px 20px;
      word-break: break-word;
    }
  }
}
</style>