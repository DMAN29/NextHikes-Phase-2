import { getEnvironmentVariables } from "@/env/env";
import { fetchGet, fetchPost } from "../Helpers/fetch";

export class UserService {
  static getBlog() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/blogs`);
  }

  static getBlogBySlug(slug: any) {
    return fetchGet(
      `${getEnvironmentVariables().API_URI}/api/blogs/slug/${slug}`
    );
  }

  static getInnovation() {
    return fetchGet(
      `${getEnvironmentVariables().API_URI}/api/innovation/get-innovation`
    );
  }

  static getTeam() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/team/public`);
  }

  static getProjects() {
    return fetchGet(
      `${getEnvironmentVariables().API_URI}/api/featuredProjects`
    );
  }

  static getHomePage() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/home/config`);
  }

  static getWe() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/we`);
  }

  static getBanner() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/banner?isActive=true`);
  }

  static getReviews() {
    return fetchGet(
      `${getEnvironmentVariables().API_URI}/api/customer-feedback`
    );
  }

  static getServices() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/services`);
  }

  static getServicesBySlug(slug: any) {
    return fetchGet(
      `${getEnvironmentVariables().API_URI}/api/services/slug/${slug}`
    );
  }

  static getIndustry() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/industry`);
  }

  static getIndustryBySlug(slug: any) {
    return fetchGet(
      `${getEnvironmentVariables().API_URI}/api/industry/slug/${slug}`
    );
  }

  static getPage() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/static-page`);
  }

  static getContact() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/api/contact-us/get-contact`);
  }

  static getPageByType(type: any) {
    return fetchGet(
      `${getEnvironmentVariables().API_URI}/api/static-page/type/${type}`
    );
  }

  static createQuery(data: any) {
    return fetchPost(
      `${getEnvironmentVariables().API_URI}/api/query/create-query`,
      data
    );
  }
}
