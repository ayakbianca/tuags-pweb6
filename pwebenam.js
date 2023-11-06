const app = Vue.createApp({
  data() {
    return {
      hasil: 0,
    };
  },
  methods: {
    tambah() {
      this.hasil = parseFloat(this.nomor1) + parseFloat(this.nomor2);
    },
    kurang() {
      this.hasil = parseFloat(this.nomor1) - parseFloat(this.nomor2);
    },
    kali() {
      this.hasil = parseFloat(this.nomor1) * parseFloat(this.nomor2);
    },
    bagi() {
      this.hasil = parseFloat(this.nomor1) / parseFloat(this.nomor2);
    },
  },
});

app.mount('#app');
