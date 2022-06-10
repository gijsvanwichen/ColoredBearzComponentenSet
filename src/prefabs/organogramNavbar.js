(() => ({
  name: 'Organogram Navbar',
  icon: 'TabsIcon',
  category: 'Organogram',
  structure: [
    {
      name: 'Organogram Navbar',
      options: [
        {
          type: 'MODEL',
          label: 'model',
          key: 'modelId',
          value: '',
        },
        {
          type: 'FILTER',
          label: 'filter',
          key: 'filter',
          value: {},
          configuration: {
            dependsOn: 'modelId',
          },
        },
        {
          type: 'PROPERTY',
          label: 'Property',
          key: 'property',
          value: '',
          configuration: {
            dependsOn: 'modelId',
          },
        },
        {
          type: 'VARIABLE',
          label: 'Url department',
          key: 'urlDepartment',
          value: [''],
        },
      ],
      descendants: [],
    },
  ],
}))();
