// 按钮最小单位
interface Menu {
    cname: string,
    ename: string,
    path: string,
    icon: string,
    description: string,
    is_show: boolean,
    subset: Array<Menu>,
};






export { Menu }