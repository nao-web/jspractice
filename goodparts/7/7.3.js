// 7.3.1

"info".match(/in|int/)

// 7.3.3
// 表現因子
\ / [ ] ( ) { } ? + * | . ^ $

// 7.3.4
var doubled_words =
	/([A-Za-z\u00C0-\ulFFF\u2800-\uFFFD]+)\s+\1/gi;

// 7.3.6
//正規表現
! " # $ % & ' ( ) * + , - . / :
; < = > ? @ [ \ ] ^ _ ` { | } ~

(?:!|"|#|\$|%|'|\(|\)|\*|\+|,|-|\.|\/|:|;|<|=|>|@|\[|\\|]|\^|_|` |\{|\||\}|~)

[!-\/:-@\[-`{-~]
