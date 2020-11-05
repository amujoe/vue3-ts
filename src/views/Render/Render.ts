import { h } from 'vue';
import { Vue } from 'vue-class-component';

export default class Setup extends Vue {
    private num = 222;

    private add = (n: number) => {
       return n * n
    }

    render() {
        const num = this.add(this.num);

        return h("div", {}, [
            "this is an setup page",
            h("h1", "这里是一个标题"),
            h("input", {class: "input-box", style: "border:1px solid red"}),
            h("p", `这是计算后的数字${num}`),
            h("p", {}, "下面是组件 HelloWorld"),
        ])
    }
}