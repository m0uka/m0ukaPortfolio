<template>
    <div class="bg-gray-800 flex testimonials">
    <div class="container mx-auto my-auto h-auto px-8 2xl:px-10">
        <div class="text-center mt-14 mb-7 relative">
            <h2 class="text-gray-100 font-extrabold text-4xl">Testimonials</h2>
            <h3 class="mt-2 text-gray-300 font-normal text-xl text-opacity-50 tracking-wide">See what people are saying about me.</h3>
        </div>

        <div class="relative w-7/12 mx-auto">
            <div class="absolute top-0 left-0 ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-400 text-opacity-20 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"></path></svg>
            </div>
            <div class="pb-4 p-8">
                <p
                    v-for="(testimonial, index) in testimonials"
                    v-show="testimonialActive == index"
                    :key="index"
                    class="text-gray-400 serif font-normal italic px-6 md:px-16 text-xl md:text-2xl">
                    {{ testimonial.text }}
                </p>
            </div>
        </div>

        <div class="flex my-4 justify-center items-center">
            <button
                v-for="(testimonial, index) in testimonials"
                :key="index"
                v-on:click="testimonialActive = index"
                class="focus:outline-none focus:shadow-outline inline-block rounded-full mx-2"
                :class="{'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600': testimonialActive != index, 'h-16 w-16 opacity-100 bg-indigo-600 text-white': testimonialActive == index }"
            >
            <img class="rounded-full focus:outline-none focus:shadow-outline ring-2 ring-blue-500" :src="testimonial.avatar">
            </button>
        </div>

        <div class="flex justify-center pb-14">
            <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="text-center"
            v-show="testimonialActive == index">
                <h2 class="text-sm md:text-base font-bold text-gray-300 leading-tight">{{ testimonial.name }}</h2>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      testimonialActive: 0,
      testimonials: [
        {
          name: 'fyB_',
          text: 'Man is perfect. Completed the task with no issue within a few hours, and even fixed any and all bugs that would come up. Would recommend him to anyone.',
          avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/06/06a3495e05480cb12074c5153be5cff9a0af8465_medium.jpg'
        },
        {
          name: 'Freelok',
          text: 'Work was done well. We discussed the job for several days and he sent active screenshots and updates whilst working on it. Was very open to additions and bug fixes during the creation. I would 100% recommend his services to anyone looking for a good developer.',
          avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9e/9edc689315201385f1036d17e7767f176cb4137a_medium.jpg'
        },
        {
          name: 'KlavirMusik [GOS]',
          text: 'He is friendly / kind, doing his job fast, made fast bug fixes, he was showing me his progress,... I can recommend him. I am very happy with the final product :)',
          avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a9/a98a0bb81b446a0d1eabcbeaaae2fab865d26b29_medium.jpg'
        },
        {
          name: 'Kwoon',
          text: 'Very nice and chill, working with this dude was truly a good experience and would definitely work with him again.',
          avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e5/e58a2fcfdfd635c9e0d562bb382f091c3102bbad_medium.jpg'
        },
        {
          name: 'ichickenwafflei - twitch',
          text: '10/10 Provided an overall good experience and created exactly what I was looking for. +1',
          avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c8/c8ce19bf0f09b62df3d6492078ee5759f728cf34_medium.jpg'
        },
        {
          name: 'The Epic Sax Guy',
          text: 'Great guy! Got the job done quickly. I do recommend working with him!',
          avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e9/e901273462d51910a375fb6f7c3ae1dd13b3da9a_medium.jpg'
        },
        {
          name: 'Ozikya',
          text: "I have been a big fan of m0uka's addons for a long time, since he released mTokens. VoidCases features a wide range of capabilities that have never been seen before in an unboxing addon. He has taken everything from previous creations, and turned it into his own impressive style and functionality. He makes it very easy for the end user to manage & configure, as well as the support for all of m0uka's addons has been way above average for the entire time he has graced me with any of his latest creations.",
          avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/dc/dc6f9434ef06326938bf262fc735efa6bee1e9f1_medium.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
    .testimonials {
        background-color: #1f2937;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%231e40af' fill-opacity='0.05' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E");
    }
</style>
