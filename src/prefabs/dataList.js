(() => ({
  name: 'Data list',
  icon: 'UnorderedListIcon',
  category: 'DATA',
  structure: [
    {
      name: 'dataList',
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
          type: 'NUMBER',
          label: 'Limit',
          key: 'limit',
          value: 5,
        },
      ],
      descendants: [],
    },
  ],
}))();
