<template>
    <div class="search-input">
        <input type="text" class="form-control" placeholder="Search" />
        <button>Seach</button>
    </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.search-input {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-control {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
}

button {
    height: 30px;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
