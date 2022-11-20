let state = {
  page: "welcome",
  players: [],
  rounds: 0,
  currentPlayer: 0,
  players_num: 2,
};

const mains = ["welcome", "players", "game", "scores"];

// view funcs

const hideMains = () =>
  document
    .querySelectorAll("main")
    .forEach((e) => (e.style.visibility = "hidden"));

function render(s) {
  hideMains();
  document.getElementById(s.page).style.visibility = "visible";
}

// actions

function startNewGame(s) {
  // const newState = {...s};
  // newState.page = 'players';
  // return newState;
  return { ...s, page: "players" };
}

function players_page() {
  for (let i = 0; i < state.players_num; i++) {
    document.getElementById("players").createElement("template");

    /*
    let label = players_e.createElement("Label");
    label.htmlFor = "text" + instance;
    label.innerHTML = "Hello";*/
  }
}

// attach events

document.addEventListener("DOMContentLoaded", render(state));
const start = document.getElementById("start");
start.addEventListener("click", () => {
  state = startNewGame(state);
  render(state);
});
players_page();
