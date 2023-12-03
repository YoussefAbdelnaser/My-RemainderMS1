<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              Add Normal Reminder
            </div>
            <div class="card-body">
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input type="text" class="form-control" id="title" v-model="reminder.title" required>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control" id="description" v-model="reminder.description" required></textarea>
                </div>
                <div class="d-flex justify-content-between">
                  <button type="submit" class="btn btn-primary">Add Reminder</button>
                  <button type="button" class="btn btn-secondary" @click="handleAnotherAction1">Button 1</button>
                  <button type="button" class="btn btn-secondary" @click="handleAnotherAction2">Button 2</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  name: 'AddReminder',
  data() {
    return {
      reminder: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Reminder:', this.reminder);
      // Add logic to process reminder submission
    },
    handleAnotherAction1() {
      // Logic for Button 1
    },
    handleAnotherAction2() {
      // Logic for Button 2
    }
  }
};
</script>
  