import { defineField, defineType } from "sanity";

export const stackType = defineType({
    name: "techStack",
    title: "Tech Stacks",
    type: "document",
    fields: [
      defineField({
          name: "title",
          title: "Title",
          type: "string"
      }),
    ],
})