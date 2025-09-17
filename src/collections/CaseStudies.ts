import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        width: '50%',   // half width
      },
    },
    {
      name: 'subtitle',
      type: 'text',
            admin: {
        width: '50%',   // half width
      },
    },
      {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories', // foreign key to Categories
      required: true,
    },
        {
      name: 'area',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',   // uses Payload's built-in "media" collection
      hasMany: true,         // multiple images
    },

  ],
      admin: {
    useAsTitle: 'title', // show "title" in the list instead of id
    defaultColumns: ['title', 'category','subtitle','location','area'], // only show "title" column
  },
  
}
