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

    document.querySelector('#shirt').addEventListener("click", function () {
        shirt.style.display = 'block'
        trui.style.display = 'none'
    });

    document.querySelector('#trui').addEventListener("click", function () {
        trui.style.display = 'block'
        shirt.style.display = 'none'
    });

    document.querySelector('#blauw').addEventListener("click", function () {
        shirt.style.fill = ' #4144f0'
        trui.style.fill = ' #4144f0'
    });

    document.querySelector('#groen').addEventListener("click", function () {
        shirt.style.fill = '#31e083'
        trui.style.fill = '#31e083'
    });

    document.querySelector('#geel').addEventListener("click", function () {
        shirt.style.fill = '#f2f26b'
        trui.style.fill = '#f2f26b'
    });


}

removeButton()
storageAvailable()
jsStyling()
shirtPreview()