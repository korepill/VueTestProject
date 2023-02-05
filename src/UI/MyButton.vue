<template>
    <button class="createNewUserButton">
        <slot></slot>
    </button>
</template>
<script>
export default {

}
</script>
<style scoped>
.createNewUserButton{
    background: white;
    color: black;
    outline: none;
    border: 1px solid #000000;
    width: 110px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    cursor: pointer;
}
</style>