String.method('deentityify', function(){
	// 実態参照のテーブル。これは実態参照の名前を
	// 文字にマップする

		var entity = {
			quit: '"',
			lt: '<',
			gt: '>'
		};
	// deentityifyメソッドを返す
	
		return function () {

	// これはdeentityifyメソッド本体である。これは文字列の
	// replaceメソッドを使って、&で始まり;で終わる文字列を
	// 探す。そしてその間の文字列が実体参照のテーブルに存在
	// した場合は、それをテーブルから取得した文字で置き換える
	// その場合には、正規表現（第7章）を利用している

		return this.replace(/&([^&;]+);/g,
			function (a, b) {
				var r = entity[b];
				return typeof r === 'string' ? r : a;
				}
			);
		};
}));

document.writeln(
	'&lt;&quot;&gt;'.deentityify()); //<">

var serial_maker = function () {

	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function (p) {
			prefix = String(p);
		},
		set_seq: function(s) {
			seq = s;
		},
		gensym: function () {
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym(); // unigueは"Q1000"