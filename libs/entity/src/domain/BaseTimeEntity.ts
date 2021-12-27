import { BeforeInsert, BeforeUpdate, Column, Generated, PrimaryColumn } from "typeorm";
import { LocalDateTime } from "@js-joda/core";
import { BigintTransformer } from "@app/entity/transformer/BigintTransformer";
import { LocalDateTimeTransformer } from "@app/entity/transformer/LocalDateTimeTransformer";

export abstract class BaseTimeEntity {
  @Generated('increment')
  @PrimaryColumn({ type: 'bigint', transformer: new BigintTransformer() })
  id: number;

  @Column({
    type: 'timestamptz',
    transformer: new LocalDateTimeTransformer(),
    nullable: false
  })
  createdAt: LocalDateTime;

  @Column({
    type: 'timestamptz',
    transformer: new LocalDateTimeTransformer(),
    nullable: false
  })
  updatedAt: LocalDateTime;

  @BeforeInsert()
  protected beforeInsert() {
    this.createdAt = LocalDateTime.now();
    this.updatedAt = LocalDateTime.now();
  }

  @BeforeUpdate()
  protected beforeUpdate(){
    this.updatedAt = LocalDateTime.now();
  }
}
