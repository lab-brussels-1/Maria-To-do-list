import { EVENT_ID, INPUT_BTN_ID, INPUT_ID} from "../data.js";
import { addToDoHandler } from "../handlers/handler.js";


// DOM elements
const addBtn  = document.getElementById(INPUT_BTN_ID);
const userIdInput = document.getElementById(INPUT_ID);

addBtn.addEventListener(EVENT_ID, function (e) {
  const userId = userIdInput.value;
  addToDoHandler(userId);
});