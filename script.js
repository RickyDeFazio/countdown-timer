var app = new Vue({
  el: '#app',
  data: {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    target: 'Jan 1 2021'
  },
  methods: {
    countdown() {
      const then = new Date(this.target)
      const now = new Date();
      let totalSeconds = (then - now) / 1000;

      const daysRemaining = Math.floor(totalSeconds / 3600 / 24);
      const hoursRemaining = Math.floor(totalSeconds / 3600) % 24;
      const minutesRemaining = Math.floor(totalSeconds / 60) % 60;
      const secondsRemaining = Math.floor(totalSeconds) % 60;

      this.days = this.formatTime(daysRemaining);
      this.hours = this.formatTime(hoursRemaining);
      this.minutes = this.formatTime(minutesRemaining);
      this.seconds = this.formatTime(secondsRemaining);
    },
    formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  },
  mounted() {
    setInterval(this.countdown, 1000);
  }
});
