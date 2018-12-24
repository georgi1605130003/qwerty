var side = 12;
var Vors = [];
var Xotg = [];
var Xotakerg = [];
var Gish = [];
var Mahg = [];
var a;

var n = 50;
var m = 50;

var matrix = [];
var weather = 1;

var weatherName = document.getElementById("season");

var statistics = {
    "Xot": "",
    "Xotaker": "",
    "Gishatich": "",
}

setInterval(function () {
    weather++
    if (weather > 4) {
        weather = 1;
    }


}, 10000);




function framerate() {
    if (weather == 1) {
        a = 12;
    }
    else if (weather == 2) {
        a = 9;
    }
    else if (weather == 3) {
        a = 6;
    }
    else if (weather == 4) {
        a = 1;
    }

}

function myFunction() {
    if (weather == 1) {
        weatherName.innerHTML = "Գարուն"
    }
    else if (weather == 2) {
        weatherName.innerHTML = "Ամառ"
    }
    else if (weather == 3) {
        weatherName.innerHTML = "Աշուն"
    }
    else if (weather == 4) {
        weatherName.innerHTML = "Ձմեռ"
    }
}

function setup() {
    background('#acacac');

    for (var y = 0; y < n; y++) {
        matrix[y] = [];

        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(Math.random() * 2);
        }

    }

    matrix[2][2] = 5;
    matrix[36][36] = 5;
    matrix[14][18] = 4;
    matrix[31][22] = 4;
    matrix[11][27] = 4;
    matrix[33][12] = 3;
    matrix[14][20] = 3;
    matrix[12][18] = 3;
    matrix[33][22] = 3;
    matrix[14][2] = 3;
    matrix[12][11] = 3;



    createCanvas(matrix[0].length * side, matrix.length * side);



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                Xotg.push(new Xot(x, y));
            }

            if (matrix[y][x] == 2) {
                Xotakerg.push(new Xotaker(x, y));
            }
            if (matrix[y][x] == 3) {
                Gish.push(new Gishatich(x, y));
            }
            if (matrix[y][x] == 4) {
                Vors.push(new Vorsord(x, y));
            }
            if (matrix[y][x] == 5) {
                Mahg.push(new Mah(x, y));
            }
        }

    }

}
function timestamp() {
    if (frameCount % 1 == 0) {
        statistics.timestamp = (new Date()).toString();
        statistics.framecount = frameCount;
        changeView(statistics);
        changeView(statistics);
    }
}
function StatisticsPersons() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
               
                statistics.Xot++;
                changeView(statistics);
            }
            else if (matrix[y][x] == 2) {
              
                statistics.Xotaker++;
                changeView(statistics);
            }
            else if (matrix[y][x] == 3) {
                
                statistics.Gishatich++;
                changeView(statistics);
                
            }
        }
    }
}
function changeView(stat) {
    var c = document.getElementById("Xot");
    var k = document.getElementById("Xotaker");
    var d = document.getElementById("Gishatich");
    c.innerHTML = stat.Xot;
    k.innerHTML = stat.Xotaker;
    d.innerHTML = stat.Gishatich;
}


function draw() {
    drawMatrix();
    myFunction();
    framerate();
    frameRate(a);
    timestamp();
    StatisticsPersons();


    for (var i in Xotaker) {
        Xotakerg[i].eat();
    }
    for (var i in Xot) {
        Xotg[i].mult();
    }
    for (var i in Gish) {
        Gish[i].eat();
    }
    for (var i in Vors) {
        Vors[i].eat();
    }
    for (var i in Mah) {
        Mahg[i].eat();
    }



    function drawMatrix() {




        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("green");

                    if (weather == 2) {
                        fill("#81EF58");
                    }
                    else if (weather == 3) {
                        fill("#D9ED58");
                    }
                    else if (weather == 4) {
                        fill("#CBD58B");
                    }
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 2) {
                    for (var i in Xotaker) {
                        if (Xotaker[i].x == x && Xotaker[i].y == y) {
                            if (Xotaker[i].genus == 0) {
                                fill("yellow");
                            } else {
                                fill("#495306");
                            }

                        }
                    }

                    if (weather == 2) {
                        for (var i in Xotaker) {
                            if (Xotaker[i].x == x && Xotaker[i].y == y) {
                                if (Xotaker[i].genus == 0) {
                                    fill("#899D0A");
                                } else {
                                    fill("#B1C149");
                                }

                            }
                        }

                    }
                    else if (weather == 3) {
                        for (var i in Xotaker) {
                            if (Xotaker[i].x == x && Xotaker[i].y == y) {
                                if (Xotaker[i].genus == 0) {
                                    fill("#49BEC1");
                                } else {
                                    fill("#275C5D");
                                }

                            }
                        }

                    }
                    else if (weather == 4) {
                        for (var i in Xotaker) {
                            if (Xotaker[i].x == x && Xotaker[i].y == y) {
                                if (Xotaker[i].genus == 0) {
                                    fill("#6DF0F4");
                                } else {
                                    fill("#7FD2D5");
                                }

                            }
                        }

                    }
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 3) {
                    fill("red");

                    if (weather == 2) {
                        fill("#E32929");
                    }
                    else if (weather == 3) {
                        fill("#E04949");
                    }
                    else if (weather == 4) {
                        fill("#E37E7E");
                    }
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("blue");
                    if (weather == 2) {
                        fill("#3B45E5");
                    }
                    else if (weather == 3) {
                        fill("#5F67DF");
                    }
                    else if (weather == 4) {
                        fill("#9196DA");
                    }
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("Black");
                    rect(x * side, y * side, side, side);
                }
            }

        }


    }

}