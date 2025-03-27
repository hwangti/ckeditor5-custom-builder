import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/ckeditor-wbz.min.js',
      }
    }
  },
  esbuild: {
    banner: '/**\n' +
        ' * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.\n' +
        ' * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options\n' +
        ' */',
    legalComments: 'none',
  },
});
