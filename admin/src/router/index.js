import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "el-icon-goods", affix: true }
      }
    ]
  },
  {
    path: "/user",
    component: Layout,
    redirect: "/user/index",
    name: "user",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/user/index"),
        meta: { title: "用户管理", icon: "el-icon-goods" }
      }
    ]
  },
  {
    path: "/intermediary",
    component: Layout,
    redirect: "/intermediary/index",
    name: "intermediary",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/intermediary/index"),
        meta: { title: "代理管理", icon: "el-icon-goods" }
      }
    ]
  },
  {
    path: "/declare",
    component: Layout,
    redirect: "/declare/index",
    name: "declare",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/declare/index"),
        meta: { title: "申报信息", icon: "el-icon-goods" }
      }
    ]
  },
  {
    path: "/settlement",
    component: Layout,
    redirect: "/settlement/index",
    name: "settlement",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/settlement/index"),
        meta: { title: "申报结算", icon: "el-icon-goods" }
      }
    ]
  },
  // {
  //   path: "/commodity",
  //   component: Layout,
  //   redirect: "/commodity/index",
  //   name: "commodity",
  //   meta: { title: "商品管理", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "index",
  //       name: "Index",
  //       component: () => import("@/views/commodity/index"),
  //       meta: { title: "商品管理", icon: "table" }
  //     },
  //     {
  //       path: "dictionary",
  //       name: "Dictionary",
  //       component: () => import("@/views/commodity/dictionary"),
  //       meta: { title: "商品字典", icon: "tree" }
  //     }
  //   ]
  // },
  // {
  //   path: "/orderform",
  //   component: Layout,
  //   redirect: "/orderform/index",
  //   name: "orderform",
  //   meta: { title: "订单管理", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "index",
  //       name: "Index",
  //       component: () => import("@/views/orderform/index"),
  //       meta: { title: "订单管理", icon: "table" }
  //     },
  //     {
  //       path: "dictionary",
  //       name: "dictionary",
  //       component: () => import("@/views/orderform/dictionary"),
  //       meta: { title: "商品字典", icon: "tree" }
  //     }
  //   ]
  // },
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
