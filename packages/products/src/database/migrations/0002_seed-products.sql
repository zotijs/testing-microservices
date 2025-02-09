-- Custom SQL migration file, put your code below! --
-- Could be a single seed but ok... --
-- Created with `pnpm generate:migrations --custom --name=seed-products` --

INSERT INTO "products" ("name", "description", "price", "quantity") VALUES ('product1', 'description1', 100, 10), ('product2', 'description2', 200, 10), ('product3', 'description3', 300, 10);
INSERT INTO "tags_to_products" ("product_id", "tag_id") VALUES (1, 1), (2, 2), (3, 3);