let state = {
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  player: "X",
  playing: false,
};

function start_game() {
  state.playing = true;
  state.board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  state.player = "X";
}

function end_game() {
  state.playing = false;
  clear_board();
}

function render_by_playing() {
  if (state.playing === true) {
    document.getElementById("end").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
  } else {
    document.getElementById("end").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "visible";
  }
}

function render_player() {
  if (state.player === "X") {
    state.player = "O";
  } else {
    state.player = "X";
  }
}

function update_board(r, c, td) {
  if (state.board[r][c] === "") {
    td.innerHTML = state.player;
    state.board[r][c] = state.player;
    render_player();
  }
}

function clear_board(r, c, td) {
  for (const td of document.querySelectorAll("td")) {
    td.innerHTML = "";
  }
}

function allAreNotNull(arr) {
  return !arr.every((element) => element === "");
}

const allEqual = (arr) => arr.every((v) => v === arr[0]);

function add_xo_listeners() {
  for (const td of document.querySelectorAll("td")) {
    td.addEventListener("click", function () {
      const c = td.getAttribute("attr-col");
      const r = td.getAttribute("attr-row");
      update_board(r, c, td);
      if (check_win()) {
        alert("win!");
      }
    });
  }
}

function check_win() {
  b = state.board;
  for (let i = 0; i < 3; i++) {
    arr1 = [b[i][0], b[i][1], b[i][2]];
    if (allAreNotNull(arr1) && allEqual(arr1)) {
      return true;
    }
    arr2 = [b[0][i], b[1][i], b[2][i]];
    if (allAreNotNull(arr2) && allEqual(arr2)) {
      return true;
    }
  }
  arr3 = [b[0][0], b[1][1], b[2][2]];
  if (allAreNotNull(arr3) && allEqual(arr3)) {
    return true;
  }
  arr4 = [b[0][2], b[1][1], b[2][0]];
  if (allAreNotNull(arr4) && allEqual(arr4)) {
    return true;
  }
}

document.addEventListener("DOMContentLoaded", () => render_by_playing());
const start = document.getElementById("start");
start.addEventListener("click", () => {
  start_game();
  render_by_playing();
  add_xo_listeners();
});
const end = document.getElementById("end");
end.addEventListener("click", () => {
  end_game();
  render_by_playing();
});
