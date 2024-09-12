import BaseRepository from './BaseRepository.js';

class ProductRepository extends BaseRepository {
    async getAll() {
        return await super.getAll('products', ['id', 'name', 'price_in_cents', 'size']);
    }

    async getByID(id) {
        return await super.getByID('products', ['id', 'name', 'price_in_cents', 'size'], id);
    }
}

export default ProductRepository;
