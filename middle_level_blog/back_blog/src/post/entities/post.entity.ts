import { Column, Entity } from 'typeorm';

@Entity('posts')
export class Post {
  @Column('uuid', { primary: true })
  id: string;
}
