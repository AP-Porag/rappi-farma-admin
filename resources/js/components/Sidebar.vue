<template>
  <v-navigation-drawer v-model="drawer" app>
    <div
      height="140"
      class="pa-4 bg"
    >
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="https://yt3.ggpht.com/esazPAO03T0f0vKdByJvkDy6MSwjyG5f-c_2S2CJapszQ3KPQyZarpoqvgv0Us0atUbILytj=s88-c-k-c0x00ffffff-no-rj"
          />
        </v-avatar>
        <h2 class="indigo--text">Some thing</h2>
      </div>
    </div>
    <v-divider></v-divider>
    <v-list class="ap-list">
        <div v-for="(link,i) in links" :key="link.id">
            <v-list-item
                @click="$router.push({ name: link.path })"
                link
                v-if="!link.subLinks"
            >
                <v-list-item-icon>
                    <v-icon v-text="link.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-group
                :value="false"
                :prepend-icon="link.icon"
                v-else
            >
                <template v-slot:activator>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                </template>

                <v-list-item
                    v-for="item in link.subLinks"
                    :key="i"
                    @click="$router.push({ name: item.path })"
                    link
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" class="ap-submenu"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>

            </v-list-group>
        </div>

    </v-list>


  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
          {id:1,icon:'mdi-microsoft-windows',title:'Dashboard',path:'dashboard'},
          {
              id:2,
              icon:'mdi-shield-crown',
              title:'Administration',
              subLinks: [
                  {
                      id:"2-1",
                      path:'user',
                      title: 'User',
                  },
                  {
                      id:"2-2",
                      path: 'review-registration',
                      title: 'Customer',
                  },
              ],
          },
          {
              id:3,
              icon:'mdi-alert-circle',
              title:'Prerequisites',
              subLinks: [
                  {
                      id:"3-1",
                      path:'about',
                      title: 'Category',
                  },
                  {
                      id:"3-2",
                      path:'about',
                      title: 'Subcategory',
                  },
                  {
                      id:"3-3",
                      path:'about',
                      title: 'Brand',
                  },
                  {
                      id:"3-4",
                      path:'menu',
                      title: 'menu',
                  },
              ],
          },
          {id:4,icon:'mdi-gift-open',title:'Products',path:''},
          {id:5,icon:'mdi-clipboard-list-outline',title:'Orders',path:''},
          {id:6,icon:'mdi-truck-delivery',title:'Delivery',path:''},
          {id:7,icon:'mdi-store-search',title:'Inventory',path:''},
          {id:8,icon:'mdi-card-account-details-outline',title:'Advertisement',path:''},
          {
              id:9,
              icon:'mdi-cog',
              title:'Web settings',
              subLinks: [
                  {
                      id:"9-1",
                      path:'about',
                      title: 'Home page settings',
                  },
                  {
                      id:"9-2",
                      path: 'review-registration',
                      title: 'Category settings',
                  },
              ],
          },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.ap-list{
    padding-bottom: 60px;

    .ap-submenu{
        margin-left: 70px;
    }
}
.bg{
    background: rgb(255,197,185);
    background: linear-gradient(0deg, rgba(255,197,185,0.711922268907563) 0%, rgba(220,246,223,0.6671043417366946) 35%, rgba(255,255,255,0.7539390756302521) 74%), url(http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg);
}

</style>
