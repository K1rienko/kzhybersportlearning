<template>
    <div>
        <div class="container my-5">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/CS2.png" height="700" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Counter-Strike 2</h5>
                            <p>В наше обучение входит:
                                изучение всех соревновательных карт, разбор всех видов оружии, периферии, цели обеих
                                сторон, обозначение плэнтов А и Б - Все это вы сможете пройти в нашем обучении. Все это
                                поможет вам поднять ваш ранг и достичь успехов в данной игре.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/DT3.jpg" height="700" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Dota 2</h5>
                            <p>Мы начнем разбирать все ее части(от механики игры до разбора самой карты), изучение всех
                                предметов, героев и их способностей. За весь период обучения мы охватим всю теорию доты
                                и успеем использовать все это на практике. Кроме того, мы поможем вам поднять ваш
                                рейтинг, научим Вас командной игре, выявим Вашу роль, которая поможет Вам в будущем
                                найти достойную команду, чтобы выступать на крупных турнирах.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/R6.jpg" height="700" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Rainbow Six Siege</h5>
                            <p>Погрузитесь в мир Rainbow Six Siege: оттачивайте знание карт для стратегического
                                преимущества, мастерски используйте уникальные способности оперативников, выбирайте
                                оружие, которое подчеркивает ваш стиль игры, и разрабатывайте неотразимые тактики для
                                командной работы. Ваш путь к вершинам мастерства начинается здесь.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/VT.jpg" height="700" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Valorant</h5>
                            <p>Быть лучшем в игре Valorant, это стать экспертом в использовании агентов, их способностей
                                и синергии, освойте каждый уголок карт для стратегического превосходства, выберите
                                идеальный арсенал для вашего стиля игры, и разработайте победные стратегии командного
                                взаимодействия.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SportDisciplines',
}
</script>

<style scoped></style>