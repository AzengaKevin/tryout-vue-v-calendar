import "@/style.css"
import { setupCalendar, Calendar, DatePicker } from "v-calendar";
import { createApp } from "vue";
import "v-calendar/style.css";
import App from "@/App.vue";

const app = createApp(App);

app.use(setupCalendar, {})

// Use the components
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)

app.mount('#app');
