
<template>
  <div class="min-h-screen pt-10 lg:pt-30 text-white text-center">
    <div class="m-10">
      <h1 class="font-extrabold leading-relaxed text-5xl p-4 md:p-2 lg:text-7xl">Tee <span class="custom-yellow-text">oma äri</span> veebis nähtavaks</h1>
      <p class="mt-3 md:mt-10 text-xl md:text-2xl leading-relaxed">
        Sinu ettevõtte brändikuvandi ühtsus nii sotsiaalmeedias, reklaamides, veebilehel, e-poes kui ka prinditud materjalil.
      </p>
    </div>
    <div class="flex flex-row justify-center gap-8">
      <router-link to="/teenused"><button class="button-y">Teenused</button></router-link>
      <router-link to="/tehtud-tood"><button class="button-y">Tehtud tööd</button></router-link>
    </div>

    <div class="mt-20 md:mt-30">
      <div class="flex flex-col lg:flex-row items-center justify-evenly mb-20 lg:mb-0">
        <div class="w-full lg:w-1/2 text-left flex flex-col px-10 pb-10 lg:p-35">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4 leading-relaxed lg:leading-relaxed">Logod, bännerid ja veebimaterjal ettevõttele</h2>
          <p class="leading-relaxed text-xl">Loome Sinu ettevõtte <span class="custom-yellow-text">sotsiaalmeedia kontodele</span> ja <span class="custom-yellow-text">kodulehele</span> veebimaterjali. Loome logo ja bännerid Sinu kampaaniate, toodete või teenuste jaoks.</p>
        </div>
        <div class="w-5/6 lg:w-1/2 lg:p-10 flex justify-center">
          <img src="../assets/skill1.jpg" alt="" class="w-140 rounded rounded-3xl">
        </div>
      </div>
      <div class="flex flex-col lg:flex-row-reverse items-center justify-evenly mb-20">
        <div class="w-full lg:w-1/2 text-left flex flex-col px-10 pb-10 lg:p-35">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4 leading-relaxed lg:leading-relaxed">Turundus & Meta reklaamid</h2>
          <p class="leading-relaxed text-xl">Teeme Sinu ettevõttele pilkupüüdva <span class="custom-yellow-text">digireklaami</span> ja seadistame reklaami <span class="custom-yellow-text">vastavalt sihtgrupile.</span> Teeme konsultatsiooni reklaami eelarve osas.</p>
        </div>
        <div class="w-5/6 lg:w-1/2 lg:p-10 flex justify-center">
          <img src="../assets/skill2.jpg" alt="" class="w-140 rounded rounded-3xl">
        </div>
      </div>
    </div>
      
  </div>
</template>

<script setup lang="ts">

</script>