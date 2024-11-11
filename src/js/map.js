ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [48.708048, 44.513303],
        zoom: 5, // Масштаб карты
    });

    // Список городов с координатами
    const cities = [
        { name: "Волгоград", coords: [48.708048, 44.513303] },
        { name: "Ростов-на-Дону", coords: [47.235714, 39.701505] },
    ];

    // Добавление маркеров для каждого города
    cities.forEach((city) => {
        const placemark = new ymaps.Placemark(
            city.coords,
            {
                balloonContent: `<strong>${city.name}</strong>`, // Текст внутри всплывающего окна
            },
            {
                preset: "islands#icon",
                iconColor: "#0095b6",
            }
        );

        map.geoObjects.add(placemark); // Добавляем маркер на карту
    });
}
