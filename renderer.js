const { createApp } = Vue;

createApp({
  data() {
    return {pods: []};
  },
  methods: {
    async onSubmit() {
      const namespace = document.getElementById("namespace").value;
      const resp = await window.service.getPods(namespace);
      this.pods = resp.items;
      console.log(resp.items);
    },
  },
}).mount("#app");
