let intervalId = undefined;
function set_ptc_client() {
	const remote_sync = () => {
		// 送信時点でのUNIX秒
		const sendTD = Date.now() / 1000;
		$.ajax({
			url: path,
			type: 'POST',
			data: {
				type: 'check_ope_state',
			},
			dataType: 'text',
			success: function (data) {
				if (data == 'started') {
					// 受信時間のUNIX秒
					// 送信時間と開始時間は誤差とみなす
					clearInterval(intervalId);
					const getTD = Date.now() / 1000;
					aoc_core(getTD - sendTD, 'start');
					if (aoc_rs_active) {
						aoc_rs_recieve();
					}
				} else {
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				// エラーハンドリング
				window.alert('システムとのリンクを確立できません、スタンドアロンモードに移行します');
				clearInterval(intervalId);
				link_statechange('alone');
				clock_state('manual');
			},
		});
	};
	intervalId = setInterval(remote_sync, 500);
}
