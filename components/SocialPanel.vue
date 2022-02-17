<template>
  <div class="social_panel">
    <div>
      <a href="https://github.com/m0uka">
        <font-awesome-icon class="icon" :icon="['fab', 'github']" />
      </a>
    </div>

    <div>
      <a href="https://gitlab.com/m0uka">
        <font-awesome-icon class="icon" :icon="['fab', 'gitlab']" />
      </a>
    </div>

    <div>
      <a href="https://discord.bio/p/m0uka">
        <font-awesome-icon class="icon" :icon="['fab', 'discord']" />
      </a>
    </div>

    <div>
      <a href="https://steamcommunity.com/profiles/76561198152492642">
        <font-awesome-icon class="icon" :icon="['fab', 'steam']" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
    @import '~/styles/variables';

    .social_panel {
        @apply flex flex-wrap w-6/12 md:w-4/12 mb-8 xl:mb-0;

        div {
            @apply flex-grow;

            a {
                .icon {
                    font-size: 2em;
                    color: $white;

                    :hover {
                        color: $button-hover;
                    }
                }
            }
        }
    }
</style>
