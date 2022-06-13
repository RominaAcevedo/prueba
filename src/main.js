let app = Vue.createApp({
    data() {
        return{
            invertirmonto: false,
            montosReiversion:[],
            a:0,
            p:1

        }

    },
    methods:{
        calcularReinversion(payload){
            if (this.a===4){
                return 0
            }
            let {dias, monto}=payload
            let intereses=0;
               if (dias >= 30 && dias<= 60){
                   intereses=0.40
               }
               if(dias >60 && dias <= 120){
                   intereses= 0.45
               }
               if(dias >120 && dias <= 360){
                   intereses= 0.50
               }
               if(dias > 360){
                   intereses= 0.65
               }
            

              this.montosReiversion.push({
                  inicial: monto,
                  final: monto + (monto * dias/360 * intereses) 
              })

            for(let i=0; i<=2; i++){
               // console.log(this.montosReiversion)
                let ini = this.montosReiversion[this.montosReiversion.length - 1].final
                let fin = ini + (ini * dias/360 * intereses)
                this.montosReiversion.push({
                    inicial: ini,
                    final: fin
                })
            }

          
            console.log(this.montosReiversion)
            
           },
        mostrarInversion(){
            this.invertirmonto=true
        }
    }
})
