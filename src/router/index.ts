import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/category",
      name: "Category",
      component: () => import("../views/Category/index.vue"),
    },
    {
      path: "/product-list",
      name: "Product-list",
      component: () => import("../views/Product/index.vue"),
    },
    // {
    //   path: "/order-view",
    //   name: "Order-view",
    //   component: () => import("../views/Order/index.vue"),
    // },
   
   
  ],
});

router.beforeEach(async (to) =>{
  const route = useRoute();
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const store = useAuthStore();
  const { isAuth } = store;
  if (authRequired && !isAuth) {
    return "/login";
  } else if (isAuth && to.path === "/login") return { ...route};

});

export default router;
