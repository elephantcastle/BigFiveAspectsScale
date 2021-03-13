export default function({ app }) {
  app.router.beforeResolve((to, from, next) => {
    if (to.path === "/test") {
      if (app.store.getters.getAge && app.store.getters.getSex) {
        next();
      } else {
        next("/intro");
      }
    }else{
        next();
    }
  });
}
