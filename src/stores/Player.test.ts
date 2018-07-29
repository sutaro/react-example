import { IPlayer, Player, ICD } from "./Player";

describe(("Player"),()=>{
    describe('play',()=>{
        let cd:ICD;
        beforeEach(()=>{
            cd={
                getName:()=>{
                    throw new Error("cd.getName is not spied")
                }
            };
        });
        test('should check is playing if the play started',()=>{
            const player:IPlayer= new Player(cd);
            spyOn(cd,'getName').and.callFake(()=>{
                return "Michael Jackson";
            });
            expect(player.displayCDName()).toBe("Michael Jackson");
        });
    });
});