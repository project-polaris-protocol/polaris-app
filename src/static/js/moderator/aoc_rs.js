// コンソール側
const aoc_rs_send = () => {
	const aoc_rs_send_id = setInterval(() => {
		let cardset = document.getElementsByClassName('is-card-active');
		if (cardset[0] == undefined) {
			clearInterval(aoc_rs_send_id);
			return;
		}
		number = cardset[0].id;
		$.ajax({
			url: '/moderator/admin/',
			type: 'POST',
			data: {
				type: 'remote_sync',
				number: number,
			},
			dataType: 'text',
			success: function (data) {},
			error: function (jqXHR, textStatus, errorThrown) {
				// エラーハンドリング
				window.alert('システムとのリンクを確立できません');
			},
		});
	}, 500);
};

// クライアント側
const aoc_rs_recieve = () => {
	const aoc_rs_recieve_id = setInterval(() => {
		$.ajax({
			url: '/moderator/',
			type: 'POST',
			data: {
				type: 'remote_sync_client',
			},
			dataType: 'text',
			success: function (data) {
				aoc_rs_exec(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				// エラーハンドリング
				window.alert('システムとのリンクを確立できません');
				clearInterval(aoc_rs_recieve_id);
			},
		});
	}, 500);
	return aoc_rs_recieve_id;
};

function aoc_rs_exec(number) {
	let cardset = document.getElementsByClassName('is-card-active');
	for (let i = 0; cardset.length > 0; i++) {
		if (Number(cardset[i].id) < number) {
			aoc_change();
		} else {
			return;
		}
	}
}
