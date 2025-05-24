import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "",
        format: "html",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "string",
            name: "hero_title",
            label: "Hero Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "hero_description",
            label: "Hero Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "hero_image",
            label: "Hero Image",
          },
          {
            type: "string",
            name: "featured_reports_title",
            label: "Featured Reports Section Title",
          },
          {
            type: "object",
            name: "report1",
            label: "Report 1",
            fields: [
              {
                type: "string",
                name: "meta",
                label: "Meta Information",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "excerpt",
                label: "Excerpt",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
            ],
          },
          {
            type: "object",
            name: "report2",
            label: "Report 2",
            fields: [
              {
                type: "string",
                name: "meta",
                label: "Meta Information",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "excerpt",
                label: "Excerpt",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
            ],
          },
          {
            type: "object",
            name: "report3",
            label: "Report 3",
            fields: [
              {
                type: "string",
                name: "meta",
                label: "Meta Information",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "excerpt",
                label: "Excerpt",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
            ],
          },
          {
            type: "string",
            name: "about_title",
            label: "About Section Title",
          },
          {
            type: "string",
            name: "about_text1",
            label: "About Text (First Paragraph)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "about_text2",
            label: "About Text (Second Paragraph)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "media_title",
            label: "Media Section Title",
          },
          {
            type: "object",
            name: "media1",
            label: "Media 1",
            fields: [
              {
                type: "string",
                name: "meta",
                label: "Meta Information",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "media2",
            label: "Media 2",
            fields: [
              {
                type: "string",
                name: "meta",
                label: "Meta Information",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "string",
            name: "footer_about",
            label: "Footer About Text",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "contact_email",
            label: "Contact Email",
          },
          {
            type: "string",
            name: "contact_phone",
            label: "Contact Phone",
          },
          {
            type: "string",
            name: "contact_address",
            label: "Contact Address",
          },
          {
            type: "string",
            name: "copyright",
            label: "Copyright Text",
          },
        ],
      },
    ],
  },
});
