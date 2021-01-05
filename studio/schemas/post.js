export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: "date",
      type: "string",
    },
    {
      name: "place",
      type: "string",
    },
  {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
          list: [
              {value: "Personal", title: "Personal"},
              {value: "Client", title: "Client"},
              {value: "University", title: "University"},
          ],
      },
  },
  {
      name: "areaofFocus",
      title: "Area of Focus",
      type: "string",
      options: {
          list: [
              {value: "Decorative", title: "Decorative"},
              {value: "Commercial", title: "Commercial"},
              {value: "Architectural", title: "Architectural"},
              {value: "Hospitality", title: "Hospitality"},
              {value: "Transport", title: "Transport"},
          ],
      },
  },
  {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
  },
  {
      name: 'bodyImage',
      title: 'Body image',
      type: 'image',
      options: {
        hotspot: true,
      },
  },
  {
      name: "bodyImagetext",
      type: "text",
  },
  {
      name: 'body2',
      title: 'Body2',
      type: 'blockContent',
  },
  // Slideshow Images
  {
      name: 'galleryImage1',
      title: 'Gallery 1 image',
      type: 'image',
      options: {
        hotspot: true,
      },
  },
  {
    name: "caption1",
    type: "text",
  },
  {
      name: 'galleryImage2',
      title: 'Gallery 2 image',
      type: 'image',
      options: {
        hotspot: true,
      },
  },
  {
    name: "caption2",
    type: "text",
  },
  {
      name: 'galleryImage3',
      title: 'Gallery 3 image',
      type: 'image',
      options: {
        hotspot: true,
      },
  },
  {
    name: "caption3",
    type: "text",
  },
  {
    name: 'galleryImage4',
    title: 'Gallery 4 image',
    type: 'image',
    options: {
      hotspot: true,
    },
},
{
  name: "caption4",
  type: "text",
},
  // end of slideshow images 
  {
      name: "tags",
      type: "array",
      of: [
          {
              type: "string",
          },
      ],
      options: {
          layout: "tags",
      },
  },
],
}
