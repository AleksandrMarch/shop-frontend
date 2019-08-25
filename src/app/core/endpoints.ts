const ADMIN_PREFIX = '/admin';

export const ENDPOINTS = {
  products: '/products',
  categories: '/categories',
  login: '/login',
  logout: '/logout',
  register: '/user/register',
  // admin
  admin_products: ADMIN_PREFIX + '/products',
  admin_categories: ADMIN_PREFIX + '/categories',
};
