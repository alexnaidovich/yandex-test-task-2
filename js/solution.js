(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    var point = 0;
    var shift = 1;
    var checked = [];

    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        var islands = 0;
        var checkedIndex = 0;
        for (var r = 0; r < map.length; r++) {
            for (var c = 0; c < map[r].length; c++) {
                if (map[r][c] === 1 && notInChecked(r, c)) {
                    point = [r,c];
                    checked.push(point);
                    while (checkedIndex < checked.length) {
                        horizontalShift(map, checked[checkedIndex][0], checked[checkedIndex][1]);
                        verticalShift(map, checked[checkedIndex][0], checked[checkedIndex][1]);
                        checkedIndex++;
                    }
                islands++;
                }
            }
        }
        return islands;
    };

    function horizontalShift(map, x, y) {
    var positiveShift = true;
    var negativeShift = true;
    for (var i = x, j = y; ((j < map[0].length) && (positiveShift)); j++) {
        if (map[i][j+shift] === 1 && notInChecked(i, j+shift)) {
            point = [i,j+shift];
            checked.push(point);
        } else {
            positiveShift = false;
        }
    }
    for (var i = x, j = y; ((j >= 0) && (negativeShift)); j--) {
        if (map[i][j-shift] === 1 && notInChecked(i, j-shift)) {
            point = [i,j-shift];
            checked.push(point);
        } else {
            negativeShift = false;
        }
    }
};

    function verticalShift(map, x, y) {
    var positiveShift = true;
    var negativeShift = true;
    for (var i = x, j = y; ((i < map.length) && (i != map.length - 1) && (positiveShift)); i++) {
        if (map[i+shift][j] === 1 && notInChecked(i+shift, j)) {
            point = [i+shift,j];
            checked.push(point);
        } else {
            positiveShift = false;
        }
    }
    for (var i = x, j = y; ((i > 0) && (negativeShift)); i--) {
        if (map[i-shift][j] === 1 && notInChecked(i-shift, j)) {
            point = [i-shift,j];
            checked.push(point);
        } else {
            negativeShift = false;
        }
    }
};

    // принимает координаты х, у текущей точки на проверку того, встречалась ли она ранее 
    function notInChecked(x, y) {
        for (var i = 0; i < checked.length; i++) {
            if (checked[i][0] === x && checked[i][1] === y) {
                return false;
            }
        }
        return true;    
    };

    root.SHRI_ISLANDS.solution = solution;
})(this);
