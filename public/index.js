function removeButton() {
    const elem = document.querySelector('.groupButton');
    elem.style.display = 'none';
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

    var i, radiobuttons = document.querySelectorAll('input[type=radio]');

    for (i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].addEventListener("click", function () {
            save()
        });
    }

    function save() {
        for (i = 0; i < radiobuttons.length; i++) {
            localStorage.setItem(radiobuttons[i].value, radiobuttons[i].checked);
        }
    }

    //for loading
    for (i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].checked = localStorage.getItem(radiobuttons[i].value) === 'true' ? true : false;
    }
} else {
    console.log('Too bad, no localStorage for us')
    //hier komt dat ik dan naar array push met een value en key, en of de checkbox true of false is
}

function jsStyling() {
    const form = document.querySelector(".form")
    const group = document.querySelector(".group")
    const input = document.querySelector("input[type=text]")
    const h1 = document.querySelector("h1")

    h1.style.position = "sticky";
    h1.style.top = "0";

    form.style.margin = 0 + "em";
    form.style.width = 20 + "%";
    form.style.position = "absolute";
    form.style.top = "0";

    group.style.flexWrap = "nowrap";

    input.style.width = 100 + "%";
}

function shirtPreview() {
    const preview = document.querySelector(".preview")
    const shirt = document.querySelector(".previewShirt")
    const trui = document.querySelector(".previewTrui")

    preview.style.display = 'initial'
    shirt.style.display = 'block'

    if (document.getElementById("shirt").checked == true) {
        shirt.style.display = 'block'
        trui.style.display = 'none'
        console.log('shirt')
    } else if (document.getElementById("trui").checked == true) {
        trui.style.display = 'block'
        shirt.style.display = 'none'
        console.log('trui')
    }

    document.querySelector('#shirt').addEventListener("click", function () {
        shirt.style.display = 'block'
        trui.style.display = 'none'
    });

    document.querySelector('#trui').addEventListener("click", function () {
        trui.style.display = 'block'
        shirt.style.display = 'none'
    });
}

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
    } else if (document.querySelector('#white').checked == true) {
        shirtPreview.style.fill = 'white';
        truiPreview.style.fill = 'white';
    }
}

function changeText() {

    document.querySelector('#text').addEventListener("input", function () {
        var input = document.getElementById('text').value

        document.querySelector('.textShirt').textContent = input;
        document.querySelector('.textTrui').textContent = input;
    })
}



removeButton()
storageAvailable()
jsStyling()
shirtPreview()
changeColor()
changeText()