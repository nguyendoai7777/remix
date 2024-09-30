import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route('login', 'pages/login/login.tsx');
          route('', 'pages/home/home.layout.tsx', () => {
            route('', 'pages/home/home.tsx', { index: true });
            route('about', 'pages/about/about.tsx');
            route('product', 'pages/product/product.layout.tsx', () => {
              route('', 'pages/product/products.tsx', { index: true });
              route(':id', 'pages/product/product.$id.tsx');
            });
          });

        });
      }
    }),
    tsconfigPaths(),
  ],
});
