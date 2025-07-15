import { createRouter, createWebHistory } from "vue-router";

const views = import.meta.glob("../views/*.vue");
const debriefs = import.meta.glob("../views/Debriefs/*.vue");

function createRoute({filename, component}) {
  let {
      groups: { name },
    } = filename.match(/\.\.\/views\/(?<name>.*)(\/Index)?\.vue/);
    name = name.toLowerCase();

    if (name.includes('index')) {
      // Debriefs/Index.vue is hard coded in routes
      return null;
    }

    let path = `/${name}`;
    if (name === 'subscribe') {
      // subscribe is home page;
      path = '/'
    }

    return {
      path,
      name,
      component,
    };
}

const routes = [
  ...Object.entries(views)
    .map(([filename, component]) => createRoute({filename, component}))
    .filter(v => v),
  {
    path: '/debriefs',
    name: 'debriefs',
    component: () => import('../views/Debriefs/Index.vue'),
    children: [
      ...Object.entries(debriefs)
        .map(([filename, component]) => createRoute({filename, component}))
        .filter(v => v),
    ]
  },

  {
    path: '/tests',
    name: 'tests',
    component: () => import('../views/Debriefs/Index2.vue'),
    children: [
      {
        path: '/tests/:slug',
        name: 'test',
        component: () => import('../views/Debriefs/debrief.vue'),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
