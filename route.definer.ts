interface Route {
  path: string;
  componentPath: string;
  index?: boolean;
  children?: Route[];
}

export function routeDefiner(routes: Route[], defineRoutes: any) {
  routes.forEach(route => {
    if (route.children && route.children.length > 0) {
      defineRoutes(route.path, route.componentPath, () => {
        routeDefiner(route.children!, defineRoutes);  // Đệ quy để define route con
      });
    } else {
      defineRoutes(route.path, route.componentPath, route.index === true ? { index: true } : { index: route.index });
    }
  });
}