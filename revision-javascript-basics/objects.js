let ob = {
    winner : undefined,
    scoreA : 0,
    scoreB : 0,
    minimum : 1,
    game : function(win){
        if(win == 'A') this.scoreA++;
        else this.scoreB++;
        if(this.scoreA>this.minimum) this.winner= 'A';
        else if(this.scoreB > this.minimum ) this.winner = 'B';
    }
    // arrows function is not working 
};
console.log(ob);
ob.game('A');
console.log(ob);
ob.game('B');
ob.game('A');
console.log(ob);