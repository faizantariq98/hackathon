import {
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
    integer
  } from "drizzle-orm/pg-core";

import { drizzle } from "drizzle-orm/vercel-postgres";
import { isInteger } from "tailwind-merge/dist/lib/validators";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

  export const customerTable = pgTable("customers", {
    customer_id:serial('customer_id').primaryKey(),
    customer_name: text("customer_name"),
    customer_email: text("customer_email"),
    customer_mobile:varchar('customer_mobile',{length:25}),
    customer_address:varchar('customer_address',{length:220})
  });

  export const productsTable = pgTable("products",{
    product_id:serial("id").primaryKey(),
    product_name:text('name'),
    product_price:varchar('price',{length:5}),
    product_quantity:integer('quantity')
  });

  export const ordersTable = pgTable("orders",{
    order_id:serial("order_id").primaryKey(),
    total_amount:integer('total_amount'),
    total_items:varchar('total_items',{length:5}),
    pi_number:varchar('pi_number',{length:220}),
    customer_id:integer('customer_id')
  });

export type orders = InferModel<typeof ordersTable>;
export type NewOrders = InferModel<typeof ordersTable, "insert">;
export type products = InferModel<typeof productsTable>;
export type NewProducts = InferModel<typeof productsTable, "insert">;
export type customers = InferModel<typeof customerTable>;
export type NewCustomers = InferModel<typeof customerTable, "insert">;

export const db = drizzle(sql);


