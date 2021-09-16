import { tableSchema } from '@nozbe/watermelondb';

const pointSchema = tableSchema({
  name: 'points',
  columns: [
    {
      name: 'point_id',
      type: 'string',
    },
    {
      name: 'latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      type: 'number',
    },
    {
      name: 'speed',
      type: 'number',
    },
    {
      name: 'time',
      type: 'string',
    },
    {
      name: 'synced',
      type: 'boolean',
    },
    {
      name: 'createdAt',
      type: 'string',
    },
  ],
});

export { pointSchema };
