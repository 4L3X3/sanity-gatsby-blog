export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6329e20f3281f953afcef557",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-93bw4apw",
                  apiId: "d5f52c39-16b2-444c-a5d1-b9d286d71f9c",
                },
                {
                  buildHookId: "6329e20f39c04754c76c42e1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ty5qzvaw",
                  apiId: "23844f19-d7b7-40c9-b31f-9f0ee3e1a7d0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/4L3X3/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ty5qzvaw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
