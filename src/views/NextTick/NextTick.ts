import { Vue } from 'vue-class-component';

// @Options({
//   components: {},
// })
export default class  extends Vue {
    private num = 2;

    data() {
        return {
            title: "一个列表, 熟悉基本用法. setup and nextTick",
            desc: "推迟下一个DOM更新周期后执行的回调, 更改一些数据以等待DOM更新后，请立即使用它",
            num: 0
        }
    }
   
    private doNextTick() {
        this.$nextTick(() => {
            this.num ++;
        })
    }

    private setup() {
        const num = 23;
        return{
            num
        }
    }

    created() {
        this.num = 24;
    }
    mounted() {
        this.num = 25;
    }
}