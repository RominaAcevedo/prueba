app.component('formulario',{
    template:
    /*html*/
  `<form @submit.prevent="onSubmit" >
        
  <label for="NombreApellido">Ingrese su nombre y apellido</label>    
  <input id="nombre" v-model="nombre"><br/>
  <br/>

  <label for="MontoInvertir">Ingrese el monto a invertir</label>    
  <input id="monto" placeholder="Minimo $1000" v-model.number="monto"><br/>
  

  <br/> 

  <label for="CantidadDias">Ingrese la cantidad de dias</label>   
  <input id="dias" placeholder="Minimo 30 dias" v-model.number="dias"><br/>
  

  <br/>
  <br/>
  <input class="button"  type="submit" value="calcular" />
  <br/>
  <div  > Usted recibira en total:$ {{montofinal}}</div>
 

 </form>`,
 data(){
     return{
         nombre:"",
         monto:"",
         dias:"",
         invertir: null,
         montofinal:null,
         montosReiversion:[],
         a:0,
         p:0

     }
 },
 methods:{
     onSubmit(){
        let intereses=0;



        if(this.nombre===""|| this.monto==="" ||this.dias ===""){
            alert("debe completar los datos")
         
        }else if(this.nombre||this.monto||this.dias){
            if(this.monto < 1000 ){
                alert("debe ingresar minimo $1000")
        
            }
            if(this.dias<30){
                alert("debe ingresar minimo 30 dias")
            }
            if(typeof(this.nombre)==="number" ){
                alert("ingrese un nombre valido")

            }

        }
            if (this.dias >= 30 && this.dias<= 60){
                intereses=0.40
            }
            if(this.dias >60 && this.dias <= 120){
                intereses= 0.45
            }
            if(this.dias >120 && this.dias <= 360){
                intereses= 0.50
            }
            if(this.dias > 360){
                intereses= 0.65
            }
            //console.log(this.invertir)
            this.montofinal= Number.parseFloat(this.monto + (this.monto * this.dias/360 * intereses)).toFixed(2);
            let payload={
                monto:this.monto,
                dias:this.dias}
    
           this.$emit('reinvertirmonto',payload)
           
            this.nombre=""
            this.monto=""
            this.dias=""
        
           
          
       
    

     },
     

 },
 computed:{
     error(){
        
     }
 }

    
})
