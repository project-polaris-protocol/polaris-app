const path = '/moderator/';
let Standalone = true;
let globalstate = 'prepare';
let remote_sync = false;
let pal = false;
let aoc_rs_active = true;

loadinfo();
loadcontent('worker');
loadtimeline();
set_ptc_client();

function clock_state(state) {
	if (state == 'auto') {
		document.getElementById('vtime_state_auto').classList.remove('is-hidden');
		document.getElementById('vtime_state_manual').classList.add('is-hidden');
	} else {
		document.getElementById('vtime_state_auto').classList.add('is-hidden');
		document.getElementById('vtime_state_manual').classList.remove('is-hidden');
		// マニュアル操作用のボタンを表示
		document.getElementById('standby_area').classList.add('is-hidden');
		document.getElementById('skip_area').classList.add('is-hidden');
		document.getElementById('manualstart_area').classList.remove('is-hidden');
	}
}

// 定期実行処理

// プログラム変更検知
const program_detection = setInterval(() => {
	$.ajax({
		url: path,
		type: 'POST',
		data: {
			type: 'check_program',
		},
		dataType: 'text',
		success: function (data) {
			const programID = document.getElementById('programID').textContent;
			if (data == programID) {
			} else if (data != programID) {
				document.getElementById('programID').textContent = programID;
				aoc_core(0, 'end');
				loadcontent('worker');
				loadinfo();
				clearInterval(intervalId);
				set_ptc_client();
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			window.alert('システムとのリンクを確立できません');
		},
	});
}, 1000);

function reset() {
	document.getElementById('standby_area').classList.remove('is-hidden');
	document.getElementById('manualstart_area').classList.add('is-hidden');
	document.getElementById('skip_area').classList.add('is-hidden');
	aoc_core('end');
}
