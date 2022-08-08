(function () {
	'use strict';

	console.log('main js');

	let html = ```
<div>Hello World</div>
```;

	let body = document.querySelector('body');
	body.prepend(html);

	console.log('done');

})();
//# sourceMappingURL=content.js.map
