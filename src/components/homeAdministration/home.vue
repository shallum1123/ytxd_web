<template>
  <div class="content">
    <div class="header">
      <img src="../../assets/img/image.png" alt>
      <p>远通信德</p>
    </div>
    <div>
      <div class="box">
        <div class="left">
          <router-link to="/price" tag="li">图片管理</router-link>
          <router-link to="/content" tag="li">内容管理</router-link>
          <router-link to="/honor" tag="li">客户垂询数据</router-link>
        </div>
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick" class="tabb">
            <el-tab-pane label="首页图片" name="first">
              <el-button type="primary" style="height:40px;float:right" @click="push()">添加</el-button>
              <div class="tableEl">
                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                  <el-table-column type="index" label="序号" width="200"></el-table-column>
                  <el-table-column prop="fileTitle" label="图片名称" width="250"></el-table-column>
                  <el-table-column prop="fileSort" label="图片顺序" width="250"></el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="发布时间"
                    :formatter="dateFormat"
                    width="180"
                  ></el-table-column>
                  <!-- <el-table-column prop="tag" label="状态" width="250"></el-table-column> -->
                  <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">替换</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>

            <el-tab-pane label="合作伙伴" name="second">
              <el-button
                type="primary"
                style="height:40px;float:right"
                @click="push()"
                :row-class-name="tableRowClassName"
              >添加</el-button>
              <div class="tableEl">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column type="index" label="序号" width="200"></el-table-column>
                  <el-table-column prop="fileTitle" label="图片名称" width="250"></el-table-column>
                  <el-table-column prop="fileSort" label="图片顺序" width="250"></el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="发布时间"
                    :formatter="dateFormat"
                    width="180"
                  ></el-table-column>
                  <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">替换</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="公司资质" name="third">
              <el-button
                type="primary"
                style="height:40px;float:right"
                @click="push()"
                :row-class-name="tableRowClassName"
              >添加</el-button>
              <div class="tableEl">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column type="index" label="序号" width="200"></el-table-column>
                  <el-table-column prop="fileTitle" label="图片名称" width="250"></el-table-column>
                  <el-table-column prop="fileSort" label="图片顺序" width="250"></el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="发布时间"
                    :formatter="dateFormat"
                    width="180"
                  ></el-table-column>
                  <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">替换</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="知识产权" name="fourth">
              <el-button type="primary" style="height:40px;float:right" @click="push()">添加</el-button>
              <div class="tableEl">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column type="index" label="序号" width="200"></el-table-column>
                  <el-table-column prop="fileTitle" label="图片名称" width="250"></el-table-column>
                  <el-table-column prop="fileSort" label="图片顺序" width="250"></el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="发布时间"
                    :formatter="dateFormat"
                    width="180"
                  ></el-table-column>
                  <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">替换</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="totalSize"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="send">
      <el-button type="primary">保存</el-button>
      <el-button type="primary">取消</el-button>
    </div>
    <!-- 弹框-->
    <el-dialog :visible.sync="dialog">
      <el-form
        :model="formInline"
        :rules="rules"
        class="demo-form-inline"
        ref="formInline1"
        :inline="true"
      >
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="图片名称：" prop="fileTitle">
              <el-input v-model="formInline.fileTitle" placeholder="图片名称:" style="width:250px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="图片顺序：" prop="fileSort">
              <el-input v-model="formInline.fileSort" placeholder="图片顺序:" style="width:250px"></el-input>
              <!-- <el-table-column  label="发布时间" :formatter="dateFormat" width="180"></el-table-column> -->
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="6">
            <el-upload
              :action="actions"
              list-type="picture-card"
              accept="image/*"
              :limit="imgLimit"
              :file-list="productImgs"
              :multiple="isMultiple"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :on-exceed="handleExceed"
              :on-error="imgUploadError"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt>
            </el-dialog>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog =false">取消</el-button>
        <el-button type="primary" @click="postUpdata()">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialog1" :inline="true">
      <el-form :model="mondify" class="demo-form-inline" ref="formInline1" :inline="true">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="图片名称：">
              <el-input v-model="mondify.fileTitle" placeholder="图片名称:" style="width:250px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="图片顺序：">
              <el-input v-model="mondify.fileSort" placeholder="图片顺序:" style="width:250px"></el-input>
              <!-- <el-table-column  label="发布时间" :formatter="dateFormat" width="180"></el-table-column> -->
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="6">
            <el-upload
              :action="actions"
              list-type="picture-card"
              accept="image/*"
              :limit="imgLimit"
              :file-list="productImgs"
              :multiple="isMultiple"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :on-exceed="handleExceed"
              :on-error="imgUploadError"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt>
            </el-dialog>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog1 =false">取消</el-button>
        <el-button type="primary" @click="postUpdata1()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      currentPage4: 1,
      totalSize: 1,
      pageSize: 8,
      page: 1,
      actions: "/plat/upload/uploadFile",
      dialogImageUrl: "",
      dialogVisible: false,
      productImgs: [],
      isMultiple: true,
      imgLimit: 1,
      fileList2: [],
      formInline: {
        fileTitle: "",
        fileSort: ""
      },
      url:'',
      fileOldName: "",
      fileUploadName: "",
      uploadUrl: "",
      tabT: {},
      mondify: {
        fileTitle: "",
        fileSort: ""
      },
      fileId: "",
      categoryId: "",
      categoryId1: "",
      activeName: "first",
      dialog: false,
      dialog1: false,
      tableData: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      rules: {
        fileTitle: [
          { required: true, message: "请输入图片名称", trigger: "blur" }
        ],
        fileSort: [
          { required: true, message: "请输入图片顺序", trigger: "blur" }
        ]
      },
      iiii: "first",
      firstloadId: 10
    };
  },
  created() {
    // this.getData(this.firstloadId);
    this.getData(10);
  },
  methods: {
    handleSizeChange(val) {
      console.log(this.tabT.name);
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getData(this.categoryId)
      // if (this.tabT.name = "undefined") {
      //       this.getData();
      //     }
      //     if (this.tabT.name == "first") {
      //       this.getData();

      //     } else if (this.tabT.name == "second") {
      //       this.getData1();
      //     } else if (this.tabT.name == "third") {
      //       this.getData2();
      //     } else if (this.tabT.name == "fourth") {
      //       this.getData3();
      //     }
    },
    handleCurrentChange(val) {
      console.log(this.tabT.name);
      this.page = val;
      this.getData(this.categoryId)
      // if (this.tabT.name = "undefined") {
      //       this.getData();
      //     }
      //     if (this.tabT.name == "first") {
      //       this.getData()
      //     } else if (this.tabT.name == "second") {
      //       this.getData1();
      //     } else if (this.tabT.name == "third") {
      //       this.getData2();
      //     } else if (this.tabT.name == "fourth") {
      //       this.getData3();
      //     }
      console.log(`当前页: ${val}`);
    },
    handleRemove(file, fileList) {
      //移除图片
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      //预览图片时调用
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    beforeAvatarUpload(file) {
      //文件上传之前调用做一些拦截限制
      console.log(file);
      const isJPG = true;
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res, file) {
      //图片上传成功
      console.log(res);
      (this.fileOldName = res.fileOldName),
        (this.fileUploadName = res.fileUploadName),
        (this.uploadUrl = res.uploadUrl),
        console.log(file.raw);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleExceed(files, fileList) {
      //图片上传超过数量限制
      this.$message.error("上传图片不能超过1张!");
      console.log(file, fileList);
    },
    imgUploadError(err, file, fileList) {
      //图片上传失败调用
      console.log(err);
      this.$message.error("上传图片失败!");
    },
    // 转换获取时间
    dateFormat: function(row, column) {
      var data = row[column.property];
      if (data == undefined) {
        return "";
      }
      return moment(data).format("YYYY-MM-DD");
    },
    getData(parmas) {
      axios
        .get(
          "/plat/file/selectCategoryId?categoryId=" +
            parmas +
            "&rows=" +
            this.pageSize +
            "&page=" +
            this.page
        )
        // .get("/plat/file/selectCategoryId?categoryId=10")
        .then(res => {
          console.log(res);
          this.tableData = res.data.resultList;
          this.categoryId = res.data.resultList[0].categoryId;
          this.totalSize = res.data.totalSize;
        })
        .catch(err => {
          console.log(err);
        });
    },
    
    postUpdata(parmas) {
      // this.getData(this.iiii);
      // console.log(this.iiii);
      this.dialog = false;
      axios
        .post("/plat/file/add", {
          fileTitle: this.formInline.fileTitle,
          fileSort: this.formInline.fileSort,
          categoryId: this.categoryId,
          fileId: this.fileId,
          realName: this.fileOldName,
          uploadName: this.fileUploadName,
          url: this.uploadUrl
        })
        .then(res => {
          console.log(res);
         this.getData(this.categoryId)
        })
        .catch(err => {
          console.log(err);
        });
    },
    postUpdata1() {
      (this.dialog1 = false),
        axios
          .post("/plat/file/add", {
            fileTitle: this.mondify.fileTitle,
            fileSort: this.mondify.fileSort,
            categoryId: this.categoryId1,
            fileId: this.fileId,
            realName: this.fileOldName,
            uploadName: this.fileUploadName,
            url: this.uploadUrl
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    },
    //添加轮播图
    push() {
      this.dialog = true;
    },
    indexMethod(index) {
      return index * 1;
    },
    handleEdit(index, row) {
      console.log(row);
      (this.dialog1 = true), (this.mondify = row);
      this.fileId = row.fileId;
      this.url= row.url;
      this.categoryId1 = row.categoryId;
      console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(this.tabT.name);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          axios
            .get("/plat/file/delete?fileId=" + row.fileId, {
              // fileId: row.fileId
            })
            .then(res => {
              // if (name == 'first')

              // this.getData(name)
              // console.log(this.getData(name))
              let categoryId = row.categoryId
              // console.log(categoryId)
              // var tab = [];
              // tab["first"] = 10;
              // tab["second"] = 20;
              // tab["third"] = 30;
              // tab["fourth"] = 40;
              this.getData(categoryId);

              // console.log(this.iiii)
              // this.getData(this.iiii)
            })
            // this.$route.go(0)
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    handleClick(tab, event) {
      // this.tabT = tab;
      // if (tab.name == "first" || "") {
      //   this.getData();
      // } else if (tab.name == "second") {
      //   this.getData1();
      // } else if (tab.name == "third") {
      //   this.getData2();
      // } else if (tab.name == "fourth") {
      //   this.getData3();
      // }
      // var tabValue = {

      // };

      // console.log('tag aaa ', tab)
      let name = tab.name;
      // if (name == 'first')

      // this.getData(name)
      // console.log(this.getData(name))

      tab["first"] = 10;
      tab["second"] = 20;
      tab["third"] = 30;
      tab["fourth"] = 40;
      // this.categoryId = tab[name];
      // console.log(this.categoryId);
      this.getData(tab[name]);
      // console.log(this.getData(tab[name]))

      // let curiIndex = 'a'

      // console.log(this.iiii)

      // console.log();
      // console.log(tab);
    },
    handleExceed(files, fileList) {
      console.log(files, fileList);
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  }
};
</script>
<style scope>
.tabb {
  margin-left: 10px;
  margin-top: 10px;
}
.block {
  float: right;
}
.left li {
  list-style: none;
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: aliceblue;
  margin-top: 20px;
}
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  /* background: linear-gradient(right,#1ba784, #45b787);  */
  background: #5698c3;
  color: aliceblue;
  display: flex;
}
.header img {
  width: 12%;
  padding: 3px;
}
.header p {
  width: 78%;
  text-align: center;
}
.nairong {
  height: 100%;
  padding: 20px;
}
.box {
  display: flex;
}
.content {
  width: 100%;
  height: 100%;
}
.left {
  min-width: 200px;
  height: calc(100vh - 0px);
  background: #5698c3;
  /* height: 100%; */
  /* background: linear-gradient(top,#45b787, #1a6840);  */

  /* background: #1ba784; */
}
.left :hover {
  background: #2f90b9;
}
.update {
}
.right {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
}
.send {
  margin-top: 20px;
  float: right;
}
.tableEl {
  padding: 10px;
}
.upload-demo1 {
  text-align: left;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>