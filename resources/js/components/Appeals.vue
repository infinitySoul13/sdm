<template>
    <div>
        <div class="row w-100 mx-auto mt-3 align-items-center justify-content-center" v-if="format_table==true">
            <div class="col-12 p-0">
                <div class="row w-100 mx-auto mb-1 py-3 px-3 px-sm-0 align-items-center justify-content-center" v-for="item in laravelData" style="background: #FFFFFF; border-radius: 5px; max-width: 1420px; ">
                    <div class="col-12 col-md-4 col-sm-12">
                        <div class="row w-100 my-1 align-items-center justify-content-start">
                            <div class="col-2">
                                <div v-if="item.type_ad === 'error'" class="p-1 mdi mdi-bookmark" style="color: #d93030; border-right: 1px solid #e3e3e5; font-size: 18px; width: 36px"></div>
                                <div v-if="item.type_ad === 'inWork'" class="p-1 mdi mdi-bookmark" style="color: #6633ff; border-right: 1px solid #e3e3e5; font-size: 18px; width: 36px"></div>
                                <div v-if="item.type_ad === 'complete'" class="p-1 mdi mdi-bookmark" style="color: #458e3c;border-right: 1px solid #e3e3e5; font-size: 18px; width: 36px"></div>
                            </div>
                            <div class="col-10">
                                <h6 class="ml-1 mb-0" style="font-size: 12px;font-weight: 300">{{item.evice_bound_neme}}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-2 p-sm-0">
                        <div class="row m-auto my-1 align-items-center justify-content-center" style="border: 1px solid #e3e3e5">
                            <div class="col-2 p-0">
                                <div :class="'p-1 mr-1 mdi '+item.icon" style="color:#d93030;font-size: 18px"></div>
                            </div>
                            <div class="col-10 p-0">
                                <h6 class="ml-1 mb-0" style="font-size: 10px;font-weight: 600">{{item.errors}}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-2">
                        <div class="my-1">
                            <div v-if="item.type_ad === 'error'">
                                <p class="mb-0 d-flex" style="font-size: 9px; color: #959597">дата и время обращения</p>
                                <div class="d-flex table-text" style="font-size: 10px;font-weight: 500">{{item.dateOpen}}</div>
                            </div>
                            <div v-if="item.type_ad === 'inWork'">
                                <p class="mb-0 d-flex" style="font-size: 9px; color: #959597">дата и время начала работ</p>
                                <div class="mb-0 d-flex table-text" style="font-size: 10px;font-weight: 500">{{item.dateOpen}}</div>
                            </div>
                            <div v-if="item.type_ad === 'complete'">
                                <p class="mb-0 d-flex" style="font-size: 9px; color: #959597">дата и время окончания работ</p>
                                <div class="d-flex table-text" style="font-size: 10px;font-weight: 500">{{item.data}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-2">
                        <div class="my-1">
                            <p class="mb-0 d-flex" style="font-size: 9px; color: #959597">серийный номер устройств</p>
                            <div class="d-flex" style="font-size: 10px;font-weight: 500">{{item.serialNumber}}</div>
                        </div>

                    </div>
                    <div class="col-12 col-sm-12 col-md-2">
                        <div class="row w-100 mx-auto my-1 align-items-center justify-content-end">
                            <button class="btn mr-6 mt-1 border-copy-button" v-if="item.type_ad === 'complete'">
                                <span style="font-size: 10px; border-bottom: 1px solid #9b65f2">Отчет</span>
                            </button>
<!--                            <button class="btn mr-6 mt-1 disable-button" style="height:36px;width: 55px" v-if="item.type_ad !== 'complete'" disabled>-->

<!--                            </button>-->
                            <button class="btn p-1 mr-2 mdi mdi-chevron-right" @click="editItem(item)" style="height:36px; width: 36px; min-width: 36px; background: #6633ff; color: #FFFFFF">
                            </button>
                            <button
                                v-if="item.type_ad === 'complete'"
                                class="btn p-1 mr-2 mdi mdi-close"
                                style="height:36px; width: 36px; min-width: 36px; background: #458e3c; color: #FFFFFF; font-size: 24px; line-height: 1rem"
                                @click="deleteItem(item)"
                            >
                            </button>
                            <button
                                v-else
                                class="btn p-1 mr-2 mdi mdi-close"
                                style="height:36px; width: 36px; min-width: 36px; background: #dfe1ee; color: #FFFFFF; font-size: 24px; line-height: 1rem"
                                disabled
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row w-100 m-auto row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center justify-content-center">
            <div class="col-12 col-lg-3 col-md-6 px-2" v-for="item in laravelData">
                <div class="card h-100 p-2 my-2" style="max-width: 340px; border-radius:5px; border:0;">
                    <div class="card-body">
                        <div class="row w-100  mx-auto mb-2 align-items-center justify-content-start">
                            <div class="col-10 p-0">
                                <h6 class="mb-0 card-title" style="font-size: 12px;font-weight: 300">{{item.evice_bound_neme}}</h6>
                            </div>
                            <div class="col-2">
                                <div v-if="item.type_ad === 'error'" class="p-1 mdi mdi-bookmark" style="color: #d93030; font-size: 18px; width: 36px"></div>
                                <div v-if="item.type_ad === 'inWork'" class="p-1 mdi mdi-bookmark" style="color: #6633ff; font-size: 18px; width: 36px"></div>
                                <div v-if="item.type_ad === 'complete'" class="p-1 mdi mdi-bookmark" style="color: #458e3c; font-size: 18px; width: 36px"></div>
                            </div>
                        </div>
                        <div class="row mx-auto mb-2 align-items-center justify-content-center" style="border: 1px solid #e3e3e5">
                            <div class="col-2 p-0">
                                <div :class="'p-1 mr-1 mdi '+item.icon" style="color:#d93030;font-size: 18px"></div>
                            </div>
                            <div class="col-10 p-0">
                                <h6 class="mb-0" style="font-size: 10px;font-weight: 600">{{item.errors}}</h6>
                            </div>
                        </div>
                        <div class="row w-100 mx-auto mb-2">
                            <div class="col-8 p-0">
                                <div v-if="item.type_ad === 'error'">
                                    <p class="mb-0 d-flex" style="font-size: 9px; color: #959597">дата и время обращения</p>
                                    <div class="d-flex table-text" style="font-size: 10px;font-weight: 500">{{item.dateOpen}}</div>
                                </div>
                                <div v-if="item.type_ad === 'inWork'">
                                    <p class="mb-0 d-flex"  style="font-size: 9px; color: #959597">дата и время начала работ</p>
                                    <div class="mb-0 d-flex table-text" style="font-size: 10px;font-weight: 500">{{item.dateOpen}}</div>
                                </div>
                                <div v-if="item.type_ad === 'complete'">
                                    <p class="mb-0 d-flex"  style="font-size: 9px; color: #959597">дата и время окончания работ</p>
                                    <div class="d-flex table-text" style="font-size: 10px;font-weight: 500">{{item.data}}</div>
                                </div>
                            </div>
                            <div class="col-4 p-0">
                                <div class="row w-100 m-auto justify-content-end">
                                    <button class="btn p-0 border-copy-button" v-if="item.type_ad === 'complete'">
                                        <span style="font-size: 10px; border-bottom: 1px solid #9b65f2">Отчет</span>
                                    </button>
                                    <button class="btn p-0 disable-button" v-if="item.type_ad !== 'complete'" disabled>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mx-auto">
                            <div class="col-8 p-0">
                                <p class="mb-0 d-flex"  style="font-size: 9px; color: #959597">серийный номер устройств</p>
                                <div class="d-flex" style="font-size: 10px;font-weight: 500">{{item.serialNumber}}</div>
                            </div>
                            <div class="col-4 p-0">
                                <div class="row w-100 m-auto justify-content-end">
                                    <div class="col-6 p-0">
                                        <button class="btn mr-1 p-1 mdi mdi-chevron-right" @click="editItem(item)" style="height:36px; width: 36px; min-width: 36px; background: #6633ff; color: #FFFFFF">
                                        </button>
                                    </div>
                                    <div class="col-6 p-0" v-if="item.type_ad === 'complete'">
                                        <button
                                            v-if="item.type_ad === 'complete'"
                                            class="btn p-1 mdi mdi-close"
                                            style="height:36px; width: 36px; min-width: 36px; background: #458e3c; color: #FFFFFF; font-size: 24px; line-height: 1rem"
                                            @click="deleteItem(item)"
                                        >
                                        </button>
                                    </div>

<!--                                    <button-->
<!--                                        v-else-->
<!--                                        class="btn p-1 mdi mdi-close"-->
<!--                                        style="height:36px; width: 36px; min-width: 36px; background: #dfe1ee; color: #FFFFFF; font-size: 24px; line-height: 1rem"-->
<!--                                        disabled-->
<!--                                    >-->
<!--                                    </button>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Appeals",
        // props:[],
        data: () => ({
            // checkbox
            actual: true,
            inWork: true,
            ready: true,
            //checkbox
            myLoadVariable: true,
            toggle_none: 0,
            dialog: false,
            dialogDelete: false,
            format_table: true,
            expanded: [],
            error_filter: "",
            errors: [],
            filters: ['актуальные', 'за неделю', 'за месяц', 'за квартал', 'за год'],
            singleExpand: false,
            laravelData: [{
                key: 1,
                evice_bound_neme: "г. Пенза, ул. Ленина, 541-1а",
                errors: "Низкий заряд аккумулятора",
                dateOpen: "12 августа 2020 в 15:58",
                data: "",
                serialNumber: "MD4578 KD1405",
                type_ad: "error",
                icon: "mdi-battery-10",
                color: "#d93030",
            },
                {
                    key: 2,
                    evice_bound_neme: "г. Пенза, ул. Стасова, 14",
                    errors: "Нет ответа от камеры",
                    dateOpen: "12 августа 2020 в 14:05",
                    data: "",
                    serialNumber: "MD0051 KD17568",
                    type_ad: "error",
                    icon: "mdi-block-helper",
                    color: "#d93030",
                },
                {
                    key: 3,
                    evice_bound_neme: "г. Пенза, ул. Павлушкина, 964а",
                    errors: "Камера загрязнена",
                    dateOpen: "12 августа 2020 в 13:58",
                    data: "",
                    serialNumber: "MD0051 KD17568",
                    type_ad: "error",
                    icon: "mdi-broom",
                    color: "#d93030",
                },
                {
                    key: 4,
                    evice_bound_neme: "г. Пенза, ул. Ленина, 541-1а",
                    errors: "Низкий заряд аккумулятора",
                    dateOpen: "12 августа 2020 в 15:58",
                    data: "",
                    serialNumber: "MD4578 KD0505",
                    type_ad: "error",
                    icon: "mdi-battery-10",
                    color: "#d93030",
                },
                {
                    key: 5,
                    evice_bound_neme: "г. Пенза, ул. Стасова, 14",
                    errors: "Нет ответа от камеры",
                    dateOpen: "12 августа 2020 в 14:05",
                    data: "",
                    serialNumber: "MD4578 KD1405",
                    type_ad: "error",
                    icon: "mdi-block-helper",
                    color: "#d93030",
                },
                {
                    key: 6,
                    evice_bound_neme: "г. Пенза, ул. Стасова, 15",
                    errors: "Низкий заряд аккумулятора",
                    dateOpen: "12 августа 2020 в 15:47",
                    data: "",
                    serialNumber: "MD0051 KD17568",
                    type_ad: "inWork",
                    icon: "mdi-battery-10",
                    color: "#6633ff",
                },
                {
                    key: 7,
                    evice_bound_neme: "г. Пенза, ул. Ленина, 541-1а",
                    errors: "Низкий заряд аккумулятора",
                    dateOpen: "12 августа 2020 в 15:47",
                    data: "13 августа 2020 в 09:01",
                    serialNumber: "MD4578 KD1405",
                    type_ad: "complete",
                    icon: "mdi-battery-10",
                    color: "#458e3c",
                },
                {
                    key: 8,
                    evice_bound_neme: "г. Пенза, ул. Ленина, 4",
                    errors: "Низкий заряд аккумулятора",
                    dateOpen: "12 августа 2020 в 15:47",
                    data: "13 августа 2020 в 09:01",
                    serialNumber: "MD4578 KD1405",
                    type_ad: "complete",
                    icon: "mdi-battery-10",
                    color: "#458e3c",
                },
            ],
            users: [],
            headers: [{
                text: "",
                value: "icon"
            },
                {
                    text: "",
                    value: "evice_bound_neme"
                },
                {
                    text: "",
                    value: "region_name"
                },
                {
                    text: "",
                    value: "errors",
                },
                {
                    text: "",
                    value: "dateOpen",
                },
                {
                    text: "",
                    value: "serialNumber",
                },
                {
                    text: "",
                    value: "actions",
                }
            ],
            search: "",
            path: [{
                text: 'Кабинет',
                disabled: false,
                href: 'breadcrumbs_dashboard',
            },
                {
                    text: 'Панель управления',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Обращения',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                }
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                device_bound_neme: "",
                region_name: "",
                group_name: "",
            }
        }),
        created() {
            this.getData();
        },

        methods: {
            getData() {
                // axios.get("/api/pages/work_space").then((response) => {
                //     this.laravelData = response.data;

                // });
                axios.get("/api/pages/work_space/users_select").then((response) => {
                    this.users = response.data;

                });
                axios.get("/api/pages/work_space/errors").then((response) => {
                    this.errors = response.data;
                });
                this.myLoadVariable = false;
            },

            editItem(item) {
                this.editedIndex = this.laravelData.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },

            deleteItem(item) {
                this.editedIndex = this.laravelData.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialogDelete = true;
            },

            deleteItemConfirm() {
                this.laravelData.splice(this.editedIndex, 1);
                this.closeDelete();
            },

            close() {
                this.dialog = false;
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                });
            },

            closeDelete() {
                this.dialogDelete = false;
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                });
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.laravelData[this.editedIndex], this.editedItem);
                } else {
                    this.laravelData.push(this.editedItem);
                }
                this.close();
            },
        },
    }
</script>

<style scoped>

</style>
