export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: 'location',
        title: 'Location',
        type: 'string',
    },
    {
        name: 'contact',
        title: 'Contact',
        type: 'string',
    },
    {
        name: 'email',
        title: 'Email',
        type: 'string',
    },
    {
        name: 'position',
        title: 'Position',
        type: 'string',
    },
    {
        name: 'profile',
        title: 'Profile',
        type: 'blockContent',
    },
    {
        name: 'skills',
        title: 'Skills',
        type: 'blockContent',
    },
    {
        name: 'education',
        title: 'Education',
        type: 'blockContent',
    },
    {
        name: 'experience',
        title: 'Experience',
        type: 'blockContent',
    },
    {
        name: 'cvImage1',
        title: 'Image1',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
    ],
};