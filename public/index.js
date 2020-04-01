function jsAvailable() {
    jsStyling()
    printAvailable()
    storageAvailable()
    shirtPreview()
    changeColor()
    changeText()
    changeTextColor()
}

// show some styling only when js is activated
function jsStyling() {
    const group = document.querySelector(".group")
    const saveButton = document.querySelector('#save');
    const orderButton = document.querySelector('#order');

    saveButton.style.display = 'none';
    orderButton.style.display = 'none';

    group.style.flexWrap = "nowrap";

}

//window.print() feature detection
function printAvailable() {
    const buttons = document.querySelector('.groupButton');

    if (typeof window.print != 'undefined') {
        console.log('yeah, we kunnen printen!')

        //add print button
        var html = `
        <button type="button" id="printPage">print!</button>`
        buttons.insertAdjacentHTML('beforeend', html)

        //print out page
        document.querySelector('#printPage').addEventListener("click", function () {
            console.log('gaan we printen?')
            window.print()
        })
    } else {
        console.log('print functie doet t niet')

        //add text to explain how to print
        var html = `
        <p>Ga naar je instelling van de browser om de pagina uit te printen!</p>`
        buttons.insertAdjacentHTML('beforeend', html)
    }
}

//got the code from: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage
function storageAvailable() {
    try {
        var storage = window['localStorage'],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
    console.log('Yippee! We can use localStorage awesomeness')

    var i, radiobutton = document.querySelectorAll('input[type=radio]');
    var textinput = document.querySelector('#text')
    var textShirt = document.querySelector('#textShirt')
    var textTrui = document.querySelector('#textTrui')

    /*--- Put radio buttons in localstorage---*/
    for (i = 0; i < radiobutton.length; i++) {
        radiobutton[i].addEventListener("click", function () {
            save()
        });
    }

    function save() {
        for (i = 0; i < radiobutton.length; i++) {
            localStorage.setItem(radiobutton[i].value, radiobutton[i].checked);
        }
    }

    //load checked values of radio button
    for (i = 0; i < radiobutton.length; i++) {
        radiobutton[i].checked = localStorage.getItem(radiobutton[i].value) === 'true' ? true : false;
    }

    /*--- put text in local storage ---*/
    textinput.addEventListener("input", function () {
        localStorage.setItem("text", textinput.value)
    })

    // load text
    textinput.value = localStorage.getItem("text", textinput.value)
    textShirt.textContent = localStorage.getItem("text", textinput.value)
    textTrui.textContent = localStorage.getItem("text", textinput.value)

} else {
    console.log('Too bad, no localStorage for us')

    // when there's no localstorage, show the save button
    const saveButton = document.querySelector('#save');
    saveButton.style.display = 'block';

}

// show selected shirt or trui
function shirtPreview() {
    const preview = document.querySelector(".preview")
    const shirt = document.querySelector(".previewShirt")
    const trui = document.querySelector(".previewTrui")

    preview.style.display = 'initial'
    shirt.style.display = 'block'

    document.querySelector('#shirt').addEventListener("click", function () {
        shirt.style.display = 'block'
        trui.style.display = 'none'
    });

    document.querySelector('#trui').addEventListener("click", function () {
        trui.style.display = 'block'
        shirt.style.display = 'none'
    });

    //check which type is selected and show the right preview
    if (document.getElementById("shirt").checked == true) {
        shirt.style.display = 'block'
        trui.style.display = 'none'
        console.log('shirt')
    } else if (document.getElementById("trui").checked == true) {
        trui.style.display = 'block'
        shirt.style.display = 'none'
        console.log('trui')
    }
}

// Change color of shirt or trui
function changeColor() {
    const shirtPreview = document.querySelector('.previewShirt');
    const truiPreview = document.querySelector('.previewTrui');

    for (i = 0; i < document.querySelectorAll('input[name=stap2]').length; i++) {
        document.querySelectorAll('input[name=stap2]')[i].addEventListener("click", function () {
            console.log(this.value)

            shirtPreview.style.fill = this.value;
            truiPreview.style.fill = this.value;
        });
    }

    //check which color is selected and show the right color in preview

    if (document.querySelector('#blauw').checked == true) {
        shirtPreview.style.fill = '#4144f0';
        truiPreview.style.fill = '#4144f0';
    } else if (document.querySelector('#groen').checked == true) {
        shirtPreview.style.fill = '#31e083';
        truiPreview.style.fill = '#31e083';
    } else if (document.querySelector('#geel').checked == true) {
        shirtPreview.style.fill = '#f2f26b';
        truiPreview.style.fill = '#f2f26b';
    } else if (document.querySelector('#rood').checked == true) {
        shirtPreview.style.fill = '#ed5858';
        truiPreview.style.fill = '#ed5858';
    } else if (document.querySelector('#oranje').checked == true) {
        shirtPreview.style.fill = '#ed9458';
        truiPreview.style.fill = '#ed9458';
    } else if (document.querySelector('#roze').checked == true) {
        shirtPreview.style.fill = '#f47aff';
        truiPreview.style.fill = '#f47aff';
    } else if (document.querySelector('#paars').checked == true) {
        shirtPreview.style.fill = '#a963ff';
        truiPreview.style.fill = '#a963ff';
    } else if (document.querySelector('#zwart').checked == true) {
        shirtPreview.style.fill = '#2e2e2e';
        truiPreview.style.fill = '#2e2e2e';
    } else if (document.querySelector('#wit').checked == true) {
        shirtPreview.style.fill = 'white';
        truiPreview.style.fill = 'white';
    }
}

// Change text of shirt or trui
function changeText() {

    document.querySelector('#text').addEventListener("input", function () {
        var input = document.getElementById('text').value

        document.querySelector('#textShirt').textContent = input;
        document.querySelector('#textTrui').textContent = input;
    })
}

// Change text of shirt or trui
function changeTextColor() {
    const textShirt = document.querySelector('#textShirt');
    const textTrui = document.querySelector('#textTrui');

    for (i = 0; i < document.querySelectorAll('input[name=stap4]').length; i++) {
        document.querySelectorAll('input[name=stap4]')[i].addEventListener("click", function () {
            console.log(this.value)

            textShirt.style.fill = this.value;
            textTrui.style.fill = this.value;
        });
    }

    //check which color is selected and show the right text color preview
    if (document.querySelector('#zwart1').checked == true) {
        textShirt.style.fill = "#2e2e2e";
        textTrui.style.fill = "#2e2e2e";
    } else if (document.querySelector('#wit1').checked == true) {
        textShirt.style.fill = "#FFFFFF";
        textTrui.style.fill = "#FFFFFF";
    }
}

jsAvailable()