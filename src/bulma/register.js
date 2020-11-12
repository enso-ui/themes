import Vue from 'vue';
import App from '@enso-ui/ui/src/core/app';
import ThemeSelector from './components/settings/ThemeSelector.vue';

Vue.component('setting-theme-selector', ThemeSelector);
App.registerSettingsItem('setting-theme-selector', 200);
