function slider(name) {
    let sliderPosition = 0;
    const sliderContainer = document.getElementById('slider-container' + name);
    const sliderTrack = document.getElementById('slider-track' + name);
    const sliderItems = document.getElementsByClassName('slider-item' + name);
    const sliderContainerWidth = sliderContainer.clientWidth;
    // ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
    // разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
    const sliderTrackWidth = sliderItems.length * sliderContainerWidth - sliderContainerWidth;
    const sliderButtonPrev = document.getElementById('arrow-left' + name);
    const sliderButtonNext = document.getElementById('arrow-right' + name);
    sliderTrack.style.transform = 'translateX(0px)';
    // при клике на кнопку "влево" вызываем функцию
    sliderButtonPrev.addEventListener('click', function () {
        sliderPosition += sliderContainerWidth // увеличиваем отступ при нажатии назад
        // поскольку отступ будет всегда отрицательный, нужно сравнивать с нулем,
        // чтобы исключить пустые прокрутки
        if (sliderPosition > 0) {
            sliderPosition = 0;
        }
        sliderTrack.style.transform = `translateX(${sliderPosition}px)`;
        sliderButtons();
    });

    sliderButtonNext.addEventListener('click', function () {
        sliderPosition -= sliderContainerWidth;

        // так как отступы отрицательные, нужно сравнить с отрицательной длинной дорожки,
        // чтобы исключить пустые прокрутки
        if (sliderPosition < -sliderTrackWidth) {
            sliderPosition = -sliderTrackWidth;
        }
        sliderTrack.style.transform = `translateX(${sliderPosition}px)`;
        sliderButtons();
    });


    // скрываем кнопки prev/next, когда нельзя больше крутить
    const sliderButtons = () => {
        if (sliderPosition == 0) {
            sliderButtonPrev.style.display = 'none';
        } else {
            sliderButtonPrev.style.display = 'block';
        }
        if (sliderPosition == -sliderTrackWidth) {
            sliderButtonNext.style.display = 'none';
        } else {
            sliderButtonNext.style.display = 'block';
        }
    };
    sliderButtons();

}
// making a function for changing main-content
function changeMainContent() {
    // getting main-content objects
    let yungblud = document.getElementById('yungblud');
    let palewaves = document.getElementById('palewaves');
    let conan = document.getElementById('conan');
    let girlinred = document.getElementById('girlinred');
    let placebo = document.getElementById('placebo');
    let samsmith = document.getElementById('samsmith');
    let mrkitty = document.getElementById('mrkitty');
    let heather = document.getElementsByClassName("heather");
    let yb = document.getElementsByClassName("yb");
    let con = document.getElementsByClassName("conan");
    let gir = document.getElementsByClassName("gir");
    let plac = document.getElementsByClassName("bowie");
    let ss = document.getElementsByClassName("lp");
    let kit = document.getElementsByClassName("halsey");
    // getting radio buttons
    let radio = document.getElementsByName('gallery');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (radio[i].value) {
                case 'yungbludRadio':
                    yungblud.style.display = 'block';
                    palewaves.style.display = 'none';
                    conan.style.display = 'none';
                    girlinred.style.display = 'none';
                    placebo.style.display = 'none';
                    samsmith.style.display = 'none';
                    mrkitty.style.display = 'none';
                    slider('__yungblud');
                    var top = document.getElementById('gallery').clientHeight;
                    $('body,html').animate({scrollTop: top}, 300);
                    break;
                case 'palewavesRadio':
                    yungblud.style.display = 'none';
                    palewaves.style.display = 'block';
                    conan.style.display = 'none';
                    girlinred.style.display = 'none';
                    placebo.style.display = 'none';
                    samsmith.style.display = 'none';
                    mrkitty.style.display = 'none';
                    slider('__palewaves');
                    var top = document.getElementById('gallery').clientHeight;
                    $('body,html').animate({scrollTop: top}, 300);
                    break;
                case 'conanRadio':
                    yungblud.style.display = 'none';
                    palewaves.style.display = 'none';
                    conan.style.display = 'block';
                    girlinred.style.display = 'none';
                    placebo.style.display = 'none';
                    samsmith.style.display = 'none';
                    mrkitty.style.display = 'none';
                    slider("__conan");
                    var top = document.getElementById('gallery').clientHeight;
                    $('body,html').animate({scrollTop: top}, 300);
                    break;
                case 'girlinredRadio':
                    yungblud.style.display = 'none';
                    palewaves.style.display = 'none';
                    conan.style.display = 'none';
                    girlinred.style.display = 'block';
                    placebo.style.display = 'none';
                    samsmith.style.display = 'none';
                    mrkitty.style.display = 'none';
                    slider("__girlinred");
                    var top = document.getElementById('gallery').clientHeight;
                    $('body,html').animate({scrollTop: top}, 300);
                    break;
                case 'placeboRadio':
                    yungblud.style.display = 'none';
                    palewaves.style.display = 'none';
                    conan.style.display = 'none';
                    girlinred.style.display = 'none';
                    placebo.style.display = 'block';
                    samsmith.style.display = 'none';
                    mrkitty.style.display = 'none';
                    slider("__placebo");
                    var top = document.getElementById('gallery').clientHeight;
                    $('body,html').animate({scrollTop: top}, 300);
                    break;
                case 'samsmithRadio':
                    yungblud.style.display = 'none';
                    palewaves.style.display = 'none';
                    conan.style.display = 'none';
                    girlinred.style.display = 'none';
                    placebo.style.display = 'none';
                    samsmith.style.display = 'block';
                    mrkitty.style.display = 'none';
                    slider("__samsmith");
                    var top = document.getElementById('gallery').clientHeight;
                    $('body,html').animate({scrollTop: top}, 300);
                    break;
                case 'mrkittyRadio':
                    yungblud.style.display = 'none';
                    palewaves.style.display = 'none';
                    conan.style.display = 'none';
                    girlinred.style.display = 'none';
                    placebo.style.display = 'none';
                    samsmith.style.display = 'none';
                    mrkitty.style.display = 'block';
                    slider("__mrkitty");
                    var top = document.getElementById('gallery').clientHeight;
                    $('body,html').animate({scrollTop: top}, 300);
                    break;
            }
        }
    }
}