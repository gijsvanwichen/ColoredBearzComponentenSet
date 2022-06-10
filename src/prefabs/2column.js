(() => ({
  name: '2 Columns',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'row',
      options: [],
      descendants: [
        {
          name: 'column',
          options: [
            {
              type: 'CUSTOM',
              label: 'Allignment',
              key: 'allignment',
              value: 'inherit',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  {
                    name: 'None',
                    value: 'inherit',
                  },
                  {
                    name: 'Left',
                    value: 'left',
                  },
                  {
                    name: 'Center',
                    value: 'center',
                  },
                  {
                    name: 'Right',
                    value: 'right',
                  },
                ],
              },
            },
          ],
          descendants: [],
        },
        {
          name: 'column',
          options: [
            {
              type: 'CUSTOM',
              label: 'Allignment',
              key: 'allignment',
              value: 'inherit',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  {
                    name: 'None',
                    value: 'inherit',
                  },
                  {
                    name: 'Left',
                    value: 'left',
                  },
                  {
                    name: 'Center',
                    value: 'center',
                  },
                  {
                    name: 'Right',
                    value: 'right',
                  },
                ],
              },
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
