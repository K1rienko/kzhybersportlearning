<template>
    <div>
        <!-- Remove the container if you want to extend the Footer to full width. -->
        <div class="container my-5">

            <!-- Footer -->
            <footer class="text-center text-lg-start text-white" style="background-color: #1c2331">
                <!-- Section: Social media -->
                <section class="d-flex justify-content-between p-4" style="background-color: #6351ce">
                    <!-- Left -->
                    <div class="me-5">
                        <span>Подписывайтесь на наши соцсети:</span>
                    </div>
                    <!-- Left -->

                    <!-- Right -->
                    <div>
                        <a href="" class="text-white me-4">
                            <font-awesome-icon :icon="['fab', 'vk']" />
                        </a>
                        <a href="" class="text-white me-4">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a href="" class="text-white me-4">
                            <font-awesome-icon :icon="['fab', 'telegram']" />
                        </a>
                        <a href="" class="text-white me-4">
                            <font-awesome-icon :icon="['fab', 'tiktok']" />
                        </a>
                        <a href="" class="text-white me-4">
                            <font-awesome-icon :icon="['fab', 'youtube']" />
                            
                        </a>
                        <a href="" class="text-white me-4">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </a>
                    </div>
                    <!-- Right -->
                </section>
                <!-- Section: Social media -->

                <!-- Section: Links  -->
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <!-- Grid row -->
                        <div class="row mt-3">
                            <!-- Grid column -->
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <!-- Content -->
                                <h6 class="text-uppercase fw-bold">X-GAMES</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                                <p>
                                    "Empowering Potential, One Skill at a Time!"

                                </p>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <!-- Links -->
                                <h6 class="text-uppercase fw-bold">Дисциплины</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                                <p>
                                    <a href="#!" class="text-white">CS2</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Rainbow Six Siege</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Dota 2</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Valorant</a>
                                </p>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <!-- Links -->
                                <h6 class="text-uppercase fw-bold">Полезные ссылки</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                                <p>
                                    <a href="#!" class="text-white">Новости</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Сотрудничество</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Руководство</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Помощь</a>
                                </p>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <!-- Links -->
                                <h6 class="text-uppercase fw-bold">Контакты</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                                <p><font-awesome-icon :icon="['fas', 'home']" /> Сатпаева, 22</p>
                                <p><font-awesome-icon :icon="['fas', 'envelope']" /> test@gmail.com</p>
                                <p><font-awesome-icon :icon="['fas', 'phone']" /> 88005553535</p>
                                <p><font-awesome-icon :icon="['fas', 'print']" /> 87470136781</p>
                            </div>
                            <!-- Grid column -->
                        </div>
                        <!-- Grid row -->
                    </div>
                </section>
                <!-- Section: Links  -->

                <!-- Copyright -->
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                    © 2024 Copyright: X-GAMES
                </div>
                <!-- Copyright -->
            </footer>
            <!-- Footer -->

        </div>
        <!-- End of .container -->
    </div>
</template>

<script>
export default {
    name: 'FooterApp',
}
</script>

<style scoped></style>