export default {
    methods: {
      SetId(): number {
        // var Dataid: string = (+new Date()).toString(10);
        var DateTime = new Date();
        var milliseconds = DateTime.getMilliseconds();
        var min: number = 1;
        var max: number = 99;
        var crumbs: number = Math.floor(Math.random() * (max - min)) + min;
        var id: string = String(milliseconds) + String(crumbs);
        return Number(id);
      },
    },
  };
  