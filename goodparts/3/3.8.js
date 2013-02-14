another_stooge.nickname	//'Moe'

//another_stoogeからnicknameプロパティが削除され
//プロトタイプ上のnicknameプロパティが見えるようになる

delete another_stooge.nickname;
another_stooge.nickname	// 'Curly'