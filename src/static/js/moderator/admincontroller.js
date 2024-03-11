loadcontent('controller');
loadinfo();
//const loaddeviceId = setInterval(loaddevice, 1000);

let Standalone = false;
// 参照エラーを防ぐための関数
function clock_state(s = undefined) {}
function changestate(s = undefined) {}

const path = '/moderator/admin/';
function move_program(type) {
	// next or back
	if (type == 'next') {
		$.ajax({
			url: path,
			type: 'POST',
			data: {
				type: 'move_next_program',
			},
			dataType: 'text',
			success: function (data) {},
			error: function (jqXHR, textStatus, errorThrown) {
				// エラーハンドリング
				window.alert('システムとのリンクを確立できません、通信状況を確認してください');
			},
		});
	} else if (type == 'back') {
		$.ajax({
			url: path,
			type: 'POST',
			data: {
				type: 'move_last_program',
			},
			dataType: 'text',
			success: function (data) {},
			error: function (jqXHR, textStatus, errorThrown) {
				// エラーハンドリング
				window.alert('システムとのリンクを確立できません、通信状況を確認してください');
			},
		});
	}
	return;
}
function start() {
	// Relative時の処理ボタンの表示
	document.getElementById('standby_area').classList.add('is-hidden');
	document.getElementById('skip_area').classList.remove('is-hidden');
	// 開始
	$.ajax({
		url: path,
		type: 'POST',
		data: {
			type: 'start',
		},
		dataType: 'text',
		success: function (data) {
			aoc_core(0, 'start');
			aoc_rs_send();
		},
		error: function (jqXHR, textStatus, errorThrown) {},
	});
	return;
}
function end() {
	// 進行管理ボタン系のリセット
	document.getElementById('standby_area').classList.remove('is-hidden');
	document.getElementById('skip_area').classList.add('is-hidden');
	// 開始
	aoc_core(0, 'end');

	$.ajax({
		url: path,
		type: 'POST',
		data: {
			type: 'end',
		},
		dataType: 'text',
		success: function (data) {},
		error: function (jqXHR, textStatus, errorThrown) {},
	});
	return;
}

// プログラム変更検知
const program_detection = setInterval(() => {
	$.ajax({
		url: '/moderator/',
		type: 'POST',
		data: {
			type: 'check_program',
		},
		dataType: 'text',
		success: function (data) {
			const programID = document.getElementById('programID').textContent;
			if (JSON.parse(data)[0] == programID && JSON.parse(data)[1] == true) {
			} else if (JSON.parse(data)[0] != programID || JSON.parse(data)[1] == false) {
				aoc_core(0, 'end');
				loadcontent('controller');
				loadinfo();
				end();
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			// エラーハンドリング
			if (Standalone) {
			} else {
				window.alert('システムとのリンクを確立できません、再読み込みしてください');
			}
		},
	});
}, 1000);
