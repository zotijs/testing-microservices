CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"price" numeric NOT NULL,
	"quantity" integer DEFAULT 0,
	"image" text
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "tags_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "tags_to_products" (
	"tag_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	CONSTRAINT "tags_to_products_tag_id_product_id_pk" PRIMARY KEY("tag_id","product_id")
);
--> statement-breakpoint
ALTER TABLE "tags_to_products" ADD CONSTRAINT "tags_to_products_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_to_products" ADD CONSTRAINT "tags_to_products_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;