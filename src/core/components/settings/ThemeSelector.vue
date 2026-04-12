<script>
import { preferences } from '@enso-ui/ui/src/pinia/preferences';

const options = {
    light: { label: 'Light', icon: 'sun' },
    dark: { label: 'Dark', icon: 'moon' },
    system: { label: 'System', icon: 'desktop' },
};

export default {
    name: 'ThemeSelector',

    computed: {
        theme() {
            const theme = preferences().global.theme;

            return Object.hasOwn(options, theme)
                ? theme
                : 'system';
        },
        options() {
            return options;
        },
    },

    methods: {
        setTheme(theme) {
            return preferences().setTheme(theme);
        },
    },

    render() {
        return this.$slots.default({
            theme: this.theme,
            options: this.options,
            update: this.setTheme,
        });
    },
};
</script>
