<script setup>

</script>
<template>
    <nav class="top">
        <div class="container">
            <ul>
                <template v-if="true">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a></li>
          <li>
            <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
            </ul>
        </div>
    </nav>
</template>
<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;
}
.top{
  
    background-color: #999;
}
ul{
    display: flex;
    justify-content: flex-end;
    height: 53px;
    align-items: center;
    li{
        a {
        color: #cdcdcd;
        padding:  0 15px;   
        line-height: 1;  
       display: inline-block;
       &:hover{
        color: $xtxColor;
       }
       i {
        font-size: 14px;
        margin-right: 2px;
       }
        }

        ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
}
</style>