class Xot extends LivingCreature {
    constructor(x, y) {
        super(x, y, max);
        this.max = 3;
        this.multiply = Math.random(random(0, 1));
        
    }
    mult() {
        if (weather == 1)
        this.multiply =this.multiply + 1.5;
        else if (weather == 2)
        this.multiply  = this.multiply + 0.5;
        else if (weather == 3)
        this.multiply = this.multiply + 0.25;
        else if (weather == 1)
        this.multiply =0;

        var emptyCells = this.chooseCell(0);
            if (emptyCells.length != 0 && this.multiply >= 2) {
                var randomCell = random(emptyCells);

                var x = randomCell[0];
                var y = randomCell[1];

                var NorXot = new Xot(x, y);
                Xotg.push(NorXot);

                matrix[y][x] = 1;
                this.multiply = 0;

            }

    }

}