<template>
    <core-theme-selector>
        <template #default="{ itemEvents, multiTheme }">
            <div class="level is-mobile"
                v-if="multiTheme">
                <div class="level-left">
                    <div class="level-item">
                        {{ i18n('Theme') }}
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <a class="button is-naked"
                            v-on="itemEvents">
                            <span class="icon is-small">
                                <fa :icon="faLightbulb"/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </core-theme-selector>
</template>

<script>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import CoreThemeSelector from '../../../core/components/settings/ThemeSelector.vue';

export default {
    name: 'ThemeSelector',

    components: { CoreThemeSelector, Fa },

    inject: ['i18n'],

    data: () => ({
        faLightbulb,
    }),
};
</script>
