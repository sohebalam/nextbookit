const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        DB: "mongodb+srv://SebAlam:Mmilo123@cluster0.lb1qj.mongodb.net/bookit?retryWrites=true&w=majority",
        CLOUDINARY_CLOUD_NAME: "dfreqlhvc",
        CLOUDINARY_API_KEY: "765885894368911",
        CLOUDINARY_API_SECRET: "_kxbMRYiZy7UN_qVM8E3FndXTOg",

        STRIPE_API_KEY:
          "pk_test_51IznZjIL2EmXNc31HiZIq3KS0GrkiRlmPwyRltIivELpfdBXKej0VjcbrBXzuNMN1pb0UTAp6ylVsdp1SYo9QYhC00v4jhhn7S",
        STRIPE_SECRET_KEY:
          "sk_test_51IznZjIL2EmXNc31PPQJymtdiu8LeOsw2hjMIAghxq35Q2IftXQnB0dPDNLNwMEbi14x6AI9FPmtWhoXlDMwHVwB00fzEDg3cn",
        EMAIL_SERVICE: "SendGrid",
        EMAIL_USERNAME: "apikey",
        EMAIL_PASSWORD:
          "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",
        EMAIL_FROM: "stella10q@gmail.com",
        JWT_SECRET: "dfgsgfsdf12231",
        GITHUB_ID: "Iv1.7b9cde9d6756ac4f",
        GITHUB_SECRET: "bfd689a717b63a7607368694db504a090936e7cc",
        NEXTAUTH_URL: "http://localhost:3000",
        GOOGLE_ID:
          "130210432692-9r0vji7ecklt9p1g7umeepep47kkfakc.apps.googleusercontent.com",
        GOOGLE_SECRET: "CEIiFmA3CQAQ8saOGVXYBKmk",

        LINKEDIN_CLIENT_ID: "773ilpct4olq56",
        LINKEDIN_CLIENT_SECRET: "0rIdkIsUT58Uv9Vp",

        TWITTER_ID: "Hwysrt1xXvOrriInVh6HV6iiF",
        TWITTER_SECRET: "QZd72lw0CCqc1S7Njltur1DPhJsjAxvHpk9iFNJ9d4L0wPKo5m",
        STRIPE_WEBHOOK_SECRET: "whsec_bHeASlKGX6u1jRhXFLjEVrgBwIfJpFnC",
      },

      images: {
        domains: ["res.cloudinary.com"],
      },
    }
  }
  return {
    env: {
      DB: "mongodb+srv://SebAlam:Mmilo123@cluster0.lb1qj.mongodb.net/bookit?retryWrites=true&w=majority",
      CLOUDINARY_CLOUD_NAME: "dfreqlhvc",
      CLOUDINARY_API_KEY: "765885894368911",
      CLOUDINARY_API_SECRET: "_kxbMRYiZy7UN_qVM8E3FndXTOg",
      NEXTAUTH_URL: "http://localhost:3000",
    },
    images: {
      domains: ["res.cloudinary.com"],
    },
  }
}
