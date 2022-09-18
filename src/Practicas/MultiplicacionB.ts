export class Operacion{
    private numeroA : number;
    private numeroB : number;
    private total : number

    public setNumberA(x:number){
        this.numeroA=0;
        this.numeroA=x;
    }

    public SetNumberB(y:number){
        this.numeroB=0;
        this.numeroB=y;
    }

    public Calcular(){
        this.calculo();
    }

    public Resultado(){
        console.log('Resultado: '+(this.total));
    }
    private calculo(){
        this.total=0;
        for(let i=0;i<this.numeroB;i++){
            this.total+=this.numeroA;
            console.log('La operacion:'+(this.total-this.numeroA)+"="+(this.total));
        }
        this.Resultado();
    }
}