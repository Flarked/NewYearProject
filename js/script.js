let poems = [
    {
        poemText:
            `<p>
            Какая сказка за окном! <br>
            Кружат снежинки, будто в вальсе, <br>
            Весь мир пропитан волшебством, <br>
            И воздух переполнен счастьем. <br>
        </p>
        <p>
            Пусть в этот чудный Новый год <br>
            Удача в двери постучится, <br>
            И счастье вместе с ней войдет, <br>
            И все, что хочешь ты, случится! <br>
        </p>`,
        bg: `url('img/6233666.jpg')`
    },
    {
        poemText:
            `<p>
            Пусть счастье в руки упадет <br>
            И, как снежинка, не растает. <br>
            Пусть сбудется под Новый год <br>
            Всё то, о чём душа мечтает! <br>                    
        </p>
        <p>
            Здоровье будет пусть, любовь,<br>
            Всё остальное — достижимо.<br>
            А то, что портит людям кровь,<br>
            Пусть навсегда проходит мимо!<br>
        </p>`,
        bg: `url('img/christmas-decorations-on-blue-surface.jpg')`
    },
    {
        poemText:
            `<p>
            Пришла пора, когда всем можно <br>
            О новых планах помечтать, <br>
            Задумать что-то осторожно <br>
            Да всё под елкой загадать. <p>
            Рад я поздравить с Новым годом!<br>
            А поздним этим вечерком <br>
            Вас Дед Мороз пусть мимоходом <br>
            Одарит счастьем и теплом. <p>
            К вам прибежит оленей стадо <br>
            ... они подарки принесут. <br>
            Реки добра вам и услады, <br>
            У вас царит пускай уют.
        </p>`,
        bg: `url('img/top-view-festive-christmas-ornaments.jpg')`
    }
]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.poem');

btn.addEventListener('click', function () {
    randomIndex = Math.floor(Math.random() * poems.length);
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;
})