<template>
  <div>
    <el-button round @click="dialogFormVisible = true">登录</el-button>

    <el-dialog title="登录" :visible.sync="dialogFormVisible" center>
      <!-- 插入测试 -->
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="num">
          <el-input v-model.number="ruleForm2.num"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm2.pass"
            auto-complete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="记住密码" prop="delivery">
          <el-switch v-model="ruleForm2.delivery"></el-switch>
        </el-form-item>
        <span><a>忘记密码？</a></span>
      </el-form>
      <!-- 插入测试 -->

      <div slot="footer" class="dialog-footer">
        <el-button
          @click="
            dialogFormVisible = false;
            resetForm('ruleForm2');
          "
          >取 消</el-button
        >
        <el-button type="primary" @click="submitForm()"
          >登 录</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  /*这里有个小知识点：直接在data(){}存放的数据是全局变量，其他组件也可以引用，在data(){return{} 里面写的就是只能在本组件使用的数据*/
  data() {
    /*检查账号名方法*/
    var checkNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
          /*验证是否电话*/
          if (!myreg.test(value)) {
            callback(new Error("请输入正确的手机号码"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    /*检查密码方法*/
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
        /*这里会在input下面显示错误信息，都死element的现成轮子*/
      } else {
        callback();
      }
    };
    /*插入form方法*/

    return {
      loginPower: false,
      /*插入form方法*/
      /*设定规则指向*/
      ruleForm2: {
        pass: "",
        num: "",
        delivery: false,
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],

        num: [{ validator: checkNum, trigger: "blur" }],
      },

      /*插入form方法*/

      dialogFormVisible: false,
      form: {
        name: "",
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },

  methods: {
    submitForm() {
      console.log(this.ruleForm2);
    },
  },
};
</script>
