<script>
import { useStore } from '../../../utils/pinia';

export default {
    name: 'ThemeSelector',

    computed: {
        themes() {
            return useStore('layout').themes;
        },
        theme() {
            return useStore('preferences').global.theme ?? '';
        },
        rtl() {
            const localisation = useStore('localisation');
            const preferences = useStore('preferences');

            return localisation.rtlLanguages.includes(preferences.global.lang);
        },
        alternate() {
            return Object.keys(this.themes)
                .find(theme => theme.replace('-rtl', '') !== this.theme.replace('-rtl', ''))
                + (this.rtl ? '-rtl' : '');
        },
        multiTheme() {
            return Object.keys(this.themes).length > 1;
        },
    },

    methods: {
        setTheme(theme) {
            return useStore('preferences').setTheme(theme);
        },
    },

    render() {
        return this.$slots.default({
            multiTheme: this.multiTheme,
            itemEvents: {
                click: () => this.setTheme(this.alternate),
            },
        });
    },
};
</script>
