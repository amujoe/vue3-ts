// 按钮最小单位, 自己定义的
interface Menu {
    cname: string,
    ename: string,
    path: string,
    icon: string,
    description: string,
    isShow: boolean,
    subset: Array<Menu>,
};

export { Menu }