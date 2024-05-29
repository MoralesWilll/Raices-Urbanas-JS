import styles from "./appointment.css";
import close from "/app/assets/images/cancel_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { navigateTo } from "../../../Router";


export async function appointmentScene() {
const root = document.getElementById("root");

  root.innerHTML = `

  <div class="${styles.calendarContainer}">
        <div class="${styles.container}">
            <div class="${styles.left}">
                <div class="${styles.calendar}">
                    <div class="${styles.month}">
                        <i class="${styles.fas} ${styles.faAngleLeft} ${styles.prev}"></i>
                        <div class="date">diciembre 2015</div>
                        <i class="${styles.fas} ${styles.faAngleRight} ${styles.next}"></i>
                    </div>
                    <div class="${styles.weekdays}">
                        <div>dom</div>
                        <div>lun</div>
                        <div>mar</div>
                        <div>mie</div>
                        <div>jue</div>
                        <div>vie</div>
                        <div>sab</div>
                    </div>
                    <div class="${styles.days}"></div>
                    <div class="${styles.gotoToday}">
                        <div class="${styles.goto}">
                            <input type="text" placeholder="mm/yyyy" class="dateInput"" />
                            <button class="gotoBtn">Ir</button>
                        </div>
                        <button class="todayBtn">Hoy</button>
                    </div>
                </div>
            </div>
            <div class="${styles.right}">
                <div class="${styles.buttonClose}">
                    <button id="close-button" class="${styles.closeButton}"><img src="${close}" alt=""></button>
                </div>
                <div class="${styles.todayDate}">
                    <div class="${styles.eventDay}">mie</div>
                    <div class="${styles.eventDate}">12th diciembre 2022</div>
                </div>
                
                <div class="${styles.events}"></div>
                <div class="${styles.addEventWrapper}">
                    <div class="${styles.addEventHeader}">
                        <div class="${styles.title}">Añadir Evento</div>
                        <i class="${styles.fas} ${styles.faTimes} ${styles.close}"></i>
                    </div>
                    <div class="${styles.addEventBody}">
                        <div class="${styles.addEventInput}">
                            <input type="text" placeholder="nombre del evento" class="eventName" />
                        </div>
                        <div class="${styles.addEventInput}">
                            <input type="text" placeholder="A que hora asistiras?" class="eventTimeFrom" />
                        </div>
                        <div class="${styles.addEventInput}">
                            <input type="text" placeholder="Hasta que horas asistiras?" class="eventTimeTo" />
                        </div>
                    </div>
                    <div class="${styles.addEventFooter}">
                        <button class="${styles.addEventBtn}">Añadir Evento</button>
                    </div>
                </div>
                
            </div>
            <button class="${styles.addEvent}">
                <i class="${styles.fas} ${styles.faPlus}"></i>
            </button>
        </div>
    </div>
    
    `;

  


  const calendar = document.querySelector(`.${styles.calendar}`),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(`.${styles.days}`),
    prev = document.querySelector(`.${styles.prev}`),
    next = document.querySelector(`.${styles.next}`),
    todayBtn = document.querySelector(".todayBtn"),
    gotoBtn = document.querySelector(".gotoBtn"),
    dateInput = document.querySelector(".dateInput"),
    eventDay = document.querySelector(`.${styles.eventDay}`),
    eventDate = document.querySelector(`.${styles.eventDate}`),
    eventsContainer = document.querySelector(`.${styles.events}`),
    addEventBtn = document.querySelector(`.${styles.addEvent}`),
    addEventWrapper = document.querySelector(`.${styles.addEventWrapper}`),
    addEventCloseBtn = document.querySelector(`.${styles.close}`),
    addEventTitle = document.querySelector(".eventName"),
    addEventFrom = document.querySelector(".eventTimeFrom"),
    addEventTo = document.querySelector(".eventTimeTo"),
    addEventSubmit = document.querySelector(`.${styles.addEventBtn}`);

  let today = new Date();
  let activeDay;
  let month = today.getMonth();
  let year = today.getFullYear();

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // const eventsArr = [
  //   {
  //     day: 13,
  //     month: 11,
  //     year: 2022,
  //     events: [
  //       {
  //         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
  //         time: "10:00 AM",
  //       },
  //       {
  //         title: "Event 2",
  //         time: "11:00 AM",
  //       },
  //     ],
  //   },
  // ];

  const eventsArr = [];
  getEvents();
  console.log(eventsArr);

  //function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
  function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " " + year;

    let days = "";

    for (let x = day; x > 0; x--) {
      days += `<div class="${styles.day} ${styles.prevDate}">${
        prevDays - x + 1
      }</div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
      //check if event is present on that day
      let event = false;
      eventsArr.forEach((eventObj) => {
        if (
          eventObj.day === i &&
          eventObj.month === month + 1 &&
          eventObj.year === year
        ) {
          event = true;
        }
      });
      if (
        i === new Date().getDate() &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth()
      ) {
        activeDay = i;
        getActiveDay(i);
        updateEvents(i);
        if (event) {
          days += `<div class="${styles.day} ${styles.today} ${styles.active} ${styles.event}">${i}</div>`;
        } else {
          days += `<div class="${styles.day} ${styles.today} ${styles.active}">${i}</div>`;
        }
      } else {
        if (event) {
          days += `<div class="${styles.day} ${styles.event}">${i}</div>`;
        } else {
          days += `<div class="${styles.day} ">${i}</div>`;
        }
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="${styles.day} ${styles.nextDate}">${j}</div>`;
    }
    daysContainer.innerHTML = days;
    addListner();
  }

  //function to add month and year on prev and next button
  function prevMonth() {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    initCalendar();
  }

  function nextMonth() {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    initCalendar();
  }

  prev.addEventListener("click", prevMonth);
  next.addEventListener("click", nextMonth);

  initCalendar();

  //function to add active on day
  function addListner() {
    const days = document.querySelectorAll(`.${styles.day}`);
    days.forEach((day) => {
      day.addEventListener("click", (e) => {
        getActiveDay(e.target.innerHTML);
        updateEvents(Number(e.target.innerHTML));
        activeDay = Number(e.target.innerHTML);
        //remove active
        days.forEach((day) => {
          day.classList.remove(`${styles.active}`);
        });
        //if clicked prev-date or next-date switch to that month
        if (e.target.classList.contains(`${styles.prevDate}`)) {
          prevMonth();
          //add active to clicked day afte month is change
          setTimeout(() => {
            //add active where no prev-date or next-date
            const days = document.querySelectorAll(`.${styles.day}`);
            days.forEach((day) => {
              if (
                !day.classList.contains(`${styles.prevDate}`) &&
                day.innerHTML === e.target.innerHTML
              ) {
                day.classList.add(`${styles.active}`);
              }
            });
          }, 100);
        } else if (e.target.classList.contains(`${styles.nextDate}`)) {
          nextMonth();
          //add active to clicked day afte month is changed
          setTimeout(() => {
            const days = document.querySelectorAll(`.${styles.day}`);
            days.forEach((day) => {
              if (
                !day.classList.contains(`${styles.nextDate}`) &&
                day.innerHTML === e.target.innerHTML
              ) {
                day.classList.add(`${styles.active}`);
              }
            });
          }, 100);
        } else {
          e.target.classList.add(`${styles.active}`);
        }
      });
    });
  }

  todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
  });

  dateInput.addEventListener("input", (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
      dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
      dateInput.value = dateInput.value.slice(0, 7);
    }
    if (e.inputType === "deleteContentBackward") {
      if (dateInput.value.length === 3) {
        dateInput.value = dateInput.value.slice(0, 2);
      }
    }
  });

  gotoBtn.addEventListener("click", gotoDate);

  function gotoDate() {
    console.log("here");
    const dateArr = dateInput.value.split("/");
    if (dateArr.length === 2) {
      if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
        month = dateArr[0] - 1;
        year = dateArr[1];
        initCalendar();
        return;
      }
    }
    alert("dato invalido");
  }

  //function get active day day name and date and update eventday eventdate
  function getActiveDay(date) {
    const days = {
      Mon: "Lunes",
      Tue: "Martes",
      Wed: "Miércoles",
      Thu: "Jueves",
      Fri: "Viernes",
      Sat: "Sábado",
      Sun: "Domingo",
    };
    const day = new Date(year, month, date);
    const dayName = day.toString().split(" ")[0];
    eventDay.innerHTML = days[dayName];
    eventDate.innerHTML = date + " " + months[month] + " " + year;
  }

  //function update events when a day is active
  function updateEvents(date) {
    let events = "";
    eventsArr.forEach((event) => {
      if (
        date === event.day &&
        month + 1 === event.month &&
        year === event.year
      ) {
        event.events.forEach((event) => {
          console.log(event);
          events += `<div class="${styles.event}">
                <div class="${styles.title}">
                  <i class="fas fa-circle"></i>
                  <h3 class="${styles.eventTitle}">${event.title}</h3>
                </div>
                <div class="${styles.eventTime}">
                  <span class="${styles.eventTime}">${event.time}</span>
                </div>
            </div>`;
        });
      }
    });
    if (events === "") {
      events = `<div class="${styles.noEvent}">
                <h3>No hay eventos</h3>
            </div>`;
    }
    eventsContainer.innerHTML = events;
    saveEvents();
  }

  //function to add event
  addEventBtn.addEventListener("click", () => {
    addEventWrapper.classList.toggle(`${styles.active}`);
  });

  addEventCloseBtn.addEventListener("click", () => {
    addEventWrapper.classList.remove(`${styles.active}`);
  });

  document.addEventListener("click", (e) => {
    if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
      addEventWrapper.classList.remove(`${styles.active}`);
    }
  });

  //allow 50 chars in eventtitle
  addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 60);
  });

  function defineProperty() {
    var osccred = document.createElement("div");
    osccred.innerHTML = osccred.style.position = "absolute";
    osccred.style.bottom = "0";
    osccred.style.right = "0";
    osccred.style.fontSize = "10px";
    osccred.style.color = "#ccc";
    osccred.style.fontFamily = "sans-serif";
    osccred.style.padding = "5px";
    osccred.style.background = "#fff";
    osccred.style.borderTopLeftRadius = "5px";
    osccred.style.borderBottomRightRadius = "5px";
    osccred.style.boxShadow = "0 0 5px #ccc";
    document.body.appendChild(osccred);
  }

  defineProperty();

  //allow only time in eventtime from and to
  addEventFrom.addEventListener("input", (e) => {
    addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
    if (addEventFrom.value.length === 2) {
      addEventFrom.value += ":";
    }
    if (addEventFrom.value.length > 5) {
      addEventFrom.value = addEventFrom.value.slice(0, 5);
    }
  });

  addEventTo.addEventListener("input", (e) => {
    addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
    if (addEventTo.value.length === 2) {
      addEventTo.value += ":";
    }
    if (addEventTo.value.length > 5) {
      addEventTo.value = addEventTo.value.slice(0, 5);
    }
  });

  //function to add event to eventsArr
  addEventSubmit.addEventListener("click", () => {
    const eventTitle = addEventTitle.value;
    const eventTimeFrom = addEventFrom.value;
    const eventTimeTo = addEventTo.value;
    if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
      alert("Por favor, rellene todos los campos");
      return;
    }

    //check correct time format 24 hour
    const timeFromArr = eventTimeFrom.split(":");
    const timeToArr = eventTimeTo.split(":");
    if (
      timeFromArr.length !== 2 ||
      timeToArr.length !== 2 ||
      timeFromArr[0] > 23 ||
      timeFromArr[1] > 59 ||
      timeToArr[0] > 23 ||
      timeToArr[1] > 59
    ) {
      alert("Formato de hora no válido");
      return;
    }

    const timeFrom = convertTime(eventTimeFrom);
    const timeTo = convertTime(eventTimeTo);

    //check if event is already added
    let eventExist = false;
    eventsArr.forEach((event) => {
      if (
        event.day === activeDay &&
        event.month === month + 1 &&
        event.year === year
      ) {
        event.events.forEach((event) => {
          if (event.title === eventTitle) {
            eventExist = true;
          }
        });
      }
    });
    if (eventExist) {
      alert("Evento ya añadido");
      return;
    }
    const newEvent = {
      title: eventTitle,
      time: timeFrom + " - " + timeTo,
    };
    console.log(newEvent);
    console.log(activeDay);
    let eventAdded = false;
    if (eventsArr.length > 0) {
      eventsArr.forEach((item) => {
        if (
          item.day === activeDay &&
          item.month === month + 1 &&
          item.year === year
        ) {
          item.events.push(newEvent);
          eventAdded = true;
        }
      });
    }

    if (!eventAdded) {
      eventsArr.push({
        day: activeDay,
        month: month + 1,
        year: year,
        events: [newEvent],
      });
    }

    console.log(eventsArr);
    addEventWrapper.classList.remove(`${styles.active}`);
    addEventTitle.value = "";
    addEventFrom.value = "";
    addEventTo.value = "";
    updateEvents(activeDay);
    //select active day and add event class if not added
    const activeDayEl = document.querySelector(
      `.${styles.day}.${styles.active}`
    );
    if (!activeDayEl.classList.contains(`${styles.event}`)) {
      activeDayEl.classList.add(`${styles.event}`);
    }
  });

  //function to delete event when clicked on event
  eventsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains(`${styles.event}`)) {
      if (confirm("¿Estás seguro de que quieres eliminar este evento?")) {
        const eventTitle = e.target.children[0].children[1].innerHTML;
        eventsArr.forEach((event) => {
          if (
            event.day === activeDay &&
            event.month === month + 1 &&
            event.year === year
          ) {
            event.events.forEach((item, index) => {
              if (item.title === eventTitle) {
                event.events.splice(index, 1);
              }
            });
            //if no events left in a day then remove that day from eventsArr
            if (event.events.length === 0) {
              eventsArr.splice(eventsArr.indexOf(event), 1);
              //remove event class from day
              const activeDayEl = document.querySelector(
                `.${styles.day}.${styles.active}`
              );
              if (activeDayEl.classList.contains(`${styles.event}`)) {
                activeDayEl.classList.remove(`${styles.event}`);
              }
            }
          }
        });
        updateEvents(activeDay);
      }
    }
  });

  //function to save events in local storage
  function saveEvents() {
    localStorage.setItem("events", JSON.stringify(eventsArr));
  }

  //function to get events from local storage
  function getEvents() {
    //check if events are already saved in local storage then return event else nothing
    if (localStorage.getItem("events") === null) {
      return;
    }
    eventsArr.push(...JSON.parse(localStorage.getItem("events")));
  }

  function convertTime(time) {
    //convert time to 24 hour format
    let timeArr = time.split(":");
    let timeHour = timeArr[0];
    let timeMin = timeArr[1];
    let timeFormat = timeHour >= 12 ? "PM" : "AM";
    timeHour = timeHour % 12 || 12;
    time = timeHour + ":" + timeMin + " " + timeFormat;
    return time;
  }

  const a = document.getElementById("close-button");
  a.addEventListener("click", function () {
      navigateTo("/propertyView");
  });


}


