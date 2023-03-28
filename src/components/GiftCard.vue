<template>
    <div class="component">
        <div class="col-4"><img class="img-fluid" :src="giftProp?.url"><p>{{ gift?.tag }}</p></div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Gift } from '../models/Gift.js';


export default {
    props: {
        giftProp: {type: Gift, required: true}
    },
    setup(){
    return {  }
    }
};
</script>


<style lang="scss" scoped>

</style>