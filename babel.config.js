import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        [
            "import",
            {
                libraryName: 'element-plus',
                customStyleName: (name) => {
                    name = name.slice(3)
                    return `element-plus/packages/theme-chalk/src/${name}.scss`;
                },
            },
            {
                libraryName: 'element-plus',
                customStyleName: (name) => {
                    return `element-plus/lib/theme-chalk/${name}.css`;
                },
            },
        ],
    ],
    vue(),
    styleImport({
        libs: [{
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
                return `element-plus/lib/theme-chalk/${name}.css`;
            },
            resolveComponent: (name) => {
                return `element-plus/lib/${name}`;
            },
        }]
    })
}