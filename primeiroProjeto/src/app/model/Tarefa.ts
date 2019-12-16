export class Tarefa{
    private nome:string;
    private responsavel:string;

    public constructor(_nome:string,_respon:string){
        this.nome = _nome;
        this.responsavel = _respon;
    }

    public getNome():string{
        return this.nome;
    }
    public setNome(_nome:string):void{
        this.nome = _nome;
    }

    public getResponsavel():string{
        return this.responsavel;
    }
    public setResponsavel(_respon:string):void{
        this.responsavel = _respon;
    }
}