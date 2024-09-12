import BaseRepository from './BaseRepository.js';

class UserRepository extends BaseRepository {
    async getAll() {
        return await super.getAll('users', ['id', 'name', 'surname', 'email']);
    }

    async getByID(id) {
        return await super.getByID('users', ['id', 'name', 'surname', 'email'], id);
    }

    async insertOne() {
        return await super.insertOne(
            'users',
            ['name', 'surname', 'email', 'password'],
            ['nome2', 'sobrenome2', 'email2', 'senha2']
        );
    }
}

export default UserRepository;
