<template>
  <div v-if="route.path !== '/login'">
    <div>
      <RouterLink class="sidebar-item" to="/">
        <p><i class="fa-regular fa-home"></i>ໜ້າຫຼັກ</p>
      </RouterLink>

      <RouterLink
        class="sidebar-item"
        :to="{ path: '/category', query: { page: 1, search: '' } }"
      >
        <p><i class="fa-regular fa-home"></i>Category</p>
      </RouterLink>

      <RouterLink
        class="sidebar-item"
        :to="{ path: '/product-list', query: { page: 1 } }"
      >
        <p><i class="fa-regular fa-home"></i>Product</p>
      </RouterLink>

      <RouterLink class="sidebar-item" to="/avatar">
        <p><i class="fa-solid fa-users-gear"></i>Order</p>
      </RouterLink>

      <RouterLink class="sidebar-item" to="/stock-history">
        <p><i class="fa-regular fa-list"></i>StockHistory</p>
      </RouterLink>

       <a class="sidebar-item has-child" :class="{ expanded: expanded }">
        <p @click="expanded = !expanded">
          <i class="fa-regular fa-folder"></i>
          ການຈັດການ
          <span></span>
        </p>
        <ul>
          <li>
            <RouterLink to="/manage/benefit">Benefit</RouterLink>
          </li>
          <li>
            <RouterLink to="/manage/skill-library">Skill Library</RouterLink>
          </li>
          <li>
            <RouterLink to="/manage/skill-level">Skill Level</RouterLink>
          </li>
          <li>
            <RouterLink to="/manage/language">Language</RouterLink>
          </li>
          <li>
            <RouterLink to="/manage/language-level">Language Level</RouterLink>
          </li>
        </ul>
      </a>
       <RouterLink class="sidebar-item" to="/avatar">
        <p><i class="fa-solid fa-users-gear"></i>ຂໍ້ມູນພະນັກງານ</p>
      </RouterLink>
    </div>
    <a class="logout" @click="log_Out">Logout</a>
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, RouterView } from "vue-router"; // ຢ່າລືມ import RouterView
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();
const { logOut } = store;
const expanded = ref(false);
const route = useRoute();

// ສ່ວນ Watch ຂອງທ່ານສາມາດເກັບໄວ້ຄືເກົ່າໄດ້
watch(
  route,
  () => {
    if (
      [
        "/manage/benefit",
        "/manage/skill-library",
        "/manage/skill-level",
        "/manage/language",
        "/manage/language-level",
      ].includes(route.path)
    ) {
      expanded.value = true;
    }
  },
  { immediate: true },
);

const log_Out = async () => {
  await logOut();
};
</script>
