function Article () {
	this.tags = ['js', 'css'];
}
var article = new Article();

function BlogPost() {}
BlogPost.prototype = article;

var blog = new BlogPost();

function StaticPage() {
	Article.call(this);
}
var page = new StaticPage();

alert(article.hasOwnProperty('tags'));
alert(blog.hasOwnProperty('tags'));
alert(page.hasOwnProperty('tags'));

blog.tags.push('html');
page.tags.push('php');
alert(article.tags.join(', '));

// 6.4.1

function Parent(name) {
	this.name = name || 'Adam';
}

Parent.prototype.say = function () {
	return this.name;
};

function Child(name) {
	Parent.apply(this, arguments);
}

var kid = new Child("Patrick");
kid.name;
typeof kid.say;

// 6.4.2

function Cat() {
	this.legs = 4;
	this.say = function () {
		return "meaowww";
	}
}
function Bird() {
	this.wings = 2;
	this.fly = true;
}

function CatWings() {
	Cat.apply(this);
	Bird.apply(this);
}

var jane = new CatWings();
console.dir(jane);