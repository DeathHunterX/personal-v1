import { defineField, defineType } from "sanity";

export const projectType = defineType({
	name: "projects",
	type: "document",
	title: "Projects",
    fields: [
        defineField({
			name: "createdAt",
			title: "Creation date",
			type: "date",
			options: {
				dateFormat: "YYYY-MM-DD"
			}
		}),
        defineField({
			name: "title",
			type: "string",
			title: "Title"
		}),
        defineField({
			name: "description",
			title: "Description",
			type: "text"
		}),
        defineField({
			name: "category",
			type: "array",
			title: "Category",
			of: [{ type: "reference", to: { type: "category" } }]
		}),
        defineField({
			name: "techStack",
			type: "array",
			title: "Tech Stack",
			of: [{ type: "reference", to: { type: "techStack" } }]
		}),
        defineField({
			name: "poster",
			title: "Poster",
			type: "image",
			options: {
				hotspot: true
			}
		}),
        defineField({
			name: "images",
			title: "Gallery",
			type: "array",
			of: [{ type: "image" }]
		}),
        defineField({
			title: "Repo URL",
			name: "repoUrl",
			type: "url"
		}),
        defineField({
			title: "Live URL",
			name: "liveUrl",
			type: "url"
		})
  ],
})