import {Menu} from "@/types/menu.ts"

/*
 * @Author: amujoe
 * @Date: 2020-02-07 17:51:03
 * @Description: file content
 */
const menuList: Array<Menu> = [
    {
      "cname": "工作台",
      "ename": "work",
      "path": "/work",
      "icon": "",
      "description": "is_show 是否在菜单中展示",
      "is_show": true,
      "subset": []
    },
    {
      "cname": "演示模块",
      "ename": "demo",
      "path": "/demo",
      "icon": "",
      "description": "完整的 demo 演示",
      "is_show": true,
      "subset": []
    },
    {
      "cname": "组件",
      "ename": "components",
      "path": "/components",
      "icon": "",
      "description": "所有项目",
      "is_show": true,
      "subset": [
        {
          "cname": "按钮",
          "ename": "button",
          "path": "/button",
          "icon": "",
          "description": "按钮演示",
          "is_show": true,
          "subset": []
        },
        {
          "cname": "表单",
          "ename": "form",
          "path": "/form",
          "icon": "",
          "description": "表单",
          "is_show": true,
          "subset": []
        }
      ]
    },
    {
      "cname": "设置",
      "ename": "setting",
      "icon": "",
      "path": "/setting",
      "description": "设置账号",
      "is_show": true,
      "subset": []
    }
  ]

export default menuList;