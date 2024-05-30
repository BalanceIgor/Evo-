document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.dashboard-stations-left__radio').forEach(radio => {
        radio.addEventListener('change', () => {
            document.querySelectorAll('.dashboard-stations-left__radio').forEach(r => {
                r.checked = false;
                r.closest('.dashboard-stations-left__label').classList.remove('active');
            });
            radio.checked = true;
            radio.closest('.dashboard-stations-left__label').classList.add('active');
        });
    });


    document.querySelectorAll('.item-ev__btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.item-ev__btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const carData = {
                nissan: {
                    time: '5:21 <span>h</span>',
                    battery: '18 <span>%</span>',
                    powerReserve: '428 <span>km</span>',
                    remainingTime: '3:31 <span>h</span> <p class="item-ev-charging__sub">Remaining</p>',
                    batteryColor: 'red',
                    chargingWidth: '100px'
                },
                tesla: {
                    time: '4:10 <span>h</span>',
                    battery: '80 <span>%</span>',
                    powerReserve: '500 <span>km</span>',
                    remainingTime: '6:45 <span>h</span> <p class="item-ev-charging__sub">Remaining</p>',
                    batteryColor: 'green',
                    chargingWidth: '200px'
                }
            };

            const selectedCar = button.getAttribute('data-car');
            const carInfo = carData[selectedCar];

            document.getElementById('car-time').innerHTML = carInfo.time;
            document.getElementById('car-battery').innerHTML = carInfo.battery;
            document.getElementById('car-power-reserve').innerHTML = carInfo.powerReserve;
            document.getElementById('car-remaining-time').innerHTML = carInfo.remainingTime;
            const batteryElement = document.getElementById('car-battery');
            const nissanCar = document.getElementById('nissan-car');
            const unionGreen = document.getElementById('union-green');
            const unionRed = document.getElementById('union-red');
            const chargingLoad = document.getElementById('charging-load');
            chargingLoad.classList.remove('green', 'red');
            batteryElement.classList.remove('green', 'red');
            batteryElement.classList.add(carInfo.batteryColor);
            nissanCar.classList.add(carInfo.batteryColor);
            chargingLoad.classList.add(carInfo.batteryColor);
            
            if(carInfo.batteryColor === 'green') {
                unionGreen.style.display = 'block';
                unionRed.style.display = 'none';
            } else {
                unionGreen.style.display = 'none';
                unionRed.style.display = 'block';
            }
            
        });
    });


    const stationsItems = document.querySelectorAll('.stations-item');
    const point1 = document.querySelector('.point-1');
    const point2 = document.querySelector('.point-2');
    const point3 = document.querySelector('.point-3');
    const point4 = document.querySelector('.point-4');
    const pointLine = document.querySelector('.point-line');
    const pointLine2 = document.querySelector('.point-line-2');
    const pointLine3 = document.querySelector('.point-line-3');
    let activeIndex = -1;

    function setActiveStation(index) {
        // Проверяем, что клик был по другому элементу
        if (activeIndex !== index) {
            // Удаляем класс 'active' у предыдущего активного элемента, если он существует

            // Устанавливаем новый активный элемент
            activeIndex = index;
            stationsItems[activeIndex].classList.add('active');

            // Делаем что-то с активным элементом, например, выводим его индекс в консоль
            console.log('Активный элемент:', activeIndex);

            // Пример изменения позиции элементов point в зависимости от активного индекса
            point1.style.left = `47px`;
            point1.style.top = `27px`;
            if (activeIndex === 0) {
                pointLine.style.display = 'block';
                pointLine2.style.display = 'none';
                pointLine3.style.display = 'none';
                point2.style.left = '138px';
                point2.style.top = '256px';
                point3.style.left = '789px';
                point3.style.top = '311px';
                point4.style.left = '359px';
                point4.style.top = '85px';
            } else if (activeIndex === 1) {
                pointLine.style.display = 'none';
                pointLine2.style.display = 'block';
                pointLine3.style.display = 'none';
                point2.style.left = `364px`;
                point2.style.top = `85px`;
                point3.style.left = '';
                point3.style.top = '';
                point4.style.left = '144px';
                point4.style.top = '227px';
            } else if (activeIndex === 2) {
                pointLine.style.display = 'none';
                pointLine2.style.display = 'none';
                pointLine3.style.display = 'block';
                point2.style.left = `364px`;
                point2.style.top = `85px`;
                point3.style.left = `138px`;
                point3.style.top = `256px`;
                point4.style.left = '783px';
                point4.style.top = '315px';
            }
        }
    }

    // Добавляем обработчики событий для всех элементов
    stationsItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            stationsItems.forEach(station => station.classList.remove('active'));
            setActiveStation(index);
        });
    });



});