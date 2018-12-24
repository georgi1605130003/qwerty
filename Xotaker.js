class Xotaker extends LivingCreature {

    constructor(x, y) {
        super(x, y)
        this.MIN_energy = 2;
        this.energy = 5;
        this.genus = Math.round(random(0, 1));
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
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        this.energy--;

        var emptyCells = this.chooseCell(0, 2);



        if (emptyCells.length != 0) {
            var randomCell = random(emptyCells);

            var x = randomCell[0];
            var y = randomCell[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
        this.die();
    }
    die() {

        if (this.energy == 0) {
            for (var i in Xotakerg) {
                if (this.x == Xotakerg[i].x && this.y == Xotakerg[i].y) {
                    Xotakerg.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }

        }
    }

    eat() {
        var emptyCells = this.chooseCell(1);
        this.mult();
        if (emptyCells.length != 0) {
            this.energy++;
            var randomCell = random(emptyCells)
            var x = randomCell[0];
            var y = randomCell[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            for (var i in Xotg) {
                if (this.x == Xotg[i].x && this.y == Xotg[i].y) {
                    Xotg.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move();
        }
        this.mult();
    }


    mult() {
        var emptyCells = this.chooseCell(0);
        var XotakerCells = random(this.chooseCell(2));
        var findobj;
        if (XotakerCells) {
            for (var i in Xotakerg) {
                if (Xotakerg[i].x == XotakergCells[0] && Xotakerg[i].y == XotakergCells[1]) {
                    findobj = Xotakerg[i];
                }
            }
        }
        if (findobj) {
            if (this.genus != findobj.genus) {
                if (this.energy >= 10) {
                    if (emptyCells.length != 0) {
                        var randomCell = random(emptyCells);
                        var x = randomCell[0];
                        var y = randomCell[1];

                        for (var i in Xotg) {
                            if (emptyCells[0] == Xotg[i].x && emptyCells[1] == Xotg[i].y) {
                                Xotg.splice(i, 1);
                                break;
                            }
                        }

                        var newXotaker = new Xotaker(x, y);
                        Xotaker.push(newXotaker);

                        matrix[y][x] = 2;
                        this.energy = 5;
                    }
                }
            }
        }
    }
}