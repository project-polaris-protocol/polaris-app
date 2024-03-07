let main_interval = undefined;
function aoc_core(duringTime, command) {
	if (command == 'start') {
		main_interval = stopwatch_main(duringTime);
	} else if (command == 'end') {
		if (main_interval == undefined) {
		} else {
			clearInterval(main_interval);
			aoc_client_reset();
			document.getElementById('clock-content').textContent = '';
			document.getElementById('timer-content').textContent = '';
		}
	}
}

const stopwatch_main = (duringTime) => {
	// 時刻同期-相対参照
	let startTime = Date.now();

	function updatetime() {
		const display = document.getElementById('clock-content');
		const currentTime = Math.floor(Number(Date.now() - startTime) / 1000 + duringTime);
		display.textContent = `${String(currentTime)}`;
		aoc_auto(currentTime);
	}
	return setInterval(updatetime, 250);
};

function aoc_auto(time) {
	let card_obejct = document.getElementsByClassName('is-object-state');
	let timeset = document.getElementsByClassName('is-time-active');
	if (timeset[0] == undefined) {
		aoc_core(0, 'end');
		return;
	}
	if (card_obejct[0].textContent == 'ACTION') {
		try {
			document.getElementById('skip_button').disabled = false;
		} catch {}
		return;
	} else if (card_obejct[0].textContent == 'ABSOLUTE') {
		try {
			document.getElementById('skip_button').disabled = true;
		} catch {}
		if (Number(timeset[0].textContent) <= Number(time)) {
			aoc_change();
		}
	} else if (card_obejct[0].textContent == 'RELTIVE') {
	}
	if (card_obejct.length == 0) {
		aoc_core(0, 'end');
	}
}

function aoc_change() {
	let cardset = document.getElementsByClassName('is-card-active');
	let timeset = document.getElementsByClassName('is-time-active');
	let cardar = document.getElementsByClassName('is-object-state');
	try {
		cardset[0].classList.add('is-hidden');
		cardset[0].classList.remove('is-card-active');
		timeset[0].classList.remove('is-time-active');
		cardar[0].classList.remove('is-object-state');
		next_time = Number(timeset[0].textContent);
	} catch {
		document.getElementById('clock-content').textContent = 0;
		aoc_core(0, 'end');
		return;
	}
	if (cardar[0].textContent == 'RELATIVE') {
		setTimer(timeset[0].textContent);
	}
}

function setTimer(time) {
	const relative_timer_id = setInterval(() => {
		console.log(time);
		time -= 1;
		document.getElementById('timer-content').textContent = time;
		if (time <= 0) {
			document.getElementById('timer-content').textContent = '-';
			aoc_change();
			clearInterval(relative_timer_id);
		}
	}, 1000);
}

function aoc_client_reset() {
	if (typeof aoc_rs_recieve_id != 'undefined') {
		clearInterval(aoc_rs_recieve_id);
	} else if (typeof aoc_rs_send_id != 'undefined') {
		clearInterval(aoc_rs_send_id);
	}
	if (document.getElementById('standby_area') != undefined) {
		// 進行管理ボタン系のリセット
		document.getElementById('standby_area').classList.remove('is-hidden');
		document.getElementById('skip_area').classList.add('is-hidden');
		// スタンバイOKのボタンを表示
		document.getElementById('standby_button').disabled = false;
	}
}
