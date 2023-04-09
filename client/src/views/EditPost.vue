<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>EDIT THIS POST</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note"
                            :rules="rules"></v-text-field>
                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list"
                            :rules="rules"></v-text-field>

                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus"
                            :rules="rules"></v-textarea>
                        <v-file-input @change="selectFile" show-size counter multiple
                            label="Select Image"></v-file-input>
                            <v-img id="old_image" :src="`http://localhost:5000/uploads/${post.image}`" width="120px" alt=""></v-img>
                        <v-btn type="submit" class="submit_btn" color="#9afee2">Update Post</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api'
import Home from '../views/Home.vue'
export default {
    data() {
        return {
            rules: [(value) => !!value || "This field is required!"],
            post: {
                title: "",
                category: "",
                content: "",
                image: ""
            },
            image: "",
        };
    },
    
    async created() {
        const response = await API.getPostByID(this.$route.params.id)
        this.post = response;
    },

    methods: {
        selectFile(e) {
            this.image = e.target.files[0];
            console.log(this.image);
        },
        async updateForm() {
            const formData = new FormData();
            formData.append('image', this.image);
            formData.append('title', this.post.title);
            formData.append('category', this.post.category);
            formData.append('content', this.post.content);
            formData.append('old_image', this.post.image);
            console.log(formData);
            if (this.$refs.form.validate()) {
                const response = await API.updatePost(this.$route.params.id, formData)
                // var w = window.open('', '', 'width=100,height=100')
                // w.document.write('ok')
                // w.focus()
                // setTimeout(() => {
                //     w.close()
                // }, 2000)
                await this.$router.push('/');
            }
        }
    }
}
</script>

<style>
.v-card-title{
    font-size: 20px;
    font-weight: 1000;
}
/* .submit_btn{
    display: flex;
    justify-content: center;
} */
#old_image{
    margin-left: 20px !important;
}

.v-btn{
    /* display: flex;
    justify-content: center; */
    margin-left: 40%
}
</style>