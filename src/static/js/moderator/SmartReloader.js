function loadinfo() {
	$.ajax({
		type: 'POST',
		url: '/moderator/',
		data: {
			type: 'load_info',
		},
		dataType: 'html',
	})
		.done(function (data) {
			document.getElementById('info').innerHTML = JSON.parse(data)[0];
			document.getElementById('next_number').textContent = JSON.parse(data)[1] != null ? 'No.' + JSON.parse(data)[1] : '';
			document.getElementById('next_title').textContent = JSON.parse(data)[2];
			try {
				document.getElementById('last_number').textContent = JSON.parse(data)[3] != null ? 'No.' + JSON.parse(data)[3] : '';
				document.getElementById('last_title').textContent = JSON.parse(data)[4];
			} catch {}
			if (document.getElementById('move_next_button') != undefined) {
				if (JSON.parse(data)[3] == null) {
					document.getElementById('move_back_button').disabled = true;
				} else {
					document.getElementById('move_back_button').disabled = false;
				}
				if (JSON.parse(data)[1] == null) {
					document.getElementById('move_next_button').disabled = true;
				} else {
					document.getElementById('move_next_button').disabled = false;
				}
			}
		})
		.fail(function (data) {
			// error
			window.alert('プログラム情報が読み込めません');
		});
}
function loadcontent(node_type) {
	$.ajax({
		type: 'POST',
		url: '/moderator/',
		data: {
			type: 'load_card',
			node_type: node_type,
			node_request: document.getElementById('node_request').textContent,
		},
		dataType: 'html',
	})
		.done(function (data) {
			document.getElementById('content').innerHTML = data;
		})
		.fail(function (data) {
			// error
			window.alert('指示情報が読み込めません');
		});
}
function loaddevice() {
	$.ajax({
		type: 'POST',
		url: '/moderator/admin/',
		data: {
			type: 'load_device',
		},
		dataType: 'html',
	})
		.done(function (data) {
			document.getElementById('device').innerHTML = data;
			devicesjudge();
		})
		.fail(function (data) {
			// error
			window.alert('端末情報が読み込めません');
			clearInterval(loaddeviceId);
		});
}
function loadtimeline() {
	$.ajax({
		type: 'POST',
		url: '/moderator/admin/',
		data: {
			type: 'load_timeline',
		},
		dataType: 'html',
	})
		.done(function (data) {
			document.getElementById('timeline').innerHTML = data;
		})
		.fail(function (data) {
			// error
			window.alert('タイムライン情報が読み込めません');
		});
}
