export default function({ app }) {
  app.router.beforeResolve((to, from, next) => {
    if (to.path === "/test") {
      if (app.store.state.age && app.store.state.sex) {
        next("/test");
      } else {
        next("/intro");
      }
    }else{
        next();
    }
  });
}
