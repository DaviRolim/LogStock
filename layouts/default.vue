<template>
  <v-app dark>
    <v-navigation-drawer fixed temporary app v-model="sideNav" >
      <v-list>
        <v-list-tile :to="item.to" v-for="(item,index) in menuItems" :key="index">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
      <nuxt-link to="/" tag="span" style="cursor: pointer">LogStock</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat :to ="item.to" v-for="(item, index) in menuItems" :key="index">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-progress-linear v-if="isLoading" :indeterminate="true" color="grey"></v-progress-linear>
    <v-content>
      <v-container>
        <nuxt />
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          // { icon: 'chrome_reader_mode', title: 'News', to: '/news'},
          { icon: 'fa fa-newspaper-o', title: 'News', to: '/news'},
          { icon: 'attach_money', title: 'Portfolio', to: '/portfolio'},
          { icon: 'timeline', title: 'Analytics', to: '/analytics'},
          { icon: 'lock_open', title: 'Sign in', to: '/signin'}
        ]
        // if (this.userIsAuthenticated) {
        //   menuItems = [
        //   { icon: 'supervisor_account', title: 'View Meetups', to: '/meetup'},
        //   { icon: 'room', title: 'Organize Meetup', to: '/meetup/new'},
        //   { icon: 'person', title: 'Profile', to: '/user'}
        // ]
        // }
        return menuItems
      },
      userIsAuthenticated () {
        return true
      },
      isLoading () {
        console.log(this.$store.getters.loading)
        return this.$store.getters.loading
      }
    },
    methods: {
      onLogout () {
        console.log('logout')
      }
    } 
  }
</script>
