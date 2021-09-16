import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Point extends Model {
  static table = 'points';

  @field('point_id')
  point_id!: string;

  @field('latitude')
  latitude!: number;

  @field('longitude')
  longitude!: number;

  @field('speed')
  speed!: number | null;

  @field('time')
  time!: string;

  @field('synced')
  synced!: boolean;

  @field('createdAt')
  createdAt!: string;
}

export { Point };
