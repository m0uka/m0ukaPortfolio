<template>
  <div class="main">
    <h1>
      <span class="first_span">Hey, I am</span>
      <span class="second_span">m0uka,</span><br>
      <span class="third_span">a freelance developer</span><br>
    </h1>

    <div>
      <p>
        My name is Lukas, and I am a freelance developer and an aspiring entrepreneur from the Czech Republic.
        <br>
        <br>
        I have experience with Lua, C#, JavaScript, Vue, SQL and PHP.
      </p>
    </div>

    <SocialPanel />
  </div>
</template>

<style scoped lang="scss">
  .main {
    @apply h-full 2xl:max-w-4xl xl:max-w-4xl;

    h1 {
      @apply text-gray-100 leading-8 pt-4;
    }

    .first_span {
      @apply text-6xl tracking-normal;
    }

    .second_span {
      @apply text-8xl font-extrabold sm:pl-0 md:pl-4;
    }

    .third_span {
      @apply text-5xl font-bold tracking-wide text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-600;
    }

    div {
      @apply max-w-3xl;

      p {
        @apply text-lg text-gray-400 font-medium pt-4 pb-6;
      }
    }
  }
</style>
