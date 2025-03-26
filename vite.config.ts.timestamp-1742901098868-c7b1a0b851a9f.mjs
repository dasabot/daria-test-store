// vite.config.ts
import { defineConfig } from "file:///C:/Users/dasab/projects/daria-test-store/daria-test-store/node_modules/vite/dist/node/index.js";
import { hydrogen } from "file:///C:/Users/dasab/projects/daria-test-store/daria-test-store/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { oxygen } from "file:///C:/Users/dasab/projects/daria-test-store/daria-test-store/node_modules/@shopify/mini-oxygen/dist/vite/plugin.js";
import { vitePlugin as remix } from "file:///C:/Users/dasab/projects/daria-test-store/daria-test-store/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///C:/Users/dasab/projects/daria-test-store/daria-test-store/node_modules/vite-tsconfig-paths/dist/index.mjs";
import tailwindcss from "file:///C:/Users/dasab/projects/daria-test-store/daria-test-store/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    tailwindcss(),
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: true
      }
    }),
    tsconfigPaths()
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYXNhYlxcXFxwcm9qZWN0c1xcXFxkYXJpYS10ZXN0LXN0b3JlXFxcXGRhcmlhLXRlc3Qtc3RvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRhc2FiXFxcXHByb2plY3RzXFxcXGRhcmlhLXRlc3Qtc3RvcmVcXFxcZGFyaWEtdGVzdC1zdG9yZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZGFzYWIvcHJvamVjdHMvZGFyaWEtdGVzdC1zdG9yZS9kYXJpYS10ZXN0LXN0b3JlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHtoeWRyb2dlbn0gZnJvbSAnQHNob3BpZnkvaHlkcm9nZW4vdml0ZSc7XG5pbXBvcnQge294eWdlbn0gZnJvbSAnQHNob3BpZnkvbWluaS1veHlnZW4vdml0ZSc7XG5pbXBvcnQge3ZpdGVQbHVnaW4gYXMgcmVtaXh9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJztcblxuZGVjbGFyZSBtb2R1bGUgJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnIHtcbiAgaW50ZXJmYWNlIEZ1dHVyZSB7XG4gICAgdjNfc2luZ2xlRmV0Y2g6IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHRhaWx3aW5kY3NzKCksXG4gICAgaHlkcm9nZW4oKSxcbiAgICBveHlnZW4oKSxcbiAgICByZW1peCh7XG4gICAgICBwcmVzZXRzOiBbaHlkcm9nZW4ucHJlc2V0KCldLFxuICAgICAgZnV0dXJlOiB7XG4gICAgICAgIHYzX2ZldGNoZXJQZXJzaXN0OiB0cnVlLFxuICAgICAgICB2M19yZWxhdGl2ZVNwbGF0UGF0aDogdHJ1ZSxcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcbiAgICAgICAgdjNfbGF6eVJvdXRlRGlzY292ZXJ5OiB0cnVlLFxuICAgICAgICB2M19zaW5nbGVGZXRjaDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdHNjb25maWdQYXRocygpLFxuICBdLFxuICBidWlsZDoge1xuICAgIC8vIEFsbG93IGEgc3RyaWN0IENvbnRlbnQtU2VjdXJpdHktUG9saWN5XG4gICAgLy8gd2l0aHRvdXQgaW5saW5pbmcgYXNzZXRzIGFzIGJhc2U2NDpcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMCxcbiAgfSxcbiAgc3NyOiB7XG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAvKipcbiAgICAgICAqIEluY2x1ZGUgZGVwZW5kZW5jaWVzIGhlcmUgaWYgdGhleSB0aHJvdyBDSlM8PkVTTSBlcnJvcnMuXG4gICAgICAgKiBGb3IgZXhhbXBsZSwgZm9yIHRoZSBmb2xsb3dpbmcgZXJyb3I6XG4gICAgICAgKlxuICAgICAgICogPiBSZWZlcmVuY2VFcnJvcjogbW9kdWxlIGlzIG5vdCBkZWZpbmVkXG4gICAgICAgKiA+ICAgYXQgL1VzZXJzLy4uLi9ub2RlX21vZHVsZXMvZXhhbXBsZS1kZXAvaW5kZXguanM6MToxXG4gICAgICAgKlxuICAgICAgICogSW5jbHVkZSAnZXhhbXBsZS1kZXAnIGluIHRoZSBhcnJheSBiZWxvdy5cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9kZXAtb3B0aW1pemF0aW9uLW9wdGlvbnNcbiAgICAgICAqL1xuICAgICAgaW5jbHVkZTogW10sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VyxTQUFRLG9CQUFtQjtBQUNwWSxTQUFRLGdCQUFlO0FBQ3ZCLFNBQVEsY0FBYTtBQUNyQixTQUFRLGNBQWMsYUFBWTtBQUNsQyxPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGlCQUFpQjtBQVF4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixTQUFTLENBQUMsU0FBUyxPQUFPLENBQUM7QUFBQSxNQUMzQixRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxRQUNyQix1QkFBdUI7QUFBQSxRQUN2QixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQTtBQUFBLElBR0wsbUJBQW1CO0FBQUEsRUFDckI7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV1osU0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
