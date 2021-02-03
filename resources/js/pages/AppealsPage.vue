<template>
    <div>
        <layout title="Обращения" info="true">
            <template v-slot:menu>
                <div class="row w-100 m-auto justify-content-end align-items-center">
                    <div class="col-12 col-md-6 col-lg-9">
                        <ol class="breadcrumb m-0 align-items-center" style="background-color: transparent">
                            <li class="">
                                <a href="#" style="color: #9d9ea5; text-decoration: none">Панель управления</a>
                            </li>
                            <li class="">
                                <div class="mx-3 mdi mdi-dots-horizontal" style="color: rgb(157, 158, 165);font-size: 17px;"></div>
                            </li>
                            <li class="" aria-current="page">
                                <a href="#" style="border-bottom: 3px solid #7224f2; color: black; text-decoration: none; font-weight: 500; padding: 15px 0px">Обращения</a>
                            </li>
                        </ol>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="row w-100 my-2 mx-auto justify-content-end">
                            <div class="dropdown w-100" style="">
                                <button
                                    class="btn w-100 dropdown-select"
                                    style="padding: .375rem 1.75rem .375rem .75rem; font-size: 11px; font-weight: 500; border: 1px solid rgb(223, 227, 231);"
                                    type="button"
                                    id="dropdownMenu"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div class="row w-100 m-auto align-items-center">
                                        <span>Петров Николай</span> <span class="ml-3 mdi mdi-chevron-down" style="color: rgb(108, 24, 241);font-size: 18px; position: absolute; right: 5px"></span>
                                    </div>

                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12" style="border-bottom: 1px solid #e3e3e5">

                    </div>
                </div>
            </template>
            <template v-slot:header>
                <div class="row w-100 m-auto justify-content-end align-items-center pb-2 mb-3">
                    <div class="col-12 col-md-4 col-sm-6 pr-0">
                        <button class="btn w-100 my-1 mr-1 py-1 border-copy-button">
                            <span style="font-size: 10px; border-bottom: 2px solid #9b65f2">История обращений</span>
                        </button>
                    </div>
                    <div class="col-12 col-md-4 col-sm-6 pl-0 pr-0 pr-sm-1">
                        <button type="button" class="btn w-100 btn-dark my-1 mr-1 py-2" style="background: #7224f2;border: none;color: white;font-size: 11px;font-weight: 500;">Добавить обращение</button>
                    </div>
                    <div class="col-12 col-md-4 col-sm-6 px-0">
                        <button type="button" class="btn w-100 my-1 btn-dark py-2" style="background: #448d3b;border: none;color: white;font-size: 11px;font-weight: 500;">Убрать все ошибки</button>
                    </div>
                </div>
            </template>
            <template v-slot:filters>
                <div class="row w-100 m-auto justify-content-center align-items-center">
                    <div class="col-12 col-md-4 p-0">
                        <div class="sdm-check form-check-inline">
                            <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" checked>
                            <label for="checkbox-1" class="checkbox-custom-label">Актуальные</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" checked>
                            <label for="checkbox-2" class="checkbox-custom-label">В работе</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="checkbox-3" class="checkbox-custom" name="checkbox-3" type="checkbox" checked>
                            <label for="checkbox-3" class="checkbox-custom-label">Готово</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 p-0">
                        <div class="row w-100 mx-auto my-2 align-items-center justify-content-center">
                            <div class="col-6 pl-0 pr-2">
                                <p class="mb-1 d-flex"  style="font-size: 9px; color: #959597; font-weight: 400">поиск по рубежу</p>
                                <input class="form-control" placeholder="Все" style="background: transparent;color: black; font-weight: 500; font-size: 12px;border-color: #dfe1ee"/>
                            </div>
                            <div class="col-4  pl-0 pr-2">
                                <p class="mb-1 d-flex"  style="font-size: 9px; color: #959597; font-weight: 400">проблема</p>
                                <select class="form-select" style="color: black; font-weight: 500; font-size: 12px; border-color: #dfe1ee">
                                    <option value="" disabled selected>Все</option>
                                    <option>Первый</option>
                                    <option>Второй</option>
                                    <option>Третий</option>
                                    <option>Четвертый</option>
                                </select>
                            </div>
                            <div class="col-2 p-0">
                                <div class="dropdown mt-3">
                                    <button
                                        class="btn dropdown-toggle mdi mdi-dots-horizontal"
                                        style="color: #6633ff; padding: 0.175rem 0.95rem; border-color: #dfe1ee"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="col-8 col-md-2 p-0">
                        <p class="mb-1 d-flex"  style="font-size: 9px; color: #959597; font-weight: 400">сначало показать</p>
                        <select class="form-select" style="color: black; font-weight: 500; font-size: 12px;border-color: #dfe1ee">
                            <option value="" disabled selected>Актуальные</option>
                            <option>Первый</option>
                            <option>Второй</option>
                            <option>Третий</option>
                            <option>Четвертый</option>
                        </select>
                    </div>
                    <div class="col-4 col-md-1 p-0">
                        <div class="row w-100 mx-auto align-items-end justify-content-end">
                            <div>
                                <p class="mb-1 d-flex" style="font-size: 9px; color: #959597; font-weight: 400">вид</p>
                                <button class="btn p-1 mr-2 mdi mdi-view-sequential"
                                        style="height:36px; width: 36px; min-width: 36px; color: #6633ff;border-color: #dfe1ee"
                                >
                                </button>
                            </div>

                            <button
                                class="btn p-1 mr-2 mdi mdi-apps"
                                style="height:36px; width: 36px; min-width: 36px; color: #6633ff; border-color: #dfe1ee"
                            >
                            </button>
                        </div>
                    </div>

                </div>
<!--                <table class="table table-striped table-sm">-->
<!--                    <thead>-->
<!--                    <tr>-->
<!--                        <th></th>-->
<!--                        <th>-->
<!--                            <div class="sdm-check form-check-inline">-->
<!--                                <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" checked>-->
<!--                                <label for="checkbox-1" class="checkbox-custom-label">Актуальные</label>-->
<!--                            </div>-->
<!--                            <div class="form-check form-check-inline">-->
<!--                                <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" checked>-->
<!--                                <label for="checkbox-2" class="checkbox-custom-label">В работе</label>-->
<!--                            </div>-->
<!--                            <div class="form-check form-check-inline">-->
<!--                                <input id="checkbox-3" class="checkbox-custom" name="checkbox-3" type="checkbox" checked>-->
<!--                                <label for="checkbox-3" class="checkbox-custom-label">Готово</label>-->
<!--                            </div>-->
<!--                        </th>-->
<!--                        <th>-->
<!--                            <p class="mb-1 d-flex"  style="font-size: 9px; color: #959597; font-weight: 400">поиск по рубежу</p>-->
<!--                            <input class="form-control" placeholder="Все" style="background: transparent;color: black; font-weight: 500; font-size: 12px"/>-->
<!--                        </th>-->

<!--                        <th>-->
<!--                            <p class="mb-1 d-flex"  style="font-size: 9px; color: #959597; font-weight: 400">проблема</p>-->
<!--                            <select class="form-select" style="color: black; font-weight: 500; font-size: 12px">-->
<!--                                <option value="" disabled selected>Все</option>-->
<!--                                <option>Первый</option>-->
<!--                                <option>Второй</option>-->
<!--                                <option>Третий</option>-->
<!--                                <option>Четвертый</option>-->
<!--                            </select>-->
<!--                        </th>-->
<!--                        <th>-->
<!--                            <div class="dropdown">-->
<!--                                <button-->
<!--                                    class="btn btn-outline-secondary dropdown-toggle mdi mdi-dots-horizontal"-->
<!--                                    style="color: #6633ff; padding: 0.175rem 0.95rem"-->
<!--                                    type="button"-->
<!--                                    id="dropdownMenuButton"-->
<!--                                    data-bs-toggle="dropdown"-->
<!--                                    aria-expanded="false"-->
<!--                                >-->
<!--                                </button>-->
<!--                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">-->
<!--                                    <li><a class="dropdown-item" href="#">Action</a></li>-->
<!--                                    <li><a class="dropdown-item" href="#">Another action</a></li>-->
<!--                                    <li><a class="dropdown-item" href="#">Something else here</a></li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </th>-->
<!--                        <th>-->
<!--                            <p class="mb-1 d-flex"  style="font-size: 9px; color: #959597; font-weight: 400">сначало показать</p>-->
<!--                            <select class="form-select" style="color: black; font-weight: 500; font-size: 12px">-->
<!--                                <option value="" disabled selected>Все</option>-->
<!--                                <option>Первый</option>-->
<!--                                <option>Второй</option>-->
<!--                                <option>Третий</option>-->
<!--                                <option>Четвертый</option>-->
<!--                            </select>-->
<!--                        </th>-->
<!--                        <th>-->
<!--                            <div class="row w-100 m-auto align-items-center justify-content-end">-->
<!--                                <button class="btn p-1 mr-2 mdi mdi-view-sequential btn-outline-secondary" style="width: 36px; min-width: 36px; color: #6633ff">-->
<!--                                </button>-->
<!--                                <button-->
<!--                                    class="btn p-1 mr-2 mdi mdi-apps btn-outline-secondary"-->
<!--                                    style="height:36px; width: 36px; min-width: 36px; color: #6633ff; font-size: 24px; line-height: 1rem"-->
<!--                                >-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </th>-->
<!--                    </tr>-->
<!--                    </thead>-->
<!--                </table>-->
            </template>
            <template v-slot:main>
                <appeals></appeals>
            </template>
        </layout>
    </div>
</template>

<script>
    export default {
        name: "AppealsPage"
    }
</script>

<style>
    #dropdownMenuButton::after {
        display: none;
    }
    .form-select {
        display: block;
        width: 100%;
        padding: .375rem 1.75rem .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        vertical-align: middle;
        background-color: transparent;
        background-image: url('/chevron-down.svg');
        background-repeat: no-repeat;
        background-position: right .75rem center;
        background-size: 16px 12px;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .checkbox-custom{
        opacity: 0;
        position: absolute;
    }

    .checkbox-custom, .checkbox-custom-label{
        display: inline-block;
        vertical-align: middle;
        margin: 5px;
        cursor: pointer;
        font-weight: 500;
        font-size: 10px;
    }

    .checkbox-custom-label {
        position: relative;
    }

    .checkbox-custom + .checkbox-custom-label:before{
        content: '';
        /*background: #fff;*/
        border: 1px solid #ddd;
        display: inline-block;
        vertical-align: middle;
        width: 17px;
        height: 17px;
        padding: 2px;
        margin-right: 10px;
        text-align: center;
        border-radius: 3px;
    }

    #checkbox-1 + .checkbox-custom-label:before {
        border: 1px solid #d62627;
    }
    #checkbox-2 + .checkbox-custom-label:before {
        border: 1px solid #6917f1;
    }
    #checkbox-3 + .checkbox-custom-label:before {
        border: 1px solid #458d3c;
    }

    #checkbox-1:checked + .checkbox-custom-label:before {
        background: #d62627;
        box-shadow: inset 0px 0px 0px 4px #fff;
    }
    #checkbox-2:checked + .checkbox-custom-label:before {
        background: #6917f1;
        box-shadow: inset 0px 0px 0px 4px #fff;
    }
    #checkbox-3:checked + .checkbox-custom-label:before {
        background: #458d3c;
        box-shadow: inset 0px 0px 0px 4px #fff;
    }

    .checkbox-custom:focus + .checkbox-custom-label{
        outline: none;
    }
</style>
