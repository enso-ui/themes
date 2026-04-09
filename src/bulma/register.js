import ThemeSelector from './components/settings/ThemeSelector.vue';

export default App => {
    App.registerSettingsItem('theme-selector', ThemeSelector, 200);
};
