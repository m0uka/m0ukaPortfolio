<template>
    <div class="bg-gradient-to-br from-blue-500 to-blue-800 h-full flex">
    <div class="container mx-auto my-auto h-auto px-8 2xl:px-10">
        <div class="text-center mt-14 mb-4 md:my-14">
            <h2 class="text-gray-100 font-extrabold text-4xl">Trusted by a lot of people</h2>
            <h3 class="mt-2 text-gray-300 font-normal text-xl text-opacity-50 tracking-wide">My products are used and trusted by a lot of people. Updated in realtime.</h3>
        </div>
        <div class="flex flex-wrap flex-col md:flex-row pb-16">
            <div class="flex-grow text-center mt-5 md:mt-0">
                <client-only>
                  <Roller class="text-white text-6xl font-bold tracking-wide tabular-nums text-center" :text="sales" />
                </client-only>
                <p class="text-white text-xl font-normal text-opacity-60">Sales</p>
            </div>
            <div class="flex-grow text-center mt-5 md:mt-0">
                <client-only>
                  <Roller :isNumberFormat="true" class=" text-white text-6xl font-bold tracking-wide tabular-nums" :text="experienced" />
                </client-only>
                <p class="text-white text-xl font-normal text-opacity-60">Lifetime workshop subscriptions</p>
            </div>
            <div class="flex-grow text-center mt-5 md:mt-0">
                <client-only>
                  <Roller class=" text-white text-6xl font-bold tracking-wide tabular-nums" :text="servers" />
                </client-only>
                <p class="text-white text-xl font-normal text-opacity-60">Servers</p>
            </div>
            <div class="flex-grow text-center mt-5 md:mt-0">
                <client-only>
                  <Roller class=" text-white text-6xl font-bold tracking-wide tabular-nums" :text="players" />
                </client-only>
                <p class="text-white text-xl font-normal text-opacity-60">Players online</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .roller {
    margin: auto;
  }
</style>

<script>
export default {
  data () {
    return {
      sales: 0,
      experienced: 0,
      servers: 0,
      players: 0
    }
  },
  mounted () {
    window.setInterval(() => {
      this.$fetch()
    }, 3000)
  },
  async fetch () {
    const data = await fetch('https://voidstudios.dev/api/user/portfoliostats').then(res => res.json())
    this.sales = data.purchases.toString()
    this.servers = data.servers.toString()
    this.players = data.players.toString()

    const workshop = await fetch('https://m0uka.dev/workshopstats').then(res => res.text())
    this.experienced = workshop
  }
}
</script>
