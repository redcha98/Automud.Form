
// Write your JavaScript code.

let nextStep1 = document.querySelector('.ns-1');
let nextStep2 = document.querySelector('.ns-2');
let nextStep3 = document.querySelector('.ns-3');
let nextStep4 = document.querySelector('.ns-4');
let nextStep5 = document.querySelector('.ns-5');
let nextStep6 = document.querySelector('.ns-6');
let nextStep7 = document.querySelector('.ns-7');
let nextStep8 = document.querySelector('.ns-8');
let nextStep9 = document.querySelector('.ns-9');
let nextStep10 = document.querySelector('.ns-10');

let backStep2 = document.querySelector('.bs-2');
let backStep3 = document.querySelector('.bs-3');
let backStep4 = document.querySelector('.bs-4');
let backStep5 = document.querySelector('.bs-5');
let backStep6 = document.querySelector('.bs-6');
let backStep7 = document.querySelector('.bs-7');
let backStep8 = document.querySelector('.bs-8');
let backStep9 = document.querySelector('.bs-9');
let backStep10 = document.querySelector('.bs-10');

let step1 = document.querySelector('.step-1');
let step2 = document.querySelector('.step-2');
let step3 = document.querySelector('.step-3');
let step4 = document.querySelector('.step-4');
let step5 = document.querySelector('.step-5');
let step6 = document.querySelector('.step-6');
let step7 = document.querySelector('.step-7');
let step8 = document.querySelector('.step-8');
let step9 = document.querySelector('.step-9');
let step10 = document.querySelector('.step-10');

//Controllo per apertura pop-up
async function IsCapReachable(cap) {
    let response = await fetch("https://localhost:7231/api/cap/" + cap);
    if (response.ok) {
        let capJson = await response.json();
        return capJson.isReachable;
    }
    return false;
}

//Funzioni di controllo

function LicensePlateValidator(licensePlate) {
    const licensePlatePattern = /[a-zA-Z]{2}[0-9]{3,4}[a-zA-Z]{2}/;
    return licensePlate.search(licensePlatePattern) === 0;
}

async function IsValidCap(cap) {
    let response = await fetch("https://localhost:7231/api/cap/" + cap);
    return response.ok;
}

function IsValidPhone(phone) {
    const phonePattern = /^[0-9]{9,10}/;
    return phone.search(phonePattern) === 0;
}

function IsValidEmail(email) {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.search(emailPattern) === 0;
}


function closeMenu() {
    document.getElementById('menu').classList.remove("displayPopUp");
}

function openMenu() {
    document.getElementById('menu').classList.add("displayPopUp");

}

function closeMenu() {
    document.getElementById('menu').classList.remove("displayPopUp");
}

function openMenu() {
    document.getElementById('menu').classList.add("displayPopUp");

}

function changeInputModeToManual() {
    document.getElementById('targaContent').classList.add("outViewTarga");
    document.getElementById('manualContent').classList.add("onViewManual");
}

function changeInputModeToTarga() {
    document.getElementById('targaContent').classList.remove("outViewTarga");
    document.getElementById('manualContent').classList.remove("onViewManual");
}

// STEP 1

nextStep1.addEventListener('click', function () {
    step2.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","10");
    document.getElementById('progress-bar').setAttribute("style","width: 10%");
    document.getElementById('progressTitle').innerHTML = "Ben fatto...";
    document.getElementById('whatsappProgress').disabled = false;
    document.getElementById('whatsappProgress').classList.add("viewWhatsappProgress");
});

backStep2.addEventListener('click', function () {
    step1.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","0");
    document.getElementById('progress-bar').setAttribute("style","width: 0%");
    document.getElementById('progressTitle').innerHTML = "Iniziamo";
    document.getElementById('whatsappProgress').disabled = true;
    document.getElementById('whatsappProgress').classList.remove("viewWhatsappProgress");
    
    
});

// STEP 2

nextStep2.addEventListener('click', async function () {
    if (await IsCapReachable(document.getElementById("input-2").value) === true) {
        console.log(" raggiungibile");

        step3.scrollIntoView(true);
        document.getElementById('progress-bar').setAttribute("aria-valuenow","20");
        document.getElementById('progress-bar').setAttribute("style","width: 20%");
    }

    else if (await IsCapReachable(document.getElementById("input-2").value) === false) {
        console.log("Non raggiungibile");
        document.getElementById('popUpCap').classList.add("displayPopUp");
    }
});

function closePopUp() {
    document.getElementById('popUpCap').classList.remove("displayPopUp");
}


function retryCap() {
    document.getElementById('popUpCap').classList.remove("displayPopUp");
    document.getElementById("input-2").value = "";
    document.getElementById('ns-2').disabled = true;
    document.getElementById('capContainer').classList.remove("correct");
    document.getElementById('capContainer').classList.remove("incorrect");
    document.getElementById('errorCap').classList.remove("errorTargaOn");
}


backStep3.addEventListener('click', function () {
    step2.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","10");
    document.getElementById('progress-bar').setAttribute("style","width: 10%");
});

// STEP 3

nextStep3.addEventListener('click', function () {
    step4.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","30");
    document.getElementById('progress-bar').setAttribute("style","width: 30%");
});

backStep4.addEventListener('click', function () {
    step3.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","20");
    document.getElementById('progress-bar').setAttribute("style","width: 20%");
});

// STEP 4

function closePopUpKm() {
    document.getElementById('popUpKm').classList.remove("displayPopUp");
    document.getElementById('progress-bar').setAttribute("aria-valuenow","30");
    document.getElementById('progress-bar').setAttribute("style","width: 30%");
    document.getElementById('progressTitle').innerHTML = "Ben fatto...";
    
}

function retryKm() {
    document.getElementById('popUpKm').classList.remove("displayPopUp");
    document.getElementById("input-4").value = "";
    document.getElementById('ns-4').disabled = true;
    document.getElementById('kmContainer').classList.remove("correct");
    document.getElementById('kmContainer').classList.remove("incorrect");
    document.getElementById('progress-bar').setAttribute("aria-valuenow","30");
    document.getElementById('progress-bar').setAttribute("style","width: 30%");
    document.getElementById('progressTitle').innerHTML = "Ben fatto...";
    
}

function okKm() {
    document.getElementById('popUpKm').classList.remove("displayPopUp");
    step5.scrollIntoView(true);
}

nextStep4.addEventListener('click', function () {
    document.getElementById('popUpKm').classList.add("displayPopUp");
    document.getElementById('progress-bar').setAttribute("aria-valuenow","50");
    document.getElementById('progress-bar').setAttribute("style","width: 50%");
    document.getElementById('progressTitle').innerHTML = "Continua così...";
    
});

backStep5.addEventListener('click', function () {
    step4.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","30");
    document.getElementById('progress-bar').setAttribute("style","width: 30%");
    document.getElementById('progressTitle').innerHTML = "Ben fatto...";
    
    
});




// STEP 5

nextStep5.addEventListener('click', function () {
    step6.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","60");
    document.getElementById('progress-bar').setAttribute("style","width: 60%");
});

backStep6.addEventListener('click', function () {
    step5.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","40");
    document.getElementById('progress-bar').setAttribute("style","width: 40%");
});


// STEP 6

nextStep6.addEventListener('click', function () {
    step7.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","70");
    document.getElementById('progress-bar').setAttribute("style","width: 70%");
});

backStep7.addEventListener('click', function () {
    step6.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","50");
    document.getElementById('progress-bar').setAttribute("style","width: 50%");
});

// STEP 7

nextStep7.addEventListener('click', function () {
    step8.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","80");
    document.getElementById('progress-bar').setAttribute("style","width: 80%");
});

backStep8.addEventListener('click', function () {
    step7.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","60");
    document.getElementById('progress-bar').setAttribute("style","width: 60%");
});

// STEP 8

nextStep8.addEventListener('click', function () {
    step9.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","90");
    document.getElementById('progress-bar').setAttribute("style","width: 90%");
});

backStep9.addEventListener('click', function () {
    step8.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","70");
    document.getElementById('progress-bar').setAttribute("style","width: 70%");
});

// STEP 9

nextStep9.addEventListener('click', function () {
    step10.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","100");
    document.getElementById('progress-bar').setAttribute("style","width: 100%");
    document.getElementById('progressTitle').innerHTML = "Fatto!";
    
});

backStep10.addEventListener('click', function () {
    step9.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","80");
    document.getElementById('progress-bar').setAttribute("style","width: 80%");
    
});

// STEP 10

backStep10.addEventListener('click', function () {
    step9.scrollIntoView(true);
    document.getElementById('progress-bar').setAttribute("aria-valuenow","90");
    document.getElementById('progress-bar').setAttribute("style","width: 90%");
    document.getElementById('progressTitle').innerHTML = "Continua così...";
    
});

// Button disabled

function success1() {
    if (document.getElementById("input-1").value.length !== 7 ) {
        document.getElementById('ns-1').disabled = true;
        document.getElementById('targaContainer').classList.remove("correct");
        document.getElementById('targaContainer').classList.remove("incorrect");
        document.getElementById('errorTarga').classList.remove("errorTargaOn");
        
    } else {
        if (LicensePlateValidator(document.getElementById("input-1").value)) {
            document.getElementById('targaContainer').classList.remove("incorrect");
            document.getElementById('errorTarga').classList.remove("errorTargaOn");
            document.getElementById('targaContainer').classList.add("correct");
            document.getElementById('ns-1').disabled = false;
        } else {
            document.getElementById('targaContainer').classList.remove("correct");
            document.getElementById('errorTarga').classList.add("errorTargaOn");
            document.getElementById('targaContainer').classList.add("incorrect");
            document.getElementById('ns-1').disabled = true;
        }
    }
}


async function success2() {

    if (document.getElementById("input-2").value.length !== 5) {
        document.getElementById('ns-2').disabled = true;
        document.getElementById('capContainer').classList.remove("correct");
        document.getElementById('capContainer').classList.remove("incorrect");
        document.getElementById('errorCap').classList.remove("errorTargaOn");
    } else {

        let ok = await IsValidCap(document.getElementById("input-2").value);

        if (ok === true) {
            console.log("Ramo true");
            document.getElementById('capContainer').classList.remove("incorrect");
            document.getElementById('errorCap').classList.remove("errorTargaOn");
            document.getElementById('capContainer').classList.add("correct");
            document.getElementById('ns-2').disabled = false;
        }

        if (ok === false){
            console.log("Ramo false");
            document.getElementById('capContainer').classList.remove("correct");
            document.getElementById('errorCap').classList.add("errorTargaOn");
            document.getElementById('capContainer').classList.add("incorrect");
            document.getElementById('ns-2').disabled = true;
        }
    }
}


function success3() {
    var select = document.getElementById('versione');
    var value = select.options[select.selectedIndex].value;

    if (value === "") {
        document.getElementById('ns-3').disabled = true;
        document.getElementById('versionContainer').classList.remove("correct");
        document.getElementById('versione').classList.remove("selectVersionColored");
        
    } else {
        document.getElementById('ns-3').disabled = false;
        document.getElementById('versionContainer').classList.add("correct");
        document.getElementById('versione').classList.add("selectVersionColored");
    }
    
}

function success4() {
    if (document.getElementById("input-4").value === "") {
        document.getElementById('ns-4').disabled = true;
    } else {
        document.getElementById('ns-4').disabled = false;
    }
}

function success7() {
    if (document.getElementById("input-7").value === "") {
        document.getElementById('ns-7').disabled = true;
        document.getElementById('interniContainer').classList.remove("correct");
        document.getElementById('interniContainer').classList.remove("incorrect");
        document.getElementById('errorInterni').classList.remove("errorTargaOn");
    } else {
        if(document.getElementById("input-7").value.length >= 5){
            document.getElementById('interniContainer').classList.remove("incorrect");
            document.getElementById('errorInterni').classList.remove("errorTargaOn");
            document.getElementById('interniContainer').classList.add("correct");
            document.getElementById('ns-7').disabled = false;
        }else {
            document.getElementById('interniContainer').classList.remove("correct");
            document.getElementById('errorInterni').classList.add("errorTargaOn");
            document.getElementById('interniContainer').classList.add("incorrect");
            document.getElementById('ns-7').disabled = true;
        }
    }
}

function success8() {
    if (document.getElementById("input-8").value === "") {
        document.getElementById('ns-8').disabled = true;
        document.getElementById('esterniContainer').classList.remove("correct");
        document.getElementById('esterniContainer').classList.remove("incorrect");
        document.getElementById('errorEsterni').classList.remove("errorTargaOn");
    } else {
        if(document.getElementById("input-8").value.length >= 5){
            document.getElementById('esterniContainer').classList.remove("incorrect");
            document.getElementById('errorEsterni').classList.remove("errorTargaOn");
            document.getElementById('esterniContainer').classList.add("correct");
            document.getElementById('ns-8').disabled = false;
        }else {
            document.getElementById('esterniContainer').classList.remove("correct");
            document.getElementById('errorEsterni').classList.add("errorTargaOn");
            document.getElementById('esterniContainer').classList.add("incorrect");
            document.getElementById('ns-8').disabled = true;
        }
    }
}


function success9() {
    let nUpload =document.getElementById("FotoAuto");
    console.log(nUpload.files.length);
    document.getElementById("numberUpload").innerHTML = nUpload.files.length+" file caricati";
    document.getElementById('numberUpload').classList.remove("uploadTextIncorrect");
    document.getElementById('numberUpload').classList.remove("uploadTextCorrect");
    
    if (document.getElementById("FotoAuto").value === "") {
        document.getElementById('ns-9').disabled = true;
        document.getElementById('numberUpload').classList.add("uploadTextIncorrect");
        document.getElementById('numberUpload').classList.remove("uploadTextCorrect");
        
    } else {
        document.getElementById('ns-9').disabled = false;
        document.getElementById('numberUpload').classList.remove("uploadTextIncorrect");
        document.getElementById('numberUpload').classList.add("uploadTextCorrect");
    }
}

function success10() {

    if(document.getElementById("input-10-1").value.length > 0){
        document.getElementById('contattoNome').classList.add("correct");
    }else {
        document.getElementById('contattoNome').classList.remove("correct");
    }


    if(document.getElementById("input-10-2").value.length > 0){
        document.getElementById('contattoCognome').classList.add("correct");
    }else {
        document.getElementById('contattoCognome').classList.remove("correct");
    }


    if(document.getElementById("input-10-3").value.length == ""){
        document.getElementById('contattoTelefono').classList.remove("correct");
        document.getElementById('contattoTelefono').classList.remove("incorrect");
    } else if (document.getElementById("input-10-3").value.length != "") {
        if (IsValidPhone(document.getElementById("input-10-3").value)) {
            console.log(IsValidPhone(document.getElementById("input-10-3").value));
            document.getElementById('contattoTelefono').classList.remove("incorrect");
            document.getElementById('contattoTelefono').classList.add("correct");
        } else {
            console.log(IsValidPhone(document.getElementById("input-10-3").value));
            document.getElementById('contattoTelefono').classList.remove("correct");
            document.getElementById('contattoTelefono').classList.add("incorrect");
        }
    }


    if(document.getElementById("input-10-4").value.length == ""){
        document.getElementById('contattoEmail').classList.remove("correct");
        document.getElementById('contattoEmail').classList.remove("incorrect");
    } else if (document.getElementById("input-10-4").value.length != "") {
        if (IsValidEmail(document.getElementById("input-10-4").value)) {
            document.getElementById('contattoEmail').classList.remove("incorrect");
            document.getElementById('contattoEmail').classList.add("correct");
        } else {
            document.getElementById('contattoEmail').classList.remove("correct");
            document.getElementById('contattoEmail').classList.add("incorrect");
        }
    }

    if (IsValidEmail(document.getElementById("input-10-4").value)) {
        document.getElementById('errorEmail').classList.remove("errorTargaOn");
    }

    if (IsValidPhone(document.getElementById("input-10-3").value)) {
        document.getElementById('errorTelefono').classList.remove("errorTargaOn");
    }

    if (document.getElementById("input-10-3").value.length == "" && document.getElementById("input-10-4").value.length == "") {
        document.getElementById('errorTelefonoEmail').classList.remove("errorTargaOn");
        document.getElementById('errorTelefono').classList.remove("errorTargaOn");
        document.getElementById('errorEmail').classList.remove("errorTargaOn");
    }

    if (!IsValidEmail(document.getElementById("input-10-4").value) && !IsValidPhone(document.getElementById("input-10-3").value) && document.getElementById("input-10-3").value.length != "" && document.getElementById("input-10-4").value.length != "") {
        document.getElementById('errorTelefonoEmail').classList.add("errorTargaOn");
        document.getElementById('errorTelefono').classList.remove("errorTargaOn");
        document.getElementById('errorEmail').classList.remove("errorTargaOn");
    }

    if ((!IsValidEmail(document.getElementById("input-10-4").value) && document.getElementById("input-10-4").value.length != "" && IsValidPhone(document.getElementById("input-10-3").value) )||( !IsValidEmail(document.getElementById("input-10-4").value) && document.getElementById("input-10-4").value.length != "" && document.getElementById("input-10-3").value.length == "")) {
        document.getElementById('errorTelefonoEmail').classList.remove("errorTargaOn");
        document.getElementById('errorTelefono').classList.remove("errorTargaOn");
        document.getElementById('errorEmail').classList.add("errorTargaOn");
    } 

    if ((IsValidEmail(document.getElementById("input-10-4").value) && document.getElementById("input-10-3").value.length != "" && !IsValidPhone(document.getElementById("input-10-3").value)) || (!IsValidPhone(document.getElementById("input-10-3").value) && document.getElementById("input-10-3").value.length != "" && document.getElementById("input-10-4").value.length == "")) {
        document.getElementById('errorTelefono').classList.add("errorTargaOn");
        document.getElementById('errorTelefonoEmail').classList.remove("errorTargaOn");
        document.getElementById('errorEmail').classList.remove("errorTargaOn");
    }



    if (document.getElementById("input-10-1").value === "" || document.getElementById("input-10-2").value === "" || !IsValidPhone(document.getElementById("input-10-3").value) || !IsValidEmail(document.getElementById("input-10-4").value)) {
        document.getElementById('ns-10').disabled = true;
    } else {
        document.getElementById('ns-10').disabled = false;
    }
}


