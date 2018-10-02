$.fruit.set($.args.model.toJSON());
var updateTimeout;

// when internal model changes, change the global one too
$.fruit.on('change', handleFruitChange);
function handleFruitChange() {
	clearTimeout(updateTimeout);

	function update() {
		$.args.model.set($.fruit.toJSON());

		// Sort collection after changing a property
		Alloy.Collections.Fruit.sort();
	}

	// prevent a lot of changes from re-sorting/re-rendering in a short time
	updateTimeout = setTimeout(update, 750);

}

function handleClose() {
	$.off();
	$.destroy();
	$.fruit = null;
}

function handleNameChange(e) {
	// no updating if value is the same
	if (e.value === $.fruit.attributes.name) {
	  return false;
	}
	$.fruit.set({ name: e.value });
}

function alterAmount(e) {
	// alter the amount by the manipulator set in detail.xml. In this case we just have a + & - button, so +1 or -1
	$.fruit.set({ amount: $.fruit.attributes.amount + e.source.manipulator });
}
