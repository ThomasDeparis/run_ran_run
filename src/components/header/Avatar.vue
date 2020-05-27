<template>
  <div class="row">    
    <div class="col-8 self-end">
      <p class="text-right q-ma-sm">Niveau {{ userProfile.general.level }}</p>      
      <q-linear-progress
        rounded
        size="8px"
        :value="userProfile.general.experiencePoints/userProfile.general.maxExperiencePoints"
        color="amber-4"
        style="width:100px"
      />
      <p class="text-right q-ma-none q-mr-sm">
        {{ userProfile.general.experiencePoints }} / {{ userProfile.general.maxExperiencePoints }}
      </p>
    </div>
    <div class="col">
      <q-img     
        :src="userProfile.general.avatarImageSource"
        height="60px"
        width="60px"
        align="right"
      />
    </div>
  </div>
  <!-- <div>
    <q-linear-progress
      rounded
      size="8px"
      :value="userProfile.general.experiencePoints/userProfile.general.maxExperiencePoints"
      color="amber-4"
      style="width:100px"
    />
    <q-img     
      :src="userProfile.general.avatarImageSource"
      height="60px"
      width="60px"
      align="right"
    />
  </div> -->
</template>

<script>
export default {
  name: "Avatar",
  props: {
    userProfile: {
      required: true
    }
  }
}
</script>