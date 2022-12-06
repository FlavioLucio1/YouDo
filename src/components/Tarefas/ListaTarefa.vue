<template>
    <drop-list :items="items1" @reorder="$event.apply(items1)" @insert="insert1" mode="cut">
        <template v-slot:item="{item, reorder}">
            <drag :key="item.title" :data="item" @cut="remove(items1, item)">
                <v-list-item style="background-color: white"
                                :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}">
                    <v-list-item-avatar>
                        <v-img :src="item.avatar"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"/>
                        <v-list-item-subtitle v-html="item.subtitle"/>
                    </v-list-item-content>
                </v-list-item>
                <v-divider/>
            </drag>
        </template>
        <template v-slot:inserting-drag-image="{data}">
            <v-list-item-avatar style="transform:translate(-50%, -50%) scale(1.5)">
                <img :src="data.avatar">
            </v-list-item-avatar>
        </template>
        <template v-slot:reordering-drag-image/>
        <template v-slot:feedback="{data}">
            <v-skeleton-loader
                    type="list-item-avatar-three-line"
                    :key="data.title"
                    style="border-left: 2px solid #1976D2; margin-left: -2px;"
            />
        </template>
    </drop-list>
</template>

<script>
/*eslint-disable */
import {Drag,Drop,DropList} from "vue-easy-dnd";

    export default {
        name: "App",
        components: {
            Drag,
            DropList,
            Drop
        },
         data: function () {
            return {
                items1: [
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                        title: "Brunch this weekend?",
                        subtitle:
                            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                    },
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                        title: "Summer BBQ",
                        subtitle:
                            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                    },
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                        title: "Oui oui",
                        subtitle:
                            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                    }
                ],
                items2: [
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                        title: "Birthday gift",
                        subtitle:
                            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
                    },
                    {
                        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                        title: "Recipe to try",
                        subtitle:
                            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
                    }
                ]
            };
        },
        methods: {
            insert1(event) {
                this.items1.splice(event.index, 0, event.data);
            },
            insert2(event) {
                this.items2.splice(event.index, 0, event.data);
            },
            remove(array, value) {
                let index = array.indexOf(value);
                array.splice(index, 1);
            }
        }
}
</script>

<style>

</style>