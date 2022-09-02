import { DELETE_ID, EVENT_ID } from "../data.js";
import { deleteAll } from "../handlers/deleteAllhandler.js";

const deleteBtn = document.getElementById(DELETE_ID)
deleteBtn.addEventListener(EVENT_ID, deleteAll)