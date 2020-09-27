var app = new Vue({
  el: '#app',
  data: {
    now: new Date(),
    then: new Date('Jan 1 2021')
  },
  methods: {
    countdown() {
      this.now = new Date();
    },
    formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  },
  computed: {
    totalSeconds(){
      return (this.then - this.now) / 1000;
    },
    days() {
      const daysRemaining = Math.floor(this.totalSeconds / 3600 / 24);
      return this.formatTime(daysRemaining);
    },
    hours() {
      const hoursRemaining = Math.floor(this.totalSeconds / 3600) % 24;
      return this.formatTime(hoursRemaining);
    },
    minutes() {
      const minutesRemaining = Math.floor(this.totalSeconds / 60) % 60;
      return this.formatTime(minutesRemaining);
    },
    seconds(){
      const secondsRemaining = Math.floor(this.totalSeconds) % 60;
      return this.formatTime(secondsRemaining);
    }
  },
  mounted() {
    setInterval(this.countdown, 1000);
  }
});
