ymaps.ready(init);
	var myMap;

function init(){ 
myMap = new ymaps.Map("js_map", {
center: [59.92526212, 30.37458831],
zoom: 11
}); 

myPlacemark1 = new ymaps.Placemark([59.97789581, 30.30915326], null, {
	iconLayout: "default#image",
	iconImageHref: "img/icons/map-marker.png",
	iconImageSize: [50, 50],
	iconImageOffset: [-20, -20],
});

myPlacemark2 = new ymaps.Placemark([59.86862558, 30.33181256], null, {
	iconLayout: "default#image",
	iconImageHref: "img/icons/map-marker.png",
	iconImageSize: [50, 50],
	iconImageOffset: [-20, -20],
});

myPlacemark3 = new ymaps.Placemark([59.92729397, 30.49105452], null, {
	iconLayout: 'default#image',
	iconImageHref: "img/icons/map-marker.png",
	iconImageSize: [50, 50],
	iconImageOffset: [-20, -20],
});

myPlacemark4 = new ymaps.Placemark([59.94788638, 30.38836452], null, {
	iconLayout: "default#image",
	iconImageHref: "img/icons/map-marker.png",
	iconImageSize: [50, 50],
	iconImageOffset: [-20, -20],
});
myMap.geoObjects.add(myPlacemark1);
myMap.geoObjects.add(myPlacemark2)
myMap.geoObjects.add(myPlacemark3)
myMap.geoObjects.add(myPlacemark4)

myMap.controls.remove('fullscreenControl');
myMap.behaviors.disable('scrollZoom');

}