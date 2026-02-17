<template>
  <div class="login-page">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/videos/hero-video.mp4" type="video/mp4">

    </video>
    <div class="form-content">
      <div class="form-header">
        <h1>Login</h1>
      </div>
      <div class="form-body">
        <div class="field">
          <label>Email:</label>
          <div class="control">
            <input v-model="form.email" type="text" placeholder="your@email.com" />
          </div>
        </div>
        <div class="field">
          <label>Password:</label>
          <div class="control">
            <input v-model="form.password" type="text" placeholder="Enter password" />
          </div>
        </div>
        <button @click="submit" type="button" class="button primary rounded">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from "../stores/auth";
const store = useAuthStore();
const { login } =store;


const form = reactive({
  email: "khamdee",
  password: "12345678",
});

const submit = () => {
  login(form);
};
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem; // ໃຊ້ rem ແທນ px
  position: relative;
  overflow: hidden;
  // background-image: url("https://images.unsplash.com/photo-1658778277300-64a7cc921314?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D");
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;

  .background-video {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    z-index: -1;
  }
  
  .form-content {
    position: relative;
    z-index: 1;
    // ✅ ໃຊ້ແບບງ່າຍທີ່ສຸດ - ປັບໄດ້ດີທີ່ສຸດ
    width: 100%;
    max-width: 28rem; // 448px - ຂະໜາດທີ່ພໍດີ
    
    // ✅ ໃຊ້ padding ແບບປັບໄດ້
    padding: 2rem 1.5rem;
    
    // ✅ border ແບບປັບໄດ້
    border: 0.625rem solid rgba(0, 0, 0, 0.1); // 10px
    border-radius: 1.25rem; // 20px
    
    // ✅ Glass effect ທີ່ງາມ
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    
    // ✅ ສຳຄັນຫຼາຍ!
    box-sizing: border-box;

    .form-header {
      margin-bottom: 2rem;
      text-align: center;

      h1 {
        font-size: 2rem; // 32px
        font-weight: 800;
        margin: 0;
        color: #1a1a1a;
      }
    }

    .form-body {
      .field {
        margin-bottom: 1.25rem; // 20px
        
        &:last-of-type {
          margin-bottom: 1.5rem; // ຊ່ອງຫວ່າງກ່ອນປຸ່ມ
        }
      }

      label {
        display: block;
        margin-bottom: 0.13rem; // 8px
        font-size: 0.9375rem; // 15px
        font-weight: 500;
        color: #000;
      }

      .control {
        width: 100%;
      }

      input {
        width: 100%;
        padding: 0.75rem 1rem; // 12px 16px
        font-size: 1rem; // 16px
        
        border: 2px solid #e2e8f0;
        border-radius: 0.5rem; // 8px
        
        background-color: rgba(255, 255, 255, 0.9);
        box-sizing: border-box;
        
        transition: all 0.3s ease;

        &::placeholder {
          color: #a0aec0;
        }

        &:focus {
          outline: none;
          border-color: #4299e1;
          background-color: white;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
        }

        &:hover {
          border-color: #cbd5e0;
        }
      }

      button {
        width: 100%;
        padding: 0.875rem; // 14px
        
        font-size: 1.125rem; // 18px
        font-weight: 600;
        
        border: none;
        border-radius: 0.625rem; // 10px
        
        cursor: pointer;
        transition: all 0.3s ease;
        
        // ປ່ຽນສີຕາມ theme ຂອງທ່ານ
        background: linear-gradient(135deg, #0000ff 100%, #0000ff 100%);
        color: white;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }
  }
}

// 📱 TABLET (768px ລົງມາ)
@media (max-width: 768px) {
  .login-page {
    .form-content {
      max-width: 90%; // ໃຊ້ພື້ນທີ່ຫຼາຍຂຶ້ນ
      padding: 1.75rem 1.25rem;
      border-width: 0.5rem; // ຫຼຸດຂະໜາດ border

      .form-header h1 {
        font-size: 1.75rem; // ຫຼຸດຂະໜາດຕົວອັກສອນ
      }
    }
  }
}

// 📱 MOBILE (480px ລົງມາ)
@media (max-width: 480px) {
  .login-page {
    padding: 0.75rem;

    .form-content {
      max-width: 100%;
      padding: 1.5rem 1rem;
      border-width: 0.375rem; // 6px

      .form-header {
        margin-bottom: 1.5rem;

        h1 {
          font-size: 1.5rem; // 24px
        }
      }

      .form-body {
        .field {
          margin-bottom: 1rem;
        }

        label {
          font-size: 0.875rem; // 14px
        }

        input {
          padding: 0.625rem 0.875rem; // 10px 14px
          font-size: 0.9375rem; // 15px
        }

        button {
          padding: 0.75rem; // 12px
          font-size: 1rem; // 16px
        }
      }
    }
  }
}

// 📱 SMALL MOBILE (360px ລົງມາ)
@media (max-width: 360px) {
  .login-page {
    .form-content {
      padding: 1.25rem 0.875rem;
      border-width: 0.25rem; // 4px
      border-radius: 1rem;

      .form-header h1 {
        font-size: 1.375rem; // 22px
      }

      .form-body {
        input, button {
          font-size: 0.875rem; // 14px
        }
      }
    }
  }
}
</style>