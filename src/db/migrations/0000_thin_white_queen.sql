CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(50) NOT NULL,
	"content" text,
	"created_at" date DEFAULT now(),
	"active" boolean DEFAULT false
);
