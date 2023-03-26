module.exports = {
  apps: [
    {
      name: "gateway",
      script: "dist/apps/gateway/apps/gateway/src/main.js",
      watch: true,
    },
    {
      name: "products-service",
      script: "dist/apps/products/apps/products/src/main.js",
      watch: true,
    },
    {
      name: "orders-service",
      script: "dist/apps/orders/apps/orders/src/main.js",
      watch: true,
    },
    {
      name: "users-service",
      script: "dist/apps/users/apps/users/src/main.js",
      watch: true,
    },
    {
      name: "authentication-service",
      script: "dist/apps/authentication/apps/authentication/src/main.js",
      watch: true,
    },
  ],
};
