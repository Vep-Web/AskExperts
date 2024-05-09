import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import BlogDetail from "@/views/blog_detail.vue";
import Blog from "@/views/blog.vue";
import CaseStudiesDetail from "@/views/case-studies_detail.vue";
import CaseStudies from "@/views/case-studies.vue";
import Contact from "@/views/contact.vue";
import ErrorPage from "@/views/error.vue";
import Licenses from "@/views/licenses.vue";
import Log from "@/views/log.vue";
import Protection from "@/views/protection.vue";
import ServiceDetail from "@/views/service_detail.vue";
import Services from "@/views/services.vue";
import TeamDetail from "@/views/team_detail.vue";
import Team from "@/views/team.vue";

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
    {
      path: "/licenses",
      name: "Licenses",
      component: Licenses,
    },
    {
      path: "/login",
      name: "Login",
      component: Log,
    },
    {
      path: "/protection",
      name: "Protection",
      component: Protection,
    },
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
    // Динамические
    {
      path: "/blog_detail",
      name: "BlogDetail",
      component: BlogDetail,
    },
    {
      path: "/case-studies_detail",
      name: "CaseStudiesDetail",
      component: CaseStudiesDetail,
    },
    {
      path: "/service_detail",
      name: "ServiceDetail",
      component: ServiceDetail,
    },
    {
      path: "/team-detail",
      name: "TeamDetail",
      component: TeamDetail,
    },
  ],
});

export default router;
