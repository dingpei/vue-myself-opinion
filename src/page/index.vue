<template>
  <section class="center">
  <!-- 10个一组 -->
    <v-index-first></v-index-first>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default{
    name:"index",
    data(){
      return{
      
      }
    },
    computed:{
      ...mapGetters([//放置vuex中的数据
           'loginStatus',
       ]),
    },
    watch:{
      
    },
    methods:{
      //放置vuex中数据相关的方法
       ...mapActions({
          getLogin:'getLogin'
        }),
       //本组件方法

    },
    mounted(){
      
    }
  }
</script>
<style scoped lang="less">
  .center{
    line-height:25px;
    .red{
      color:red;
    }
    .v-class{
      font-size:30px;
    }
  }
</style>