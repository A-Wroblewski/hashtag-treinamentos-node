BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS public.users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    price_in_cents INTEGER NOT NULL,
    size TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS public.purchases (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    purchase_date TIMESTAMP NOT NULL,
    user_id UUID NOT NULL,
    delivery_address TEXT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS public.purchase_product (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    purchase_id UUID REFERENCES purchases(id) NOT NULL,
    product_id UUID REFERENCES products(id) NOT NULL,
    product_amount INTEGER NOT NULL
);

-- COMMIT;
