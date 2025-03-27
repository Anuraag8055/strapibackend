export default ({ env }) => ({
    "users-permissions": {
      config: {
        jwtSecret: env("JWT_SECRET", "21bd9247f0af2048128234f5a92eab522f38f2b0509542afc12600b31f6f7f13"),
      },
    },
  });