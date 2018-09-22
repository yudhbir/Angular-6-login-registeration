function notyalert(type,text){
	noty({layout: 'top',type: type,text: text,timeout: 2e3,
		animation: {
			open: {height: 'toggle'},
			close: {height: 'toggle'},
			easing: 'swing',
			speed: 500 // opening & closing animation speed
		}
	});
}