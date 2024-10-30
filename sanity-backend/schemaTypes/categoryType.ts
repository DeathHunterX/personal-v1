import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
    name: "category",
	title: "Categories",
	type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string"
    }),
  ],
})