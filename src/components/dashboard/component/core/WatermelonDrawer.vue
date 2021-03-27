<template>
    <v-navigation-drawer
        id="core-navigation-drawer"
        v-model="frame.drawer"
        :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
        :expand-on-hover="expandOnHover"
        :src="barImage"
        :right="$vuetify.rtl"
        app
        width="260"
        permanent
        v-bind="$attrs">
        <template v-slot:img="props">
            <v-img
                :gradient="`to bottom, ${barColor}`"
                v-bind="props"
            />
        </template>
        <v-list-item>
            <v-list-item-avatar class="align-self-center" color="white" contain>
                <v-img src="./assets/logo2.png" max-height="30"/>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Watermelon
                </v-list-item-title>
                <v-list-item-subtitle>
                    Record good times
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>首页</v-list-item-title>
            </v-list-item>

            <v-list-group :value="true" :prepend-icon="menu.icon" v-for="menu in menus">
                <template v-slot:activator>
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </template>
                <v-list-item v-for="(n, i) in menu.children" :key="i" link>
                    <v-list-item-title v-text="n.title"></v-list-item-title>
                    <v-list-item-icon>
                        <v-icon v-text="n.icon"></v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>
        </v-list>

    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import { State } from 'vuex-class';

interface Item {
    title: string,
    icon: string,
    children: Item[]
}

@Component
export default class WatermelonDrawer extends Vue {

    private menus: Item[] = [
        {
            title: '系统管理',
            icon: 'mdi-account-circle',
            children: [
                {
                    title: '用户管理', icon: 'mdi-account-multiple-outline', children: []
                }
            ]
        },
        {
            title: '网关管理',
            icon: 'mdi-account-circle',
            children: [
                {
                    title: '路由管理', icon: 'mdi-cog-outline', children: []
                }
            ]
        },
    ]


    private barColor: string = 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)';
    private barImage: string = 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg';

    private expandOnHover: boolean = false;

    @State private drawer: any;
}
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'
#core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
        opacity: .24

    .v-list-item
        &__icon--text,
        &__icon:first-child
            justify-content: center
            text-align: center
            width: 20px

            +ltr()
                margin-right: 24px
                margin-left: 12px !important

            +rtl()
                margin-left: 24px
                margin-right: 12px !important

    .v-list--dense
        .v-list-item
            &__icon--text,
            &__icon:first-child
                margin-top: 10px

    .v-list-group--sub-group
        .v-list-item
            +ltr()
                padding-left: 8px

            +rtl()
                padding-right: 8px

        .v-list-group__header
            +ltr()
                padding-right: 0

            +rtl()
                padding-right: 0

            .v-list-item__icon--text
                margin-top: 19px
                order: 0

            .v-list-group__header__prepend-icon
                order: 2

                +ltr()
                    margin-right: 8px

                +rtl()
                    margin-left: 8px

</style>
