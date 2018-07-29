export interface IPlayer{
    play():void;
    stop():void;
    isPlaying():boolean;
    displayCDName():string;
}
export interface ICD{
    getName(): string;
}

export class CD implements ICD{
    getName(): string;
}

export class Player implements IPlayer{
    private _isPlaying: boolean;
    constructor(private cd:ICD){
        this._isPlaying= false;
    }
    displayCDName():string{
        return this.cd.getName();
    }
    play():void{
        this._isPlaying=true;
    }
    stop():void{
        this._isPlaying= false;
    }
    isPlaying(): boolean{
        return this._isPlaying;
    }
}

