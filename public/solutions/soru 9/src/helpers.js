export default ~function init() {
    //* print("Helpers.js joined our ranks");
    rightClickMenu();
}();

export function print(...args) {
    let temp = [...args];
    temp[0] = '%c' + temp[0];
    console.log(...temp, "color:white; font-size: 40px;  background-color:red;padding:20px 10px;")
}

let printDivExists = false;
export function printDiv(...args) {
    if (!printDivExists) {
        let printDiv = document.createElement('div');
        printDiv.id = "printDiv";
        document.body.appendChild(printDiv);
    }
    document.querySelector('#printDiv').textContent = args;

    printDivExists = true;
}

function rightClickMenu() {
    window.addEventListener('load', () => {
        let rMenu = document.createElement('div');
        rMenu.id = "rightClickContext";
        document.body.appendChild(rMenu);

        let i = document.getElementById("rightClickContext").style;
        if (document.addEventListener) {
            document.addEventListener('contextmenu', function (e) {
                let posX = e.clientX;
                let posY = e.clientY;
                menu(posX, posY);
                e.preventDefault();
            }, false);
            document.addEventListener('click', function (e) {
                i.opacity = "0";
                setTimeout(function () {
                    i.visibility = "hidden";
                }, 501);
            }, false);
        } else {
            document.attachEvent('oncontextmenu', function (e) {
                let posX = e.clientX;
                let posY = e.clientY;
                menu(posX, posY);
                e.preventDefault();
            });
            document.attachEvent('onclick', function (e) {
                i.opacity = "0";
                setTimeout(function () {
                    i.visibility = "hidden";
                }, 501);
            });
        }

        function menu(x, y) {
            i.top = y + "px";
            i.left = x + "px";
            i.visibility = "visible";
            i.opacity = "1";
        }

    });
}

