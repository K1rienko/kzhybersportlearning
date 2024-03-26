<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../assets/Logo.png" alt="Logo" width="90" height="95"
                        class="d-inline-block align-text-top">
                    <!-- CYBERSPORT ACADEMY -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Переключатель навигации">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Главная</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                О Нас
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Об Академии</a></li>
                                <li><a class="dropdown-item" href="#">Для Студентов</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Наши дисциплины
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Дисциплина Counter-Strike 2</a></li>
                                <li><a class="dropdown-item" href="#">Дисциплина Dota 2</a></li>
                                <li><a class="dropdown-item" href="#">Дисциплина Rainbow Six Siege</a></li>
                                <li><a class="dropdown-item" href="#">Дисциплина Valorant</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Авторизация</a>
                        </li>
                        <form class="container-fluid justify-content-start">
                            <button class="btn btn-outline-success me-2" type="button">Регистарция</button>
                        </form>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavbarApp',
}
</script>

<style scoped></style>