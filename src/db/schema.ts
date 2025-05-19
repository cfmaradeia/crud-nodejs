import {boolean, date, pgTable, serial, text, varchar} from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    title: varchar("title", {length:50}).notNull(),
    content: text("content"),
    createdAt: date("created_at").defaultNow(),
    active: boolean("active").default(false)
});