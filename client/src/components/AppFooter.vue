<template>
    <v-footer class="ft">
        <h3 class="title">Liên Hệ Với Tôi</h3>
        <div class="socials">
            <a href="https://www.facebook.com/NguyenKhacDuy1512ss">
                <v-icon class="social-detail" icon="mdi-facebook" />
            </a>
            <a href="https://github.com/DuyNoob02/DuyNoob02">
                <v-icon class="social-detail" icon="mdi-github" />
            </a>
            <a href="https://www.instagram.com/nguyenkhacduy_10/">
                <v-icon class="social-detail" icon="mdi-instagram" />
            </a>
        </div>
        <h4 class="title title_4">Copyright &copy Nguyễn Khắc Duy</h4>
    </v-footer>
</template>


<style>
.ft {
    display: block;
    background-color: rgb(216, 220, 220);
}

.title {
    display: flex;
    justify-content: center;
    font-size: 18px;
}

.title_4{
    margin-top: 12px;
}
a {
    text-decoration: none;
    color: black;
}
.socials {
    display: flex;
    justify-content: center;
    margin-top: 12px;
}

.social-detail{
    font-size: 32px
}



</style>

<script>

</script>