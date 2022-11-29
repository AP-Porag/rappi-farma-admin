<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">Product details</h3>
            <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="$router.push({ name: 'product' })"
                link
            >
                All Products
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col cols="12" md="7">
                <v-card>
                    <v-card-title>Product Info</v-card-title>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">
                                    Key
                                </th>
                                <th class="text-left">
                                    Value
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{{ item.name }}</td>
                            </tr>
                            <tr>
                                <td>Short description</td>
                                <td>{{ item.short_description }}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{{ item.description }}</td>
                            </tr>
                            <tr>
                                <td>Current stock</td>
                                <td>{{ item.current_stock }}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{{ item.price }}</td>
                            </tr>
                            <tr>
                                <td>Unit</td>
                                <td>{{ item.unit }}</td>
                            </tr>
                            <tr>
                                <td>Unit</td>
                                <td>{{ item.unit }}</td>
                            </tr>
                            <tr>
                                <td>SKU</td>
                                <td>{{ item.SKU }}</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>{{ item.discount }}</td>
                            </tr>
                            <tr>
                                <td>Discount type</td>
                                <td>{{ item.discount_type }}</td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>{{ item.category.category_name }}</td>
                            </tr>
                            <tr>
                                <td>Brand</td>
                                <td>{{ item.brand.brand_name }}</td>
                            </tr>
                            <tr>
                                <td>Image</td>
                                <td>
                                    <v-card
                                        class="mx-auto my-3"
                                        max-width="300"
                                    >
                                        <v-img
                                            :src="item.thumb ? item.thumb : require('../../assets/default_image.png')"
                                            height="300px"
                                        ></v-img>
                                    </v-card>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
            <v-col cols="12" md="5">
                <v-card>
                    <v-card-title>Stock & Order history</v-card-title>

                    <v-tabs
                        v-model="tab"
                        align-with-title
                    >
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab>
                            Order
                        </v-tab>
                        <v-tab>
                            Stock
                        </v-tab>
                    </v-tabs>


                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="ml-11 indigo--text">Order history</v-card-title>
                                <v-card-text class="py-5">
                                    <v-timeline align-top dense>
                                        <v-timeline-item color="indigo" small>
                                            <strong>5 Minuts ago</strong>
                                            <div class="text-caption">
                                                You have new order please check this out
                                            </div>
                                        </v-timeline-item>
                                        <v-timeline-item color="green" small>
                                            <strong>35 Minuts ago</strong>
                                            <div class="text-caption mb-2">
                                                A Product has delivered!
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item color="indigo" small>
                                            <strong>44 Minuts ago</strong>
                                            <div class="text-caption">
                                                You have new order please check this out
                                            </div>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="ml-11 indigo--text">Stock history</v-card-title>
                                <v-card-text class="py-5">
                                    <v-timeline align-top dense>
                                        <v-timeline-item color="indigo" small>
                                            <strong>5 Minuts ago</strong>
                                            <div class="text-caption">
                                                You have new order please check this out
                                            </div>
                                        </v-timeline-item>
                                        <v-timeline-item color="green" small>
                                            <strong>35 Minuts ago</strong>
                                            <div class="text-caption mb-2">
                                                A Product has delivered!
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item color="indigo" small>
                                            <strong>44 Minuts ago</strong>
                                            <div class="text-caption">
                                                You have new order please check this out
                                            </div>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import upload from "vue-image-crop-upload/upload-2";
export default {
    name: "Edit",
    components: {
        'thumbnail-upload': upload,
    },
    data: () => ({
        success:false,
        error:false,
        thumbnail_error:false,
        loading:false,
        message:'',
        item:'',
        tab: null,
    }),
    created() {
        this.getItemData();
    },
    methods:{
        async getItemData(){
            // Add a request interceptor
            axios.interceptors.request.use((config)=> {
                // Do something before request is sent
                this.loading = true;
                return config;
            },  (error) => {
                // Do something with request error
                this.loading = false;
                this.message = error.data.status
                this.error = true;
                return Promise.reject(error);
            });

            // Add a response interceptor
            axios.interceptors.response.use((response) => {
                this.loading = false;
                return response;
            },  (error) => {
                this.loading = false;
                this.message = error.data.status
                this.error = true;
                return Promise.reject(error);
            });
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get(`/api/product/${this.$route.params.id}`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        if (response.data.item != null){
                            this.item = response.data.item;
                        }

                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },
    },

}
</script>

<style scoped>

</style>
