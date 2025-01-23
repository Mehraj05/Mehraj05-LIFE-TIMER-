const settingCog = document.getElementById("setting-icon");
const settingContent = document.getElementById("settingContent");
let isDOBOpen = false;
const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
let dateOfBirth;
const dobBtn = document.getElementById("dob-btn");
const dobInput = document.getElementById("dobInput");
const yearEL = document.getElementById("YEAR");
const monthEL = document.getElementById("MONTH");
const dayEL = document.getElementById("DAY");
const hourEL = document.getElementById("HOUR");
const minuteEL = document.getElementById("MINUTES");
const secondEL = document.getElementById("SECOND");
maketwodigitnumber=(number)=>{
    return number > 9 ? number : `0${number}`
};
const updateAge = () => {
    const currentDate= new Date();
    const datediff = currentDate - dateOfBirth;
    const year = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((datediff / (1000 * 60 * 60 * 24 * 365))%12);
    const day = Math.floor((datediff / (1000 * 60 * 60 * 24))%30);
    const hour = Math.floor((datediff / (1000 * 60 * 60 ))%24);
    const minute = Math.floor((datediff / (1000 * 60))%60);
    const seconds = Math.floor((datediff / (1000))%60);
    yearEL.innerHTML=year;
    monthEL.innerHTML=month;
    hourEL.innerHTML=hour;
    dayEL.innerHTML=day;
    minuteEL.innerHTML=minute;
    secondEL.innerHTML=seconds;
    };

const toggleDateOfBirth = () => {
    if (isDOBOpen) {
        settingContent.classList.add("hide");
    } else {
        settingContent.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
};

const setDOBHandler = () => {
    dateOfBirth = new Date(dobInput.value);
    if (dobInput.value) {
        firstText.classList.add("hide");
        secondText.classList.remove("hide");
        updateAge();
        setInterval(()=> updateAge(),1000)
    } else {
        firstText.classList.remove("hide");
        secondText.classList.add("hide");
    }
};


settingCog.addEventListener("click", toggleDateOfBirth);
dobBtn.addEventListener("click", setDOBHandler);
