<template>
    <div class="body">
        <RouterView></RouterView>
    </div>
</template>

<script>

</script>

<style>
*{
    margin: 0;
}
.body{
    background: #FAFAFA;
    padding-top: 56px;
}
@media(max-width: 390px){
    .body{
        padding: 0px;
    }
}

</style>