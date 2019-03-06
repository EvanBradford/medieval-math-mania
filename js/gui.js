var lute;
//var antiLute;
var luteX = 96;
var luteY = 96;

var previous_indicator;
var pause_indicator;
var next_indicator;
var indicatorX = 24;
var indicatorY = 24;

var buttonX = 216;
var buttonY = 72;
var small_buttonX = 72;
var small_buttonY = 72;

var left_sword_button;
var right_sword_button;

var ll_number_button;
var lr_number_button;
var rl_number_button;
var rr_number_button;

var pause_menu;

var background;
var background_left;
var background_right;

var midground;

var foreground;
var backgroundX = 1920;
var backgroundY = 768;

var exit_level_button;
var main_menu_button;
var close_button;
var play_button;
var stats_button;
var h2p_button;
var settings_button;
var logout_button;
var account_button;

var login_button;

var hint_button;

var level1_indicator;
var level2_indicator;
var level3_indicator;
var level4_indicator;
var level5_indicator;
var level6_indicator;
var level7_indicator;

var end_level_scene;
var end_level_button;
var end_text;

var hit_text_counter;
var low_text_counter;
var high_text_counter;

function createGUI() {

	switch(current_scene) {

		case 0:

			background = createImage("res/login.png", backgroundX, backgroundY, "center", 0, "center", 0, "image");
			background_left = createImage("res/login.png", backgroundX, backgroundY, "center", -backgroundX, "center", 0, "image");
			background_right = createImage("res/login.png", backgroundX, backgroundY, "center", backgroundX, "center", 0, "image");
			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY, "center", 0, "center", 0, "image");

			// scale_to_canvas(left_sword_button, "center", 0 - (buttonX/2 + 10) * scene_scale_Y, "center", 0 + (buttonY/2 + 140) * scene_scale_Y, "image");
			// scale_to_canvas(right_sword_button, "center", 0 + (buttonX/2 + 50) * scene_scale_Y, "center", 0 + (buttonY/2 + 140) * scene_scale_Y, "image");

			left_sword_button = createButton("res/sword-left.png", "Login", buttonX, buttonY, "center", -(buttonX/2 + 30), "center", (buttonY/2 + 200), "image", function() {
				createjs.Sound.play("sword");
				var key = document.getElementById('usernameInput').value;
				if(key in database.users) {
					if(database["users"][key]["password"] == document.getElementById('passwordInput').value) {
						document.getElementById('usernameInput').value = "";
						document.getElementById('passwordInput').value = "";
						// login_error.alpha = 0;
						// var login_error = createTextBlock("0px", "200px", "200px", "600px", "darkred", 30, "normal", "Username and/or Password did not match.\n Please try again.", 0, enable);
						// message.render = 1;
						// message.current_user = key;
						changeScene(2);
					} else {
						document.getElementById('usernameInput').value = "";
						document.getElementById('passwordInput').value = "";
						document.getElementById('errorText').textContent = "Invalid password";
						// password_input.text = "";
						// login_error.alpha = 1;
					}
				}else {
					document.getElementById('usernameInput').value = "";
					document.getElementById('passwordInput').value = "";
					document.getElementById('errorText').textContent = "Invalid username";
					// login_error.alpha = 1;
				}
			});

			right_sword_button = createButton("res/sword-right.png", "Signup", buttonX, buttonY, "center", (buttonX/2 + 65), "center", (buttonY/2 + 200), "image", function() {
				createjs.Sound.play("sword"); changeScene(1);
			});

			secret_button = createButton("res/secret_button.png", "", backgroundX, backgroundY, "center", 0, "center", 0, "image", function() {
				createjs.Sound.play("sword"); changeScene(8);
			});

			// if (stage.canvas.width < 900) {
			// 	scale_to_canvas(left_sword_button, "center", 0 - (buttonX/2 + 30) * scene_scale_Y, "center", 0 + (buttonY/2 + 200) * scene_scale_Y, "smallgui");
			// 	scale_to_canvas(right_sword_button, "center", 0 + (buttonX/2 + 65) * scene_scale_Y, "center", 0 + (buttonY/2 + 200) * scene_scale_Y, "smallgui");
			// } else {

			break;

		case 1:

    // password_error.text = "Passwords did not match.\n Please try again.";
    // fieldInput_error.text = "Please fill-in\n every field";


			background = createImage("res/login.png", backgroundX, backgroundY);
			background_left = createImage("res/login.png", backgroundX, backgroundY);
			background_right = createImage("res/login.png", backgroundX, backgroundY);
			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			left_sword_button = createButton("res/sword-left.png", "Create", buttonX, buttonY, function() {
				createjs.Sound.play("sword");
				var key = document.getElementById('usernameInput').value;
				if(key in database.users || key == "") {
					// document.getElementById('firstnameInput').value = "";
					// document.getElementById('lastnameInput').value = "";
					// document.getElementById('usernameInput').value = "";
					// document.getElementById('passwordInput').value = "";
					// document.getElementById('confirmInput').value = "";
					document.getElementById('errorText').textContent = "Invalid username";
				}	else {
					if(document.getElementById('firstnameInput').value == "") {
						document.getElementById('errorText').textContent = "Invalid firstname";
					} else {
						if(document.getElementById('lastnameInput').value == "") {
							document.getElementById('errorText').textContent = "Invalid lastname";
						} else {
							if(document.getElementById('passwordInput').value == "") {
								document.getElementById('errorText').textContent = "Invalid password";
							} else {
								if(document.getElementById('passwordInput').value != document.getElementById('confirmInput').value) {
									document.getElementById('errorText').textContent = "Passwords do not match";
								} else {
									changeScene(2);
								}
							}
						}
					}
				}
			});
        // if(firstname_input.text == "" || lastname_input.text == "" || username_input.text == "" || password_input.text == "" || re_password_input.text == "") {
        //
      	//     fieldInput_error.alpha = 1;
      	//     firstname_input.text = "";
      	//     lastname_input.text = "";
      	//     username_input.text = "";
      	//     password_input.text = "";
      	//     re_password_input.text = "";
        //
      	// } else {
        //
        //   if(password_input.text != re_password_input.text) {
        //
        // 		password_error.alpha = 1;
        // 		fieldInput_error.alpha = 0;
        // 		password_input.text = "";
        // 		re_password_input.text = "";
        //
        //   } else {
        //
        // 		var key = username_input.text;
        //
        // 		database["stats"][key] = {
        // 		    hits: 0,
        // 		    misses: 0
        // 		};
        //
        // 		database["users"][key] = {
        // 		    firstname: firstname_input.text,
        // 		    lastname: lastname_input.text,
        // 		    password: password_input.text
        // 		};
        //
        // 		firstname_input.text = "";
        // 		lastname_input.text = "";
        // 		username_input.text = "";
        // 		password_input.text = "";
        // 		re_password_input.text = "";
        // 		fieldInput_error.alpha = 0;
        // 		password_error.alpha = ;
        // 		message.current_user = key;
        // 		message.render = 0;
        //
        //   }
      	// }
      // });
		right_sword_button = createButton("res/sword-right.png", "Cancel", buttonX, buttonY, function() {

			// firstname_input.text = "";
			// lastname_input.text = "";
			// username_input.text = "";
			// password_input.text = "";
			// re_password_input.text = "";
			// fieldInput_error.alpha = 0;
			// password_error.alpha = 0;
			// message.render = 0;
			createjs.Sound.play("sword");
			changeScene(0);
		});

		break;

		case 2:

			background = createImage("res/menu.png", backgroundX, backgroundY);
			background_left = createImage("res/menu-left.png", backgroundX, backgroundY);
			background_right = createImage("res/menu-right.png", backgroundX, backgroundY);

			play_button = createButton("res/menu-button.png", "Play", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(8); });
			stats_button = createButton("res/menu-button.png", "Stats", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(4); });
			h2p_button = createButton("res/menu-button.png", "How To Play", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(5); });
			settings_button = createButton("res/menu-button.png", "Settings", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(6); });
			logout_button = createButton("res/menu-button.png", "Logout", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(0); });
			account_button = createButton("res/menu-button.png", "Account", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(7); });

			break;

		case 3:

	    end_level_scene = createImage("res/login_scroll.png", backgroundX, backgroundY);
	    end_level_scene.visible = false;

	    end_level_button = createButton("res/login-button.png", "Next Level", buttonX, buttonY, function() { createjs.Sound.play("select"); changeScene(8); visibleForm(true);});
	    end_level_button.visible = false;
	    end_level_button.alpha = 0;

	    end_text = createText("Good Job!!", "Oldstyle", "65px", "bold", "gold", 10, 10);
	    end_text.visible = false;
	    //end_text.skewX = -5;
	    end_text.skewY = -15;
	    end_text.textAlign = "center";

	    hit_text = createText("Total Hits:      ", "Oldstyle", "25px", "", "gold", 10, 10);
	    hit_text.visible = false;
	    hit_text.alpha = 0;

	    low_text = createText("Total Lows:     ", "Oldstyle", "25px", "", "gold", 10, 10);
	    low_text.visible = false;
	    low_text.alpha = 0;

	    high_text = createText("Total Highs:    ", "Oldstyle", "25px", "", "gold", 10, 10);
	    high_text.visible = false;
	    high_text.alpha = 0;

	    //low counter
	    low_text_counter = createText("Total Lows: 0", "Oldstyle", "25px", "", "saddlebrown", 10, 10);
	    //high counter
	    high_text_counter = createText("Total High: 0", "Oldstyle", "25px", "", "saddlebrown", 10, 10);
			//hit counter
	    hit_text_counter = createText("Total Hits: 0", "Oldstyle", "25px", "", "saddlebrown", 10, 10);


	    pause_menu = createImage("res/hit-target-pause-menu.png", backgroundX, backgroundY);
	    pause_menu.visible = false;

	    close_button = createButton("res/hit-target-pause-close-button.png", "", buttonX, buttonY, function() {
			createjs.Sound.play("menu");
			pauseAnimation(false);
			visibleButton(false);
			visibleForm(true);
	    });

	    close_button.visible = false;

	    main_menu_button = createButton("res/hit-target-pause-button.png", "Main Menu", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(2);  visibleForm(true);});
	    main_menu_button.visible = false;

	    exit_level_button = createButton("res/hit-target-pause-button.png", "Exit Level", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(8);  visibleForm(true);});
	    exit_level_button.visible = false;

	    settings_button = createButton("res/hit-target-pause-button.png", "Settings", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(6);  visibleForm(true);});
	    settings_button.visible = false;

	    login_button = createButton("res/login-button.png", "Pause", buttonX, buttonY, function() {
			createjs.Sound.play("menu");
			pauseAnimation(true);
			visibleButton(true);
			visibleForm(false);
	    });

	    hint_button = createButton("res/hint-button.png", "Hint", small_buttonX, small_buttonY, function() { createjs.Sound.play("sword"); changeScene(9); visibleForm(true); });
	    hint_button.visible = false;


			if (stage.canvas.width < 900) {
				ll_number_button = createButton("res/number-button-ll.png", "", backgroundX, 288, function() {
					if(digit > 0)
						digit--;
					if(digit < 0)
						digit = 0;

					console.log(digit);
				});
				lr_number_button = createButton("res/number-button-lr.png", "", backgroundX, 288, function() {
					if(digit < 2)
						digit++;
					if(digit > 2)
						digit = 2;

					console.log(digit);
				});
				rl_number_button = createButton("res/number-button-rl.png", "", backgroundX, 288, function() {
					multiplier -= adder;
					document.getElementById("hundredsPlace").textContent = Math.floor(multiplier/100 % 10);
					document.getElementById("tensPlace").textContent = Math.abs(Math.floor(multiplier/10 % 10));
					document.getElementById("onesPlace").textContent = Math.abs(Math.floor(multiplier % 10));
				});
				rr_number_button = createButton("res/number-button-rr.png", "", backgroundX, 288, function() {
					multiplier += adder;
					document.getElementById("hundredsPlace").textContent = Math.floor(multiplier/100 % 10);
					document.getElementById("tensPlace").textContent = Math.abs(Math.floor(multiplier/10 % 10));
					document.getElementById("onesPlace").textContent = Math.abs(Math.floor(multiplier % 10));
				});
			}



			break;

		case 4:

			background = createImage("res/login.png", backgroundX, backgroundY);
			background_left = createImage("res/login.png", backgroundX, backgroundY);
			background_right = createImage("res/login.png", backgroundX, backgroundY);
			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(2); });

			break;

		case 5:

			background = createImage("res/login.png", backgroundX, backgroundY);
			background_left = createImage("res/login.png", backgroundX, backgroundY);
			background_right = createImage("res/login.png", backgroundX, backgroundY);
			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(2); });

			break;

		case 6:

			background = createImage("res/login.png", backgroundX, backgroundY);
			background_left = createImage("res/login.png", backgroundX, backgroundY);
			background_right = createImage("res/login.png", backgroundX, backgroundY);
			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

	    login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { createjs.Sound.play("menu"); oneWayScene(); });

			break;

		case 7:

			background = createImage("res/login.png", backgroundX, backgroundY);
			background_left = createImage("res/login.png", backgroundX, backgroundY);
			background_right = createImage("res/login.png", backgroundX, backgroundY);
			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(2); });

			break;

		case 8:

			background = createImage("res/login.png", backgroundX, backgroundY);
			background_left = createImage("res/login.png", backgroundX, backgroundY);
			background_right = createImage("res/login.png", backgroundX, backgroundY);
			midground = createImage("res/map.png", backgroundX, backgroundY);
			foreground = createButton("res/map-banner.png", "Select a level", backgroundX, 144, function() {});

			login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(2); });

			level1_indicator = createButton("res/map-indicator.png", "1", indicatorX, indicatorY, function() {
				generated = false;
				createjs.Sound.play("select");
				current_level = 1;
				resetLevel();
				changeScene(3);
			});
			level2_indicator = createButton("res/map-indicator.png", "2", indicatorX, indicatorY, function() {
				generated = false;
				createjs.Sound.play("select");
				current_level = 2;
				resetLevel();
				changeScene(3);
			});
			level3_indicator = createButton("res/map-indicator.png", "3", indicatorX, indicatorY, function() {
				generated = false;
				createjs.Sound.play("select");
				current_level = 3;
				resetLevel();
				changeScene(3);
			});
			level4_indicator = createButton("res/map-indicator.png", "4", indicatorX, indicatorY, function() {
				generated = false;
				createjs.Sound.play("select");
				current_level = 4;
				resetLevel();
				changeScene(3);
			});
			level5_indicator = createButton("res/map-indicator.png", "5", indicatorX, indicatorY, function() {
				generated = false;
				createjs.Sound.play("select");
				current_level = 5;
				resetLevel();
				changeScene(3);
			});
			level6_indicator = createButton("res/map-indicator.png", "6", indicatorX, indicatorY, function() {
				generated = false;
				createjs.Sound.play("select");
				current_level = 6;
				resetLevel();
				changeScene(3);
			});
			level7_indicator = createButton("res/map-indicator.png", "7", indicatorX, indicatorY, function() {
				generated = false;
				createjs.Sound.play("select");
				current_level = 7;
				resetLevel();
				changeScene(3);
			});

			break;
    case 9:

      background = createImage("res/login.png", backgroundX, backgroundY);
			background_left = createImage("res/login.png", backgroundX, backgroundY);
			background_right = createImage("res/login.png", backgroundX, backgroundY);
      foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);
	    login_button = createButton("res/login-button.png", "Back", buttonX, buttonY, function() { createjs.Sound.play("menu"); changeScene(3); pauseAnimation(true); visibleButton(true); visibleForm(false);});

      break;

		default:

	}

	previous_indicator = createImage("res/previous-indicator.png", indicatorX, indicatorY);
    previous_indicator.addEventListener("click", previousSound);
    previous_indicator.visible = false;

	pause_indicator = createImage("res/pause-indicator.png", indicatorX, indicatorY);
    pause_indicator.addEventListener("click", playSound);
    pause_indicator.visible = false;

	next_indicator = createImage("res/next-indicator.png", indicatorX, indicatorY);
    next_indicator.addEventListener("click", nextSound);
    next_indicator.visible = false;

	lute = createImage("res/lute.png", luteX, luteY);
	//antiLute = createImage("res/antiLute.png", luteX, luteY, 2);
    lute.addEventListener("click", muteSound);
    lute.visible = false;
	//antiLute.visible = false;
	//antiLute.hidden = true;

  // lute.regX = 160;
  // lute.regY = 160;
  // createjs.Tween.get(lute, {loop: false})
  //   .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
  //   .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
  //   .to({alpha: 0, y: 125}, 100)
  //   .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
  //   .to({x: 100}, 800, createjs.Ease.getPowInOut(2));

  landscape_warning = new createjs.Shape();

  phone_rotation = createSprite(phone_rotationS, 288, 288);
  stage.removeChild(phone_rotation);

}

function scaleGUI() {

	switch(current_scene) {

		case 0:



			break;

		case 1:

			scale_to_canvas(background, "center", 0, "center", 0, "image");
			scale_to_canvas(background_left, "center", 0 - (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(background_right, "center", 0 + (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(foreground, "center", 0, "center", 0, "image");

      // if (stage.canvas.width < 900) {
  		// 	scale_to_canvas(left_sword_button, "center", 0 - (buttonX/2 + 10) * scene_scale_Y, "center", 0 + (buttonY/2 + 140) * scene_scale_Y, "gui");
  		// 	scale_to_canvas(right_sword_button, "center", 0 + (buttonX/2 + 50) * scene_scale_Y, "center", 0 + (buttonY/2 + 140) * scene_scale_Y, "gui");
      // } else {
  			scale_to_canvas(left_sword_button, "center", 0 - (buttonX/2 + 30) * scene_scale_Y, "center", 0 + (buttonY/2 + 200) * scene_scale_Y, "image");
  			scale_to_canvas(right_sword_button, "center", 0 + (buttonX/2 + 65) * scene_scale_Y, "center", 0 + (buttonY/2 + 200) * scene_scale_Y, "image");
      // }

			break;

		case 2:

			scale_to_canvas(background, "center", 0, "center", 0, "image");
			scale_to_canvas(background_left, "center", 0 - (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(background_right, "center", 0 + (backgroundX) * scene_scale_Y, "center", 0, "image");

      if (stage.canvas.width < 900) {
  			scale_to_canvas(play_button, "center", 0, "center", 0 - 105, "gui");
  			scale_to_canvas(stats_button, "center", 0, "center", 0 - 20, "gui");
  			scale_to_canvas(h2p_button, "center", 0, "center", 0 + 65, "gui");
  			scale_to_canvas(settings_button, "center", 0, "center", 0 + 150, "gui");
  			scale_to_canvas(logout_button, "left", (buttonX/2 + 10), "top", (buttonY/2 + 10), "gui");
  			scale_to_canvas(account_button, "right", 0 - (buttonX/2 + 10), "top", (buttonY/2 + 10), "gui");
      } else {
  			scale_to_canvas(play_button, "center", 0, "center", 0 - 200 * scene_scale_Y, "gui");
  			scale_to_canvas(stats_button, "center", 0, "center", 0 - 100 * scene_scale_Y, "gui");
  			scale_to_canvas(h2p_button, "center", 0, "center", 0 - 0 * scene_scale_Y, "gui");
  			scale_to_canvas(settings_button, "center", 0, "center", 0 + 100 * scene_scale_Y, "gui");
  			scale_to_canvas(logout_button, "left", (buttonX/2 + 10) * scene_scale_Y, "top", (buttonY/2 + 10) * scene_scale_Y, "gui");
  			scale_to_canvas(account_button, "right", 0 - (buttonX/2 + 10) * scene_scale_Y, "top", (buttonY/2 + 10) * scene_scale_Y, "gui");
      }

			break;

		case 3:

	    if (stage.canvas.width < 900) {

				scale_to_canvas(pause_menu, "center", 0, "center", 0, "image");
				scale_to_canvas(close_button, "center", 0 + 445 * scene_scale_Y, "center", 0 - 281 * scene_scale_Y, "gui");
				scale_to_canvas(main_menu_button, "center", 0, "center", 0 - 180 * scene_scale_Y, "gui");
				scale_to_canvas(exit_level_button, "center", 0, "center", 0 - 110 * scene_scale_Y, "gui");
				scale_to_canvas(settings_button, "center", 0, "center", 0 - 40 * scene_scale_Y, "gui");

				scale_to_canvas(end_level_scene, "center", 0, "center", 0, "image");
				scale_to_canvas(end_level_button, "center", 0, "center", 0 + 250 * scene_scale_Y, "gui");
				scale_to_canvas(end_text, "center", 0, "center", 0 - 140 * scene_scale_Y, "image");
				scale_to_canvas(hit_text, "center", 0 - 120 * scene_scale_Y, "center", 0, "image");
				scale_to_canvas(low_text, "center", 0 - 120 * scene_scale_Y, "center", 0 + 40 * scene_scale_Y, "image");
				scale_to_canvas(high_text, "center", 0 - 120 * scene_scale_Y, "center", 0 + 80 * scene_scale_Y, "image");

				scale_to_canvas(hit_text_counter, "left", 30, "center", 0 + 225 * scene_scale_Y, "image");
				scale_to_canvas(low_text_counter, "left", 30, "center", 0 + 280 * scene_scale_Y, "image");
				scale_to_canvas(high_text_counter, "left", 30, "center", 0 + 300 * scene_scale_Y, "image");

				scale_to_canvas(login_button, "right", 0 - (buttonX/2 + 10), "bottom", 0 - (buttonY/2 + 10), "gui");
				scale_to_canvas(hint_button, "center", 0 - 313 * scene_scale_Y, "center", 0 + 194 * scene_scale_Y, "gui");

	    } else {

			scale_to_canvas(pause_menu, "center", 0, "center", 0, "image");
			scale_to_canvas(close_button, "center", 0 + 445 * scene_scale_Y, "center", 0 - 281 * scene_scale_Y, "gui");
			scale_to_canvas(main_menu_button, "center", 0, "center", 0 - 180 * scene_scale_Y, "gui");
			scale_to_canvas(exit_level_button, "center", 0, "center", 0 - 110 * scene_scale_Y, "gui");
			scale_to_canvas(settings_button, "center", 0, "center", 0 - 40 * scene_scale_Y, "gui");

			scale_to_canvas(end_level_scene, "center", 0, "center", 0, "image");
			scale_to_canvas(end_level_button, "center", 0, "center", 0 + 250 * scene_scale_Y, "gui");
			scale_to_canvas(end_text, "center", 0, "center", 0 - 140 * scene_scale_Y, "image");
			scale_to_canvas(hit_text, "center", 0 - 120 * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(low_text, "center", 0 - 120 * scene_scale_Y, "center", 0 + 40 * scene_scale_Y, "image");
			scale_to_canvas(high_text, "center", 0 - 120 * scene_scale_Y, "center", 0 + 80 * scene_scale_Y, "image");

			scale_to_canvas(hit_text_counter, "left", 30, "center", 0 + 225 * scene_scale_Y, "image");
			scale_to_canvas(low_text_counter, "left", 30, "center", 0 + 280 * scene_scale_Y, "image");
			scale_to_canvas(high_text_counter, "left", 30, "center", 0 + 300 * scene_scale_Y, "image");

		// scale_to_canvas(pause_menu, "center", 0, "center", 0, "image");
		// scale_to_canvas(close_button, "center", 0 + 517, "center", 0 -325, "gui");
		// scale_to_canvas(main_menu_button, "center", 0, "center", 0 -180, "gui");
		// scale_to_canvas(exit_level_button, "center", 0, "center", 0 -110, "gui");
		// scale_to_canvas(settings_button, "center", 0, "center", 0 -40, "gui");

		// scale_to_canvas(end_level_button, "center", 0, "center", 0 + 250, "gui");
		// scale_to_canvas(end_text, "center", 0, "center", 0 - 140, "image");
		// scale_to_canvas(hit_text, "center", 0 - 120, "center", 0, "image");
		// scale_to_canvas(low_text, "center", 0 - 120, "center", 0 + 40, "image");
		// scale_to_canvas(high_text, "center", 0 - 120, "center", 0 + 80, "image");

        scale_to_canvas(login_button, "right", 0 - (buttonX/2 + 10) * scene_scale_Y, "bottom", 0 - (buttonY/2 + 10) * scene_scale_Y, "gui");
        scale_to_canvas(hint_button, "center", 0 - 313 * scene_scale_Y, "center", 0 + 194 * scene_scale_Y, "gui");

      }

			if (stage.canvas.width < 900) {
				scale_to_canvas(ll_number_button, "center", 0, "bottom", 0 - (288/2) * scene_scale_Y, "image");
				scale_to_canvas(lr_number_button, "center", 0, "bottom", 0 - (288/2) * scene_scale_Y, "image");
				scale_to_canvas(rl_number_button, "center", 0, "bottom", 0 - (288/2) * scene_scale_Y, "image");
				scale_to_canvas(rr_number_button, "center", 0, "bottom", 0 - (288/2) * scene_scale_Y, "image");
			}

			break;

		case 4:

			scale_to_canvas(background, "center", 0, "center", 0, "image");
			scale_to_canvas(background_left, "center", 0 - (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(background_right, "center", 0 + (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(foreground, "center", 0, "center", 0, "image");

      if (stage.canvas.width < 900) {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10), "bottom", 0 - (buttonY/2 + 10), "gui");
      } else {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10) * scene_scale_Y, "bottom", 0 - (buttonY/2 + 10) * scene_scale_Y, "gui");
      }

			break;

		case 5:

			scale_to_canvas(background, "center", 0, "center", 0, "image");
			scale_to_canvas(background_left, "center", 0 - (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(background_right, "center", 0 + (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(foreground, "center", 0, "center", 0, "image");

      if (stage.canvas.width < 900) {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10), "bottom", 0 - (buttonY/2 + 10), "gui");
      } else {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10) * scene_scale_Y, "bottom", 0 - (buttonY/2 + 10) * scene_scale_Y, "gui");
      }

			break;

		case 6:

			scale_to_canvas(background, "center", 0, "center", 0, "image");
			scale_to_canvas(background_left, "center", 0 - (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(background_right, "center", 0 + (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(foreground, "center", 0, "center", 0, "image");

      if (stage.canvas.width < 900) {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10), "bottom", 0 - (buttonY/2 + 10), "gui");
      } else {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10) * scene_scale_Y, "bottom", 0 - (buttonY/2 + 10) * scene_scale_Y, "gui");
      }

			break;

		case 7:

			scale_to_canvas(background, "center", 0, "center", 0, "image");
			scale_to_canvas(background_left, "center", 0 - (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(background_right, "center", 0 + (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(foreground, "center", 0, "center", 0, "image");

      if (stage.canvas.width < 900) {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10), "bottom", 0 - (buttonY/2 + 10), "gui");
      } else {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10) * scene_scale_Y, "bottom", 0 - (buttonY/2 + 10) * scene_scale_Y, "gui");
      }

			break;

		case 8:

			scale_to_canvas(background, "center", 0, "center", 0, "image");
			scale_to_canvas(background_left, "center", 0 - (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(background_right, "center", 0 + (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(midground, "center", 0, "center", 0, "image");
			scale_to_canvas(foreground, "center", 0, 0, 0 + (144/2) * scene_scale_Y, "image");

			scale_to_canvas(login_button, "left", (buttonX/2 + 10) * scene_scale_Y, "bottom", 0 - (buttonY/2 + 10) * scene_scale_Y, "image");

      if (stage.canvas.width < 900) {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10), "bottom", 0 - (buttonY/2 + 10), "gui");
        scale_to_canvas(level1_indicator, "center", 0 - (indicatorX/2 + 72) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 285) * scene_scale_Y, "gui");
			  scale_to_canvas(level2_indicator, "center", 0 - (indicatorX/2 + 285) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 384) * scene_scale_Y, "gui");
			  scale_to_canvas(level3_indicator, "center", 0 - (indicatorX/2 + 582) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 174) * scene_scale_Y, "gui");
			  scale_to_canvas(level4_indicator, "center", 0 - (indicatorX/2 + 168) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 150) * scene_scale_Y, "gui");
			  scale_to_canvas(level5_indicator, "center", 0 - (indicatorX/2 + 72) * scene_scale_Y, "top", 0 + (indicatorY/2 + 297) * scene_scale_Y, "gui");
			  scale_to_canvas(level6_indicator, "center", 0 + (indicatorX/2 + 522) * scene_scale_Y, "top", 0 + (indicatorY/2 + 150) * scene_scale_Y, "gui");
			  scale_to_canvas(level7_indicator, "center", 0 + (indicatorX/2 + 285) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 384) * scene_scale_Y, "gui");
      } else {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10) * scene_scale_Y, "bottom", 0 - (buttonY/2 + 10) * scene_scale_Y, "gui");
        scale_to_canvas(level1_indicator, "center", 0 - (indicatorX/2 + 72) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 285) * scene_scale_Y, "gui");
			  scale_to_canvas(level2_indicator, "center", 0 - (indicatorX/2 + 285) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 384) * scene_scale_Y, "gui");
			  scale_to_canvas(level3_indicator, "center", 0 - (indicatorX/2 + 582) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 174) * scene_scale_Y, "gui");
			  scale_to_canvas(level4_indicator, "center", 0 - (indicatorX/2 + 168) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 150) * scene_scale_Y, "gui");
			  scale_to_canvas(level5_indicator, "center", 0 - (indicatorX/2 + 72) * scene_scale_Y, "top", 0 + (indicatorY/2 + 297) * scene_scale_Y, "gui");
			  scale_to_canvas(level6_indicator, "center", 0 + (indicatorX/2 + 522) * scene_scale_Y, "top", 0 + (indicatorY/2 + 150) * scene_scale_Y, "gui");
			  scale_to_canvas(level7_indicator, "center", 0 + (indicatorX/2 + 285) * scene_scale_Y, "bottom", 0 - (indicatorY/2 + 384) * scene_scale_Y, "gui");
      }

			break;

    case 9:

    	scale_to_canvas(background, "center", 0, "center", 0, "image");
			scale_to_canvas(background_left, "center", 0 - (backgroundX) * scene_scale_Y, "center", 0, "image");
			scale_to_canvas(background_right, "center", 0 + (backgroundX) * scene_scale_Y, "center", 0, "image");
    	scale_to_canvas(foreground, "center", 0, "center", 0, "image");

      if (stage.canvas.width < 900) {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10), "bottom", 0 - (buttonY/2 + 10), "gui");
      } else {
        scale_to_canvas(login_button, "left", (buttonX/2 + 10) * scene_scale_Y, "bottom", 0 - (buttonY/2 + 10) * scene_scale_Y, "gui");
      }

	    break;

		default:

	}

	// GUI in front of everything
  if (stage.canvas.width < 900) {
		scale_to_canvas(previous_indicator, "center", 0 - 50 * scene_scale_Y, "center", 0 + 194 * scene_scale_Y, "gui");
  	scale_to_canvas(pause_indicator, "center", 0, "center", 0 + 194 * scene_scale_Y, "gui");
  	scale_to_canvas(next_indicator, "center", 0 + 50 * scene_scale_Y, "center", 0 + 194 * scene_scale_Y, "gui");
  	scale_to_canvas(lute, "center", 0 + 313 * scene_scale_Y, "center", 0 + 194 * scene_scale_Y, "gui");
  } else {
  	scale_to_canvas(previous_indicator, "center", 0 - 50, "center", 0 + 194, "gui");
  	scale_to_canvas(pause_indicator, "center", 0, "center", 0 + 194, "gui");
  	scale_to_canvas(next_indicator, "center", 0 + 50, "center", 0 + 194, "gui");
  	scale_to_canvas(lute, "center", 0 + 313, "center", 0 + 194, "gui");
  }

  landscape_warning.graphics.clear()
  landscape_warning.graphics.beginFill("#000000").drawRect(0, 0, stage.canvas.width, stage.canvas.height);

  scale_to_canvas(phone_rotation, "center", 0, "center", 0, "image");

}


function pauseAnimation(paused) {
    if(paused){
	henchman_left.paused = true;
	henchman_left_center.paused = true;
	boss.paused = true;
	henchman_right.paused = true;
	henchman_right_center.paused = true;
	projectile.paused = true;
/*
	if(structure_center.currentAnimationFrame != 0 && structure_center.currentAnimationFrame != 11)
	    structure_center.paused = true;

	if(structure_left_center.currentAnimationFrame != 0 && structure_left_center.currentAnimationFrame != 11)
	    structure_left_center.paused = true;

	if(structure_right_center.currentAnimationFrame != 0 && structure_right_center.currentAnimationFrame != 11)
	    structure_right_center.paused = true;

	if(structure_left.currentAnimationFrame != 0 && structure_left.currentAnimationFrame != 11)
	    structure_left.paused = true;

	if(structure_right.currentAnimationFrame != 0 && structure_right.currentAnimationFrame != 11)
	    structure_right.paused = true;

	if(catapult.currentAnimationFrame != 0 && catapult.currentAnimationFrame != 11)
	    catapult.paused = true;

*/
	/*structure_center.paused = true;
	structure_left_center.paused = true;
	structure_right_center.paused = true;
	structure_left.paused = true;
	structure_right.paused = true;
	catapult.paused = true;*/
    }
    else {
	henchman_left.paused = false;
	henchman_left_center.paused = false;
	boss.paused = false;
	henchman_right.paused = false;
	henchman_right_center.paused = false;
	projectile.paused = false;
/*
	if(structure_center.currentAnimationFrame != 0 && structure_center.currentAnimationFrame != 11)
	    structure_center.paused = false;

	if(structure_left_center.currentAnimationFrame != 0 && structure_left_center.currentAnimationFrame != 11)
	    structure_left_center.paused = false;

	if(structure_right_center.currentAnimationFrame != 0 && structure_right_center.currentAnimationFrame != 11)
	    structure_right_center.paused = false;

	if(structure_left.currentAnimationFrame != 0 && structure_left.currentAnimationFrame != 11)
	    structure_left.paused = false;

	if(structure_right.currentAnimationFrame != 0 && structure_right.currentAnimationFrame != 11)
	    structure_right.paused = false;

	if(catapult.currentAnimationFrame != 0 && catapult.currentAnimationFrame != 11)
	    catapult.paused = false;
*/
	/*structure_center.paused = false;
	structure_left_center.paused = false;
	structure_right_center.paused = false;
	structure_left.paused = false;
	structure_right.paused = false;
	catapult.paused = false;*/
    }
}

function visibleButton(visible) {

    if(visible) {

			login_button.visible = false;
			pause_menu.visible = true;
			close_button.visible = true;
			main_menu_button.visible = true;
			exit_level_button.visible = true;
			settings_button.visible = true;
			previous_indicator.visible = true;
			pause_indicator.visible = true;
			next_indicator.visible = true;
			lute.visible = true;
			//antiLute.visible = true;
			hint_button.visible = true;

    } else {

			login_button.visible = true;
			pause_menu.visible = false;
			close_button.visible = false;
			main_menu_button.visible = false;
			exit_level_button.visible = false;
			settings_button.visible = false;
			previous_indicator.visible = false;
			pause_indicator.visible = false;
			next_indicator.visible = false;
			lute.visible = false;
			//antiLute.visible = false;
			hint_button.visible = false;

    }

}

function resetLevel() {

	history_list = [];
	hide_knight = false;
	hide_archer1 = false;
	hide_archer2 = false;
	hide_archer3 = false;
	hide_archer4 = false;
	hit_counter = 0;
	miss_upper_counter = 0;
	miss_lower_counter = 0;
	history_list = [];

}
