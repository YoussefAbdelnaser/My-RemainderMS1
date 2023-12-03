<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4" v-for="reminder in reminders" :key="reminder.id">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ reminder.title }}</h5>
            <p class="card-text">
              <span v-if="!reminder.showDescription">****</span>
              <span v-else>{{ reminder.description }}</span>
            </p>
            <button class="btn btn-light" @click="toggleDescription(reminder)">
              <i class="bi bi-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Button to add a new reminder -->
    <div class="text-center mt-4">
      <button class="btn btn-primary" @click="navigateToAddReminder">Add New Reminder</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'RemindersList',
  setup() {
    const router = useRouter();

    const navigateToAddReminder = () => {
      router.push('/add-reminder');
    };

    return {
      navigateToAddReminder
    };
  },
  data() {
    return {
      reminders: [
        { id: 1, title: 'Reminder 1', description: 'Description for Reminder 1', showDescription: false },
        { id: 2, title: 'Reminder 2', description: 'Description for Reminder 2', showDescription: false },
        // ... more reminders
      ]
    };
  },
  methods: {
    toggleDescription(reminder) {
      reminder.showDescription = !reminder.showDescription;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
