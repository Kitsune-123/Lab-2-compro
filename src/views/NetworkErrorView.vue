<template>
    <div class="networkError">
        <h1>Uh-Oh!</h1>

        <h3>
            It looks like you are experiencing some network issues. pls take a breath and 
            <a href="#" @click="$router.go(-1)">click here</a> to try again
        </h3>
    </div>
</template>