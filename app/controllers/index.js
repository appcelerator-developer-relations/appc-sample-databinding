var TYPES = require('data').TYPES;
var sort = 'name';
var filter = 'all';

Alloy.Collections.Fruit.comparator = function(a, b) {
  if (sort === 'name')
    return a.attributes.name > b.attributes.name;
  if (sort === 'amount')
    return a.attributes.amount < b.attributes.amount;
};

function transformFruit(model) {
  return {
    name: model.attributes.name,
    amount: 'Amount: ' + model.attributes.amount,
    color: model.attributes.color,
    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
    itemId: model.attributes.id
  };
}
$.getView().open();

require('data').load();

function handleClickItem(e) {
  var item = e.section.items[e.itemIndex];
  var model = Alloy.Collections.Fruit.get(item.properties.itemId);
  $.navWin.openWindow(Alloy.createController('detail', {model: model}).getView());
}

function filterFruit(collection) {
  if (filter === 'all') {
    return collection.models;
  } else {
    return _.filter(collection.models, function(m) {
      return m.attributes.type === filter;
    });
  }
  
}

function handleSortDialog(e) {
  if (e.index === 0) {
    sort = 'name';
  }
  else if (e.index === 1){
    sort = 'amount';
  }
  $.sortButton.title = "Sort: " + sort;
  
  // after changing sort rules, re-sort the list. 
  Alloy.Collections.Fruit.sort();
}

function filterSortDialog(e) {
  if (e.index === 0){
    filter = 'all';
    $.filterButton.title = "Filter: all";
  } else if (e.index === 1) {
    filter = TYPES.FRUIT;
    $.filterButton.title = "Filter: fruit";
  } else if (e.index === 2) {
    filter = TYPES.VEGETABLE;
    $.filterButton.title = "Filter: vegetables";
  }
  
  // trigger the data function to re-render. This will trigger the dataFilter function as well
  rerenderList();
}

function showFilterDialog() {
  $.filterDialog.show();
}

function showSortDialog() {
  $.sortDialog.show();
}
