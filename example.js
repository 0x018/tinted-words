import { filter } from "./filter.js";
var text = [
	`曹操的24口交换机被刘备砸了,急得曹操破口大骂:"操,这他妈的刘备啊".`,
	`伤心欲绝之下他想起了他妈的嘱咐:碰到问题就找你大爷,他牛逼着呢!`,
	`大爷,牛逼啊`,
	`你大爷,牛逼啊`,
	`草,你大爷,这有一颗草`,
	`卧槽!滚开,你怎么能这样`,
	`生儿子煤屁眼`,
	`坑爹啊坑爹啊小瘪三啊小瘪三啊小赤佬小赤佬哎哟妈呀小瘪三小瘪三`,
	`function (name){ console.log(name+" is nc !,difference importance fence sence performance ")}`,
	`async function (a){ console.log(a)}`,
	`#include <stdio.h>`,
];
text.forEach((t, i) => {
	console.log("输入:" + t);
	console.log("结果:" + filter(t));
	console.log("");
});
// text = filter(text);

