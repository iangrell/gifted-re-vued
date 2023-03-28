<template>
  <div class="container-fluid">
    <section class="row justify-content-center my-5">
      <div class="col-10">
        <div class="row">
          <section class="col-4 search">
            <div class="row">
              <div class="col-12"><h4>Tag:</h4><input type="text"></div>
              <div class="col-12"><h4>URL:</h4><input type="text"></div>
              <div class="col-12"><h4>Search:</h4><input type="text"></div>
            </div>
          </section>
          <section class="col-8 gifts">
            <div class="row">
              <div class="gifts">
                <GiftCard v-for="g in gifts" :key="g.id" :gift="g" />
              </div>
              <!-- <div class="col-4"><img class="img-fluid" src="https://media3.giphy.com/media/vjjCsx3izfSyQ/200w.webp?cid=ecf05e47lbxfunr32011lssqe7eshqqrxt98hlveb8yqezx0&rid=200w.webp&ct=g" alt="breaking skull"><p>Skulls and stuff</p></div>
              <div class="col-4"><img class="img-fluid" src="https://media2.giphy.com/media/3oEdv8elIVRa3daNl6/giphy.webp?cid=ecf05e47lbxfunr32011lssqe7eshqqrxt98hlveb8yqezx0&rid=giphy.webp&ct=g" alt="winged skull"></div>
              <div class="col-4"><img class="img-fluid" src="https://media0.giphy.com/media/3o7qE8TcxvLxDGPBmM/200w.webp?cid=ecf05e47lbxfunr32011lssqe7eshqqrxt98hlveb8yqezx0&rid=200w.webp&ct=g" alt="melting pink skull"></div> -->
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';

export default {
  setup() {

    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.log(error.message)
      }
    }

    onMounted(() => {
      getGifts();
    });

    return {
      gifts: computed(() => AppState.gifts),
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
