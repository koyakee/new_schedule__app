// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

function showCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const currentDate = `${year}/${month}/${day}`;
    const textElement = document.getElementById("today");
    textElement.textContent = currentDate;
}
document.addEventListener("DOMContentLoaded", showCurrentDate);

function getNumberOfSchedule() {
    const rowCount = scheduleTable.rows.length;
    const countElement = document.getElementById("scheduleCount");
    countElement.textContent = rowCount;
}
document.addEventListener("DOMContentLoaded", getNumberOfSchedule);