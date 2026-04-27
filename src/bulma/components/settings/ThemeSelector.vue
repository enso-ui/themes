<template>
    <core-theme-selector>
        <template #default="{ theme, options, update }">
            <div class="level is-mobile theme-selector">
                <div class="level-left">
                    <div class="level-item">
                        <span class="menu-item-label">
                            {{ i18n('Theme') }}
                        </span>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <dropdown>
                            <template #label>
                                <span :class="iconClass(theme)">
                                    <fa :icon="themeIcon(theme)"/>
                                </span>
                            </template>
                            <template #items>
                                <dropdown-item v-for="(option, key) in options"
                                    :key="key"
                                    :selected="theme === key"
                                    @select="update(key)">
                                    <span class="icon is-small"
                                        :class="iconClass(key)">
                                        <fa :icon="themeIcon(key)"/>
                                    </span>
                                </dropdown-item>
                            </template>
                        </dropdown>
                    </div>
                </div>
            </div>
        </template>
    </core-theme-selector>
</template>

<script>
import { Dropdown, DropdownItem } from '@enso-ui/dropdown/bulma';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import {
    faDesktop,
    faMoon,
    faSun,
} from '@fortawesome/free-solid-svg-icons';
import CoreThemeSelector from '../../../core/components/settings/ThemeSelector.vue';

export default {
    name: 'ThemeSelector',

    components: {
        CoreThemeSelector,
        Dropdown,
        DropdownItem,
        Fa,
    },

    inject: ['i18n'],

    data: () => ({
        themeIcons: {
            dark: faMoon,
            light: faSun,
            system: faDesktop,
        },
        themeIconClasses: {
            dark: 'has-text-link',
            light: 'has-text-warning',
            system: 'has-text-success',
        },
    }),

    methods: {
        iconClass(theme) {
            return this.themeIconClasses[theme] ?? 'has-text-grey';
        },
        themeIcon(theme) {
            return this.themeIcons[theme] ?? faDesktop;
        },
    },
};
</script>
