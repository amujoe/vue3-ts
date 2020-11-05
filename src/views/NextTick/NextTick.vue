<template>
    <div class="page">
        <h2>this is an setup page</h2>
        <h3>{{title}}</h3>
        <h4>{{desc}}</h4>
        <div class="content">
            <h5>{{num}}</h5>
            <button @click="doNextTick">下一次更新</button>
        </div>
    </div>
</template>

<script lang="ts">
import NextTick from "./NextTick";
export default NextTick;
</script>


<style lang="less" scoped>
.list{
    width: 500px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #eee;
    box-sizing: border-box;
    .list-item{
        text-align: left;
        font-size: 14px;
        line-height: 26px;
        border-bottom: 1px solid #eee;
        span{
            display: inline-block;
            width: 100px;
        }
    }
}
.input-box{
    input{
        width: 100px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #aaa;
        margin-right: 10px;
    }
    button{
        width: 70px;
        height: 30px;
    }
}
</style>
