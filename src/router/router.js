import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/homeView.vue";
import About from "@/views/aboutView.vue";
import BlogDetail from "@/views/blog_detailView.vue";
import Blog from "@/views/blogView.vue";
import CaseStudiesDetail from "@/views/case-studies_detailView.vue";
import CaseStudies from "@/views/case-studiesView.vue";
import Contact from "@/views/contactView.vue";
import ErrorPage from "@/views/errorView.vue";
// import Log from "@/views/logView.vue";
import ServiceDetail from "@/views/service_detailView.vue";
import Services from "@/views/servicesView.vue";
import TeamDetail from "@/views/team_detailView.vue";
import Team from "@/views/teamView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "AskExperts",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/case-studies",
      name: "Case Studies",
      component: CaseStudies,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/error",
      name: "Error",
      component: ErrorPage,
    },
    // {
    //   path: "/licenses",
    //   name: "Licenses",
    //   component: Licenses,
    // },
    // {
    //   path: "/login",
    //   name: "Login",
    //   component: Log,
    // },
    // {
    //   path: "/protection",
    //   name: "Protection",
    //   component: Protection,
    // },
    {
      path: "/services",
      name: "Services",
      component: Services,
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
    },
    {
      path: "/blog-detail",
      name: "BlogDetail",
      component: BlogDetail,
    },
    {
      path: "/case-detail",
      name: "CaseStudiesDetail",
      component: CaseStudiesDetail,
    },
    {
      path: "/service-detail",
      name: "ServiceDetail",
      component: ServiceDetail,
    },
    {
      path: "/team-detail",
      name: "TeamDetail",
      component: TeamDetail,
      props: true,
    },
  ],
});

export default router;
