class Mah extends LivingCreature{
    constructor(x, y) {
       super(x,y)
        this.MIN_energy = 2;
        this.energy = 10;

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    move() {
        this.energy--;

        var emptyCells = this.chooseCell(0);

        if (emptyCells.length != 0) {
            var randomCell = random(emptyCells);

            var x = randomCell[0];
            var y = randomCell[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }

        this.die();
    }
    die() {

        if (this.energy < this.MIN_energy) {
            matrix[this.y][this.x] = 0;
            for (var i in Mah) {
                if (this.x == Mah[i].x && this.y == Mah[i].y) {
                    Mah.splice(i, 1);
                    break;
                }
            }

        }
    }

    eat() {
        var emptyCells = this.chooseCell(4);

        if (emptyCells.length != 0) {

            var randomCell = random(emptyCells)

            var x = randomCell[0];
            var y = randomCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.energy++;


            for (var i in Vorsord) {
                if (this.x == Vorsord[i].x && this.y == Vorsord[i].y) {
                    Vorsord.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move();
        }

        this.mult();
    }

    mult() {
        if (this.energy >= 15) {
            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {
                var randomCell = random(emptyCells);
                var x = randomCell[0];
                var y = randomCell[1];

                var newmah = new Mah(x, y);
                Mah.push(newmah);

                matrix[y][x] = 5;

                this.energy = 5;
            }

        }
    }
}