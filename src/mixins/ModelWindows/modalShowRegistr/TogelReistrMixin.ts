export default {
  methods: {
    SetId(): number {
      var Dataid: string = (+new Date().getMinutes()).toString(5);
      // var min: number = 1;
      // var max: number = 99;
      // var crumbs: number = Math.floor(Math.random() * (max - min)) + min;
      // var id: string = String(Dataid) + String(crumbs);
 
      return Number(Dataid);
    },
    mounted() {
      console.log('mixin mounted')
  }
  },
};
