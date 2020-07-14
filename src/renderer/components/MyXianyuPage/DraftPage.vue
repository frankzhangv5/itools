<template>
  <el-container>
    <el-header>
      <span>待整理商品</span>
    </el-header>
    <el-main>
      <el-col :span="12">
        <el-row class="row-preview">
          <my-goods-preview id="preview" :url="url" class="goods-preview"></my-goods-preview>
        </el-row>
        <el-row class="row-actions">
          <el-col :span="8">
            <el-button @click="handleGoBack">后退</el-button>
          </el-col>
          <el-col :span="8">
            <el-button @click="handleParseGoods">解析商品</el-button>
          </el-col>
          <el-col :span="8">
            <el-button @click="handleGoForward">前进</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-form ref="form" :model="form" label-width="80px" size="small">
          <el-form-item label="标题">
            <el-input type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <el-form-item label="规格">
            <el-input type="textarea" v-model="form.specs"></el-input>
          </el-form-item>
          <el-form-item label="参数">
            <el-input type="textarea" v-model="form.params"></el-input>
          </el-form-item>
          <el-form-item label="海报">
            <el-row>
              <el-checkbox-group v-model="form.type">
                <el-col :span="8" v-for="o in 4" :key="o">
                  <el-checkbox :label="o" name="type">
                    <el-card :body-style="{ padding: '0px' }">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                      />
                    </el-card>
                  </el-checkbox>
                </el-col>
              </el-checkbox-group>
            </el-row>
          </el-form-item>
          <el-form-item label="详情">
            <el-row>
              <el-col :span="8" v-for="o in 4" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                </el-card>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
import MyGoodsPreview from "@/components/MyGoodsPreview.vue";

export default {
  props: ["url"],
  components: { MyGoodsPreview },
  name: "draft-page",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    handleParseGoods() {
      var wb = document.getElementById("preview");
      if (wb != null) {
        console.log(wb.getTitle());
        console.log(wb.getURL());
      }
    },
    handleGoBack() {
      var wb = document.getElementById("preview");
      if (wb != null && wb.canGoBack()) {
        wb.goBack();
      }
    },
    handleGoForward() {
      var wb = document.getElementById("preview");
      if (wb != null && wb.canGoForward()) {
        wb.goForward();
      }
    },
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
    }
  },
  mounted: function() {
    // console.log(this.$router);
    var wb = document.getElementById("preview");
    if (wb != null) {
      //开始加载事件监听
      wb.addEventListener("did-start-loading", () => {
        console.log("did-start-loading...");
      });
      //停止加载事件监听
      wb.addEventListener("did-stop-loading", () => {
        console.log("did-stop-loading...");

        //注入css
        //     wb.insertCSS(`
        // .title-blog {
        //     background: red !important;
        // }
        // `);
        //注入js脚本
        wb.executeJavaScript(`
        setTimeout(()=>{
          var divs = document.getElementsByClassName("coupon-btn get-coupon-btn");
          if (divs != null) {
            var couponBtnElem = divs[0];
            couponBtnElem.click();
          }
            }, 5000);
    `);
        //打开调试工具
        // wb.openDevTools();
      });
    }
  }
};
</script>

<style scoped>
.el-checkbox {
  margin-left: 30px;
}
.el-header {
  background-color: lightgray;
  height: 30px !important;
  line-height: 30px;
  text-align: left;
}
.el-main {
  border-left: lightgray;
  border-left-width: 1px;
  border-left-style: solid;

  padding: 0px;
  padding-top: 10px;
  margin: 0px;
  height: 666px;
}
.goods-preview {
  height: 540px;
  width: 360px;
  display: inline-flex;
}

.row-preview {
  height: 540px;
  /* line-height: 540px; */
  padding: 0px;
  margin: 0px;
  text-align: center;
}

.row-actions {
  text-align: center;
  padding: 16px;
}

.image {
  width: 100%;
  display: block;
}
</style>