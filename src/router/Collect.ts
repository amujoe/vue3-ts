
// import menu from "@/views/myapp/MyApp"
// import store from "../store/Index.js";

import { Menu } from "@/types/menu.ts"
import {RouteRecordRaw } from 'vue-router'
import Routes from "@/views/Router";
// console.log("router", Router);

// export default {
//   icon: "", // 菜单以及权限验证所显示的 icon
//   cname: "商城", // 菜单以及权限验证所显示的中文名 （*必填）
//   ename: "shop", // 权限验证所使用的 key 值，同时还可当作 name 在路由跳转中使用 （*必填）
//   description: "商城", // 模块描述
//   is_show: true, // 是否显示在菜单
//   is_authorization: true, // 是否要进行权限验证
//   subset: [GoodsList, GoodsCreate]
// };

/**
 * 1. 格式转化
 * 1.1 path 路径 = ename / subset[0].ename
 * 1.2 name ename
 * 1.3 componet 
 * 1.4 mate = {
	 is_show: true,
	 is_authorization: false
 }
 */

// const setComponent = (path: string) => {
//   console.log("path", `@/views/${path}`)
//  return () => import(`@/views/${path}`)
// }

// 递归
/**
 * 递归格式化菜单
 * menu 是收集菜单
 * path 是根目录
 */
const recursion = function (menu: Array<Menu>, path: string): Array<RouteRecordRaw> {
	if (Array.isArray(menu) && !!menu.length){
		// menu
		return menu.map((item) => {
			const name: string = item.ename ? item.ename.toString() : ""
			const fileName: string = name.charAt(0).toUpperCase() + name.slice(1)
			const fileDirPath: string = path + `/${name}`
			const filePath = `${fileDirPath}/${fileName}.vue`
			const o: RouteRecordRaw = {
				name: fileDirPath.split("/").join("_").toLowerCase(),
				path: `/${path}/${name.toLowerCase()}`,
				// path: `/${name.toLowerCase()}`,
				// value: item.cname,
				// filePath: filePath,
				component: () => import(`@/views/${filePath}`),
				children: [],
				meta: {
					isShow: !!item.isShow
				}
			}
			// children
			if(Array.isArray(item.subset) && !!item.subset.length) {
				const children = recursion(item.subset, fileDirPath)
				o.children = [
					...children,
					{
						path:'/',
						redirect: {
							name: children[0].name
						}
					}
				]
			} else {
				o.children = []
			}
				
				return o
			})
		// menu end
	} else {
		return []
	}
}

const newMenu = recursion(Routes, "myapp")
console.log('newMenu', newMenu);
// store.dispatch("MENU/setMenu", newMenu)

// 整理 headerMenu
// const topMenu = []
// newMenu.forEach(i => {
// 	if(i.meta.is_show) {
// 		let o = {
// 			path: i.path,
// 			name: i.name,
// 			value: i.value
// 		}
// 		topMenu.push(o)
// 	}
// })
// store.dispatch("MENU/setMenuTop", topMenu)

export default newMenu;