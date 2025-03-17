// *********************CALENDAR**************************************
var days = ["M", "Tu", "W", "Th", "F", "Sa", "Su"];
const calendar = document.getElementById('calendar');

// let domParser = new DOMParser();

for(var i=0; i<7; i++){

    // let calendar = `<div class="calendar_square"> </div>`
    // domParser.parseFromString(calendar).getElementsByTagName('div')[0];


    const calendar_cell = document.createElement('div');
    calendar_cell.classList.add("calendar_square");
    const calendarDayText = document.createTextNode(days[i]);
    const calendarDay = document.createElement('p');
    calendarDay.classList.add("calendar_date");
    calendarDay.append(calendarDayText);
    calendar_cell.append(calendarDay);
    calendar.append(calendar_cell);
}

var date =[];
for(var x=0; x<31; x++){
    date[x] = x + 1;
}
var today = new Date();
var d = String(today.getDate());
today = d;
console.log(today);

let a = 0;

for(var j=0; j<5; j++){
    for(var i=0; i<7; i++){
        if(a>30){
            break;
        }
        const calendar_cell = document.createElement('div');
        calendar_cell.classList.add("calendar_square");
        const calendarDateText = document.createTextNode(date[a]);
        const calendarDate = document.createElement('p');
        calendarDate.classList.add("calendar_date");
        calendarDate.append(calendarDateText);
        calendar_cell.append(calendarDate);
        calendar.append(calendar_cell);
        a += 1;
        if(a == today){
            calendar_cell.classList.add("today");
            // calendar_cell.classList.remove("calendar_date");
        }
    }
}



// *********************NEW ENTRY*************************************
const listDiv = document.getElementById('listDiv');
const newEntry = document.getElementById('newEntry');
const list = document.getElementById('list');
const btnAdd = document.getElementById('btnAdd');
var textBoxNew;
var btnSubmit;
var clicked = false;

btnAdd.addEventListener('click', function(){
    if(clicked){
        alert("Enter Something To Do and click Submit");
    }
    else{
        textBoxNew = document.createElement("input");
        textBoxNew.setAttribute('type', 'text');
        textBoxNew.classList.add("textbox");
        btnSubmit = document.createElement('button');
        btnSubmit.id = 'btnSubmit';
        btnSubmit.innerHTML = "Submit";

//*******getting input *********/

        // const textBox = document.querySelector('.textbox');
        // textBox.addEventListener("keyup", function(key_press){
        //     if(key_press == 13) {
        //         key_press.preventDefault();
        //         btnSubmit.click();
        //     }
        // })

        btnSubmit.addEventListener('click', function(){
            const listItem = document.createElement("li");
            listItem.classList.add("itemBox");
            const myEntry = document.createTextNode(textBoxNew.value);
            if(textBoxNew.value){
                listItem.append(myEntry);
                list.append(listItem);
                document.querySelector('.textbox').value = "";
            }
            else{
                alert("Enter something to do!");
            }

        })

        newEntry.append(textBoxNew);
        newEntry.append(btnSubmit);
        btnSubmit = document.getElementById('btnSubmit');
        clicked = true;
    }
})

// *********************CLEAR*************************************
const btnClear = document.getElementById('btnClear');

btnClear.addEventListener('click', function(){
    location.reload();
})






