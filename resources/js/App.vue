<template>
    <div>
        <div class="d-flex" id="wrapper">
<!--            &lt;!&ndash; Sidebar &ndash;&gt;-->
<!--            <nav  id="sidebar-wrapper" class="sidebar collapse" style="background: #050c42; max-width: 277px; border-top-right-radius:50px; border-bottom-right-radius:50px;">-->
<!--                <div class="position-sticky pt-3">-->
<!--                    <div class="sidebar-header">-->
<!--                        <h3>SDM</h3>-->
<!--                        <strong>SDM</strong>-->
<!--                        <p class="grey&#45;&#45;text lighten-5&#45;&#45;text ml-6" id="subtitle">cистема дистанционного мониторинга</p>-->
<!--                    </div>-->
<!--                    <ul class="nav flex-column">-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" aria-current="/page" href="/">-->
<!--                                <span data-feather="home"></span>-->
<!--                                Рабочий стол-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/calendar/movable">-->
<!--                                <span data-feather="file"></span>-->
<!--                                Календарь-расписание-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/apealsList">-->
<!--                                <span data-feather="shopping-cart"></span>-->
<!--                                Список обращений-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/report">-->
<!--                                <span data-feather="users"></span>-->
<!--                                Конструктор отчетов-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/operationalSummary">-->
<!--                                <span data-feather="bar-chart-2"></span>-->
<!--                                Оперативная сводка-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/users">-->
<!--                                <span data-feather="layers"></span>-->
<!--                                Пользователи-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/referenceBooks/regions">-->
<!--                                <span data-feather="layers"></span>-->
<!--                                Справочники-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/devices">-->
<!--                                <span data-feather="layers"></span>-->
<!--                                Устройства-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/boundary">-->
<!--                                <span data-feather="layers"></span>-->
<!--                                Рубежи-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/history">-->
<!--                                <span data-feather="layers"></span>-->
<!--                                История операций-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/consolidatedReport">-->
<!--                                <span data-feather="layers"></span>-->
<!--                                Сводный отчет-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="/map">-->
<!--                                <span data-feather="layers"></span>-->
<!--                                Карта-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->

<!--                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">-->
<!--                        <span>Saved reports</span>-->
<!--                        <a class="link-secondary" href="#" aria-label="Add a new report">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>-->
<!--                        </a>-->
<!--                    </h6>-->

<!--                </div>-->
<!--            </nav>-->
<!--            &lt;!&ndash; /#sidebar-wrapper &ndash;&gt;-->
            <!-- Page Content -->
            <div id="page-content-wrapper">
                <div class="container-fluid">
                    <div class="row w-100 m-auto justify-content-center">
<!--                        <main class="col-md-10 ms-sm-auto col-lg-12 px-md-4">-->
                        <main class="">
                            <div class="row w-100 m-auto justify-content-center">
                                <div class="col-12">
                                    <transition name="fade">
                                        <router-view></router-view>
                                    </transition>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    #wrapper {
        overflow-x: hidden;
    }

    #sidebar-wrapper {
        min-height: 100vh;
        margin-left: -15rem;
        -webkit-transition: margin .25s ease-out;
        -moz-transition: margin .25s ease-out;
        -o-transition: margin .25s ease-out;
        transition: margin .25s ease-out;
    }

    #sidebar-wrapper .sidebar-heading {
        padding: 0.875rem 1.25rem;
        font-size: 1.2rem;
    }

    #sidebar-wrapper .list-group {
        width: 15rem;
    }

    #page-content-wrapper {
        min-width: 100vw;
    }

    #wrapper.toggled #sidebar-wrapper {
        margin-left: 0;
    }

    @media (min-width: 768px) {
        #sidebar-wrapper {
            margin-left: 0;
        }

        #page-content-wrapper {
            min-width: 0;
            width: 100%;
        }

        #wrapper.toggled #sidebar-wrapper {
            margin-left: -15rem;
        }
    }
</style>
<!--<style>-->
<!--    .mdi::before {-->
<!--        font-size: 24px;-->
<!--        line-height: 14px;-->
<!--    }-->
<!--    .btn .mdi::before {-->
<!--        position: relative;-->
<!--        top: 4px;-->
<!--    }-->
<!--    .btn-xs .mdi::before {-->
<!--        font-size: 18px;-->
<!--        top: 3px;-->
<!--    }-->
<!--    .btn-sm .mdi::before {-->
<!--        font-size: 18px;-->
<!--        top: 3px;-->
<!--    }-->
<!--    .dropdown-menu .mdi {-->
<!--        width: 18px;-->
<!--    }-->
<!--    .dropdown-menu .mdi::before {-->
<!--        position: relative;-->
<!--        top: 4px;-->
<!--        left: -8px;-->
<!--    }-->
<!--    .nav .mdi::before {-->
<!--        position: relative;-->
<!--        top: 4px;-->
<!--    }-->
<!--    .navbar .navbar-toggle .mdi::before {-->
<!--        position: relative;-->
<!--        top: 4px;-->
<!--        color: #FFF;-->
<!--    }-->
<!--    .breadcrumb .mdi::before {-->
<!--        position: relative;-->
<!--        top: 4px;-->
<!--    }-->
<!--    .breadcrumb a:hover {-->
<!--        text-decoration: none;-->
<!--    }-->
<!--    .breadcrumb a:hover span {-->
<!--        text-decoration: underline;-->
<!--    }-->
<!--    .alert .mdi::before {-->
<!--        position: relative;-->
<!--        top: 4px;-->
<!--        margin-right: 2px;-->
<!--    }-->
<!--    .input-group-addon .mdi::before {-->
<!--        position: relative;-->
<!--        top: 3px;-->
<!--    }-->
<!--    .navbar-brand .mdi::before {-->
<!--        position: relative;-->
<!--        top: 2px;-->
<!--        margin-right: 2px;-->
<!--    }-->
<!--    .list-group-item .mdi::before {-->
<!--        position: relative;-->
<!--        top: 3px;-->
<!--        left: -3px-->
<!--    }-->
<!--</style>-->
