<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Remainder.ly</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <!-- Add other nav items here -->
        </ul>
        <button class="btn btn-outline-success" @click="navigateToSignIn">
          {{ signInLabel }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from "vue"; // Import `ref` and `computed` from `vue`
import { useRouter } from "vue-router"; // Import `useRouter` from `vue-router`

export default {
  name: "Navbar",
  setup() {
    const router = useRouter();
    const isSignedIn = ref(false); // Using `ref` to make it reactive

    function navigateToSignIn() {
      if (!isSignedIn.value) {
        router.push("/sign-in");
      } else {
        // Handle sign out logic
      }
    }

    const signInLabel = computed(() =>
      isSignedIn.value ? "Sign Out" : "Sign In"
    );

    return {
      isSignedIn,
      navigateToSignIn,
      signInLabel,
    };
  },
};
</script>

<style scoped></style>
