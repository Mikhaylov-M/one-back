import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export abstract class BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@CreateDateColumn()
	dateCreated?: Date

	@UpdateDateColumn()
	dateUpdated?: Date
}