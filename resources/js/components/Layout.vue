<template>
    <div>
<!--        <div class="row w-100 m-auto justify-content-between">-->
<!--            <div class="col-12">-->
                <slot name="menu"></slot>
<!--            </div>-->
<!--        </div>-->
        <div class="row w-100 mt-2 mx-auto justify-content-center">
            <div class="col-12 col-md-6">
                <div class="row w-100 mx-auto justify-content-start align-items-center">
                    <h3 style="font-weight: 700; font-size: 32px; font-family: Montserrat;">{{title}}</h3>
                    <span v-if="info" class="ml-1 mb-1 mdi mdi-information" style="color: #7224f2; font-size:18px"></span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <slot name="header"></slot>
            </div>
        </div>
        <div class="row w-100 m-auto justify-content-center">
            <div class="col-12">
                <slot name="filters"></slot>
            </div>
        </div>
        <div class="row w-100 m-auto align-items-center justify-content-center">
            <div class="col-12">
                <slot name="main"></slot>
            </div>
        </div>
        <div class="row w-100 m-auto align-items-center justify-content-center">
            <div class="col-12">
                <slot name="pagination"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        props:['title', 'info']
    }
</script>

<style scoped>

</style>
