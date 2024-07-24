import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TeamLeader {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 100
    })
    name: string;
    @Column()
    lastame: string;
    @Column()
    age: number;
}
