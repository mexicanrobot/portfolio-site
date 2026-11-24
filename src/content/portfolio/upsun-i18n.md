---
title: "Upsun internationalization"
description: "Implemented full-stack localization for Upsun using React context, Strapi CMS localization, and automated DeepL API translations."
tags: ["code"]
company: "Upsun"
role: "Full-Stack Frontend"
stack: ["React Context", "Strapi CMS", "DeepL API", "i18n"]
heroImage: "/blog/i18n-upsun-cover.png"
postOrder: 4
---

Adding internationalization (i18n) to the Upsun website required both frontend and backend improvements to support multiple regions and languages. On the frontend, I implemented a React context to manage and provide the current region across the application, ensuring region-specific content could be easily accessed by any component. A region dropdown selector was added to the UI, allowing users to seamlessly switch between different locales.

On the backend, I extended the Strapi CMS setup to handle localized content and enabled automatic translations by integrating with the DeepL API. This integration streamlined content workflows and reduced manual translation effort, allowing content authors to update text in one language and have it automatically translated to others. Overall, these changes provided users with a localized experience and set the foundation for future expansion to additional regions and languages.