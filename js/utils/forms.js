function createLoginForm() {

  // Creates username display label and input box
  var username_text = document.createTextNode("Username:");
  var username_input = document.createElement("input");
  username_input.id = "usernameInput";
  username_input.setAttribute("type", "text");
  username_input.setAttribute("name", "username");

  // Creates username div to hold display text and input box
  var login_username_div = document.createElement("div");
  login_username_div.className = "login";
  login_username_div.appendChild(username_text);
  login_username_div.appendChild(username_input);



  // Creates password display label and input box
  var password_text = document.createTextNode("Password:");
  var password_input = document.createElement("input");
  password_input.id = "passwordInput";
  password_input.setAttribute("type", "password");
  password_input.setAttribute("name", "password");

  // Creates password div to hold display text and input box
  var login_password_div = document.createElement("div");
  login_password_div.className = "login";
  login_password_div.appendChild(password_text);
  login_password_div.appendChild(password_input);



  // Creates login form to hold username and password divs
  var login_form = document.createElement("form");
  login_form.id = "loginForm";
  login_form.className = "scrollMenu";
  login_form.appendChild(login_username_div);
  login_form.appendChild(login_password_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(login_form);

}

function createSignupForm() {

  // Creates firstname display label and input box
  var firstname_text = document.createTextNode("Firstname:");
  var firstname_input = document.createElement("input");
  firstname_input.setAttribute("type", "text");
  firstname_input.setAttribute("name", "firstname");

  // Creates firstname div to hold display text and input box
  var signup_firstname_div = document.createElement("div");
  signup_firstname_div.className = "signup";
  signup_firstname_div.appendChild(firstname_text);
  signup_firstname_div.appendChild(firstname_input);



  // Creates lastname display text and input box
  var lastname_text = document.createTextNode("Lastname:");
  var lastname_input = document.createElement("input");
  lastname_input.setAttribute("type", "text");
  lastname_input.setAttribute("name", "lastname");

  // Creates lastname div to hold display text and input box
  var signup_lastname_div = document.createElement("div");
  signup_lastname_div.className = "signup";
  signup_lastname_div.appendChild(lastname_text);
  signup_lastname_div.appendChild(lastname_input);



  // Creates line break for form div spacing
  var br1 = document.createElement("br");



  // Creates username display text and input box
  var username_text = document.createTextNode("Username:");
  var username_input = document.createElement("input");
  username_input.setAttribute("type", "text");
  username_input.setAttribute("name", "username");

  // Creates username div to hold display text and input box
  var signup_username_div = document.createElement("div");
  signup_username_div.className = "signup";
  signup_username_div.appendChild(username_text);
  signup_username_div.appendChild(username_input);



  // Creates line break for form div spacing
  var br2 = document.createElement("br");



  // Creates password display text and input box
  var password_text = document.createTextNode("Password:");
  var password_input = document.createElement("input");
  password_input.setAttribute("type", "password");
  password_input.setAttribute("name", "password");

  // Creates password div to hold display text and input box
  var signup_password_div = document.createElement("div");
  signup_password_div.className = "signup";
  signup_password_div.appendChild(password_text);
  signup_password_div.appendChild(password_input);



  // Creates confirm display text and input box
  var confirm_text = document.createTextNode("Confirm:");
  var confirm_input = document.createElement("input");
  confirm_input.setAttribute("type", "password");
  confirm_input.setAttribute("name", "confirm");

  // Creates confirm div to hold display text and input box
  var signup_confirm_div = document.createElement("div");
  signup_confirm_div.className = "signup";
  signup_confirm_div.appendChild(confirm_text);
  signup_confirm_div.appendChild(confirm_input);



  // Creates signup form to hold firstname, lastname, username, password and confirm divs
  var signup_form = document.createElement("form");
  signup_form.id = "signupForm";
  signup_form.className = "scrollMenu";
  signup_form.appendChild(signup_firstname_div);
  signup_form.appendChild(signup_lastname_div);
  signup_form.appendChild(br1);
  signup_form.appendChild(signup_username_div);
  signup_form.appendChild(br2);
  signup_form.appendChild(signup_password_div);
  signup_form.appendChild(signup_confirm_div);

  //Injecting signup form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(signup_form);

}

function createStatsForm() {

  // Creates username display label and text
  var hits_label = document.createTextNode("Hits: ");
  var hits_text = document.createTextNode(database.stats.admin.hits);

  // Creates username div to hold display text and input box
  var stats_hits_div = document.createElement("div");
  stats_hits_div.className = "login";
  stats_hits_div.appendChild(hits_label);
  stats_hits_div.appendChild(hits_text);



  // Creates password display label and text
  var misses_label = document.createTextNode("Misses: ");
  var misses_text = document.createTextNode(database.stats.admin.misses);

  // Creates password div to hold display text and input box
  var stats_misses_div = document.createElement("div");
  stats_misses_div.className = "login";
  stats_misses_div.appendChild(misses_label);
  stats_misses_div.appendChild(misses_text);



  // Creates login form to hold username and password divs
  var stats_form = document.createElement("form");
  stats_form.id = "statsForm";
  stats_form.className = "scrollMenu";
  stats_form.appendChild(stats_hits_div);
  stats_form.appendChild(stats_misses_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(stats_form);

}

function createHow2PlayForm() {

  var instructions = "It's just math";

  // Creates username display label and text
  var h2p_label = document.createTextNode("How 2 Play: ");
  var h2p_text = document.createTextNode(instructions);

  // Creates username div to hold display text and input box
  var h2p_h2p_div = document.createElement("div");
  h2p_h2p_div.className = "login";
  h2p_h2p_div.appendChild(h2p_label);
  h2p_h2p_div.appendChild(h2p_text);



  // Creates login form to hold username and password divs
  var h2p_form = document.createElement("form");
  h2p_form.id = "h2pForm";
  h2p_form.className = "scrollMenu";
  h2p_form.appendChild(h2p_h2p_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(h2p_form);

}

function createSettingsForm() {

  // Creates username display text and input slider
  var volume_text = document.createTextNode("Volume:");
  var volume_input = document.createElement("input");  // document.getElementById("").value

  volume_input.id = "volumeSlider";

  volume_input.setAttribute("type", "range");
  volume_input.setAttribute("name", "volume");
  volume_input.setAttribute("min", "0");
  volume_input.setAttribute("max", "1");
  volume_input.setAttribute("step", "0.1");
  volume_input.setAttribute("value", "50");
  volume_input.setAttribute(oninput, "SetVolume(this.value)");
  volume_input.setAttribute(onchange, "SetVolume(this.value)");
  volume_input.addEventListener('change', setVolume);
  volume_input.addEventListener('input', setVolume);

  // Creates username div to hold display text and input slider
  var settings_volume_div = document.createElement("div");
  settings_volume_div.className = "login";
  settings_volume_div.appendChild(volume_text);
  settings_volume_div.appendChild(volume_input);



  // Creates password display text and check box
  var time_text = document.createTextNode("Time:");
  var time_input = document.createElement("input");
  time_input.id = "bossValue";
  time_input.setAttribute("type", "checkbox");
  time_input.setAttribute("name", "time");
  if (boss_fight) {
    time_input.checked = true;
  } else {
    time_input.checked = false;
  }
  time_input.addEventListener('change', setBoss);

  // Creates password div to hold display text and check box
  var settings_time_div = document.createElement("div");
  settings_time_div.className = "login";
  settings_time_div.appendChild(time_text);
  settings_time_div.appendChild(time_input);



  // Creates login form to hold username and password divs
  var settings_form = document.createElement("form");
  settings_form.id = "settingsForm";
  settings_form.className = "scrollMenu";
  settings_form.appendChild(settings_volume_div);
  settings_form.appendChild(settings_time_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(settings_form);

}

function createAccountForm() {

  // Creates username display label and text
  var username_label = document.createTextNode("Username:");
  var username_text = document.createTextNode("admin");

  // Creates username div to hold display text and input box
  var account_username_div = document.createElement("div");
  account_username_div.className = "login";
  account_username_div.appendChild(username_label);
  account_username_div.appendChild(username_text);



  // Creates password display label and text
  var password_label = document.createTextNode("Name:");
  var password_text = document.createTextNode(database.users.admin.firstname + " " + database.users.admin.lastname);

  // Creates password div to hold display text and input box
  var account_password_div = document.createElement("div");
  account_password_div.className = "login";
  account_password_div.appendChild(password_label);
  account_password_div.appendChild(password_text);



  // Creates login form to hold username and password divs
  var account_form = document.createElement("form");
  account_form.id = "loginForm";
  account_form.className = "scrollMenu";
  account_form.appendChild(account_username_div);
  account_form.appendChild(account_password_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(account_form);

}

function createMapForm() {

  var instructions = "Coming \n Soon";

  // Creates username display text
  var map_p_tag = document.createElement("p");
  map_p_tag.id = "mapForm";
  var map_text = document.createTextNode(instructions);
  map_p_tag.appendChild(map_text);

  // Creates username div to hold display text and input box
  var map_map_div = document.createElement("div");
  map_map_div.className = "login";
  map_map_div.appendChild(map_p_tag);



  // Creates login form to hold username and password divs
  var map_form = document.createElement("form");
  map_form.id = "mapForm";
  map_form.className = "scrollMenu";
  map_form.appendChild(map_map_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(map_form);

}

function createGameForm() {

  // Creates username display text
  var left_paren = document.createTextNode("[");
  var lower_number = document.createTextNode(lower);
  var middle_comma = document.createTextNode(", ");
  var upper_number = document.createTextNode(upper);
  var right_paren = document.createTextNode("]");

  // Creates username div to hold display text and input box
  var game_range_div = document.createElement("div");
  game_range_div.className = "login";
  game_range_div.id = "rangeDiv"
  game_range_div.appendChild(left_paren);
  game_range_div.appendChild(lower_number);
  game_range_div.appendChild(middle_comma);
  game_range_div.appendChild(upper_number);
  game_range_div.appendChild(right_paren);



  // Creates username display text
  var multiplicand_div = document.createElement("div");
  multiplicand_div.id = "multiplicandText";
  var multiplicand_text = document.createTextNode(multiplicand);
  multiplicand_div.appendChild(multiplicand_text);
  var sign_text = document.createTextNode(sign);
  var entry_input = document.createElement("input");
  entry_input.id = "entryInput";
  entry_input.setAttribute("type", "number");
  entry_input.setAttribute("placeholder", "###");
  entry_input.setAttribute("value", "");
  entry_input.setAttribute("maxlength", "3");
  entry_input.setAttribute("size", "4");
  entry_input.setAttribute("min", "-999");
  entry_input.setAttribute("max", "999");
  entry_input.setAttribute("name", "entry");
  entry_input.addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  var equal_text = document.createTextNode(equal);
  var solution_div = document.createElement("div");
  solution_div.id = "solutionText";
  var solution_text = document.createTextNode(solution);
  solution_div.appendChild(solution_text);

  // Creates username div to hold display text and input box
  var game_entry_div = document.createElement("div");
  game_entry_div.className = "login";
  game_entry_div.appendChild(multiplicand_div);
  game_entry_div.appendChild(sign_text);
  game_entry_div.appendChild(entry_input);
  game_entry_div.appendChild(equal_text);
  game_entry_div.appendChild(solution_div);


  // Creates username display text
  var button_text = document.createTextNode("History");
  var history_button = document.createElement("button");
  var history_div = document.createElement("div");
  history_button.className = "dropbtn";
  history_button.addEventListener('click', myFunction);
  history_div.className = "dropdown-content";
  history_div.id = "myDropdown";
  history_button.appendChild(button_text);
  var history_dropdown = document.createElement("div");
  history_dropdown.className = "dropdown";
  history_dropdown.appendChild(history_button);
  history_dropdown.appendChild(history_div);



	// Does a thing
	var game_history_div = document.createElement("div");
	game_history_div.className = "login";
	game_history_div.appendChild(history_dropdown);



  // Creates login form to hold username and password divs
  var game_range_form = document.createElement("form");
  game_range_form.id = "rangeBanner";
  game_range_form.className = "scrollMenu";
  game_range_form.appendChild(game_range_div);

  // Creates login form to hold username and password divs
  var game_entry_form = document.createElement("form");
  game_entry_form.id = "equationBanner";
  game_entry_form.className = "scrollMenu";
  game_entry_form.appendChild(game_entry_div);

  // Creates login form to hold username and password divs
  var game_history_form = document.createElement("form");
  game_history_form.id = "historyBanner";
  game_history_form.className = "scrollMenu";
  game_history_form.appendChild(game_history_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(game_range_form);
  scene_html.appendChild(game_entry_form);
  scene_html.appendChild(game_history_form);

}

function createHintForm() {

  // Creates display label and text
  var hint_label = document.createTextNode("Hint");
  if (current_level == 1) {
    var hint_text = document.createTextNode("This is the placeholder text for the level 1 hint");
  } else if (current_level == 2) {
    var hint_text = document.createTextNode("This is the placeholder text for the level 2 hint");
  }
  var br = document.createElement("br");
  // Creates hint div to hold display label and text
  var hint_hint_div = document.createElement("div");
  hint_hint_div.appendChild(hint_label);
  hint_hint_div.appendChild(br);
  hint_hint_div.appendChild(hint_text);

  // Creates hint form to hold the hint div
  var hint_form = document.createElement("form");
  hint_form.id = "hintForm";
  hint_form.className = "scrollMenu";
  hint_form.appendChild(hint_hint_div);

  // Injecting hint form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(hint_form);

}
