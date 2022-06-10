(() => ({
  name: 'Text component',
  icon: 'ParagraphIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'text',
      options: [
        {
          type: 'TOGGLE',
          label: 'Toggle Visibility',
          key: 'visible',
          value: true,
          configuration: {
            as: 'VISIBILITY',
          },
        },
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: ['Hello, world!'],
        },
        {
          type: 'FONT',
          label: 'Font',
          key: 'font',
          value: 'Body1',
        },
        {
          type: 'COLOR',
          label: 'Color',
          key: 'color',
          value: 'Primary',
        },
      ],
      descendants: [],
    },
  ],
}))();
