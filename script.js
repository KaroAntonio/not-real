
var index = 0;
var words = $('<div>');

$(document).ready(function() {
	gen_words();
	$('#loading').hide();
	$(window).scroll(function() {
		for (var i = 0; i < 10; i++) {
			index++;
			add_content(words, index);
		}
	})
})

function gen_words() {
	words.css({
		fontSize:'30px'
	});

	var str = "lamp";
	str = replace_at(str, 1, 'u');
	console.log(str);

	$('body').append(words);
	for (index = 0; index < 1000; index++) {
		add_content(words, index);
	}
}

function add_content(words, i) {
	content = words.html();
	if (i > 20 && i % 3 == 0){ content += " not not";  }
	if (i > 40 && i % 4 == 0){ content += " could maybe be "; }
	if (i > 40 && i % 5 == 0){ content += " i wish i could "; }
	if (i > 40 && i % 6 == 0){ content += " hold me closer "; }
	if (i > 40 && i % 7 == 0){ content += " across your lips "; }
	if (i > 100 && i % 500 == 0|Math.random()*7){ content += " the calm between your thighs "; }
	if (i > 40 ){ content += swap_n_letters( 0|i/20, " the internet is not real"); }
	if (i > 200 ){ content += rand_string( 0|i/30 ); }
	else {  content += " the internet is not real"; }
	words.html(content);
}

function rand_string(n) {
	var str = '';
	for (var i=0;i<n;i++) {
		str += String.fromCharCode(0|Math.random()*200 + 50);
	}
	return str;
}

function swap_n_letters( n, str ) {
	for (var i= 0; i < n; i++ ) {
		var i1 = i,
			i2 = Math.floor( Math.random() * str.length );
		var l = str.substr(i1, i1+1);
		str = replace_at(str, i2, l)
	}
	return str
}

function replace_at( s1, i, s2 ) {
	// replace s2 into s1 at index i
	return s1.substr(0, i) + s2 + s1.substr(i+s2.length);
}
