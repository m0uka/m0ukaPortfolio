<template>
  <div class="stats_div">
    <div class="stats_container">
      <div class="stats_header">
        <h2>
          Trusted by a lot of people
        </h2>
        <h3>
          My products are used and trusted by a lot of people. Updated in realtime.
        </h3>
      </div>
      <div class="stats_content">
        <div>
          <client-only>
            <Roller class="roller" :text="sales" />
          </client-only>
          <p>
            Sales
          </p>
        </div>
        <div>
          <client-only>
            <Roller :is-number-format="true" class="roller" :text="experienced" />
          </client-only>
          <p>
            Lifetime workshop subscriptions
          </p>
        </div>
        <div>
          <client-only>
            <Roller class="roller" :text="servers" />
          </client-only>
          <p>
            Servers
          </p>
        </div>
        <div>
          <client-only>
            <Roller class="roller" :text="players" />
          </client-only>
          <p>
            Players online
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

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
  async fetch () {
    const data = await fetch('https://voidstudios.dev/api/user/portfoliostats').then(res => res.json())
    this.sales = data.purchases.toString()
    this.servers = data.servers.toString()
    this.players = data.players.toString()

    const workshop = await fetch('https://m0uka.dev/workshopstats').then(res => res.text())
    this.experienced = workshop
  },
  mounted () {
    window.setInterval(() => {
      this.$fetch()
    }, 3000)
  }
}
</script>

<style scoped lang="scss">
  @import '~/styles/variables';

  .roller {
    margin: auto;
  }

  .stats_div {
    @apply bg-gradient-to-br from-blue-500 to-blue-800 h-full flex;

    .stats_container {
      @apply container mx-auto my-auto h-auto px-8 2xl:px-10;

      .stats_header {
        @apply text-center mt-14 mb-4 md:my-14;

        h2 {
          color: $text-color;
          @apply font-extrabold text-4xl;
        }

        h3 {
          color: $text-color;
          @apply mt-2 font-normal text-xl tracking-wide;
        }
      }

      .stats_content {
        @apply flex flex-wrap flex-col md:flex-row pb-16;

        div {
          @apply flex-grow text-center mt-5 md:mt-0;

          .roller {
            color: $white;
            @apply text-6xl font-bold tracking-wide tabular-nums text-center;
          }

          p {
            color: $white;
            @apply text-xl font-normal text-opacity-60;
          }
        }
      }
    }

  }
</style>
