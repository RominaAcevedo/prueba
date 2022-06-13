app.component('botonreinversion',{
    template:
  `  <input class="button"  type="submit" value="reinvertir monto" v-on:click="reinvertir"/>  `,
  methods:{
      reinvertir(){
          this.$emit('invertir')
      }

  }
  
})