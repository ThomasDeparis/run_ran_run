<template>
  <q-img     
    :src="imageSource"
    height="60px"
    width="60px"
    align="right"/>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    imageSource: String
  }
}
</script>