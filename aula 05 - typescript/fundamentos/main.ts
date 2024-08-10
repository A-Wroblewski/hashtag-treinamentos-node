// tipos customizados são úteis para evitar erros na nomeação das propriedades e também na omissão
// das propriedades obrigatórias
type Address = {
    street: string,
    number: string,
    city: string,
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address,  // para tornar uma propriedade opcional, basta utilizar um '?' após o nome
}

const person1: Person = {
    name: 'zé',
    age: 50,
    isStudent: false,
    address: {
        street: 'rua maluca',
        number: '789',
        city: 'São Paulo'
    }
}

const person2: Person = {
    name: 'maria',
    age: 25,
    isStudent: true,
}

// uma união é a junção de literais e restringe o tipo somente aos valores definidos
type UserRole = 'guest' | 'member' | 'admin'

const user: UserRole = 'admin'

function updateUser(id: number, updates: UpdatedUser) {
    const user = users.find(user => user.id === id)

    if (user) {
        Object.assign(user, updates)
    }
}

// o omit constrói um novo tipo a partir de um tipo existente e remove todas as propriedades que
// forem passadas no segundo parâmetro, podendo assim criar mais de um tipo já existente sem
// precisar passar todas as propriedades na chamada da função
// obs: o omit pode receber várias strings, basta utilizar uma união
function addNewUser(newUser: Omit<User, 'id'>): User {
    const user: User = { id: 5, ...newUser }

    users.push(user)

    return user
}

type User = {
    id: number,
    name: string,
    role: 'member' | 'admin'
}

// um tipo parcial pega um tipo já existente e transforma todas suas propriedades em opcionais
// é útil no caso de se precisar modificar um tipo em que não é necessário todos os dados dele
type UpdatedUser = Partial<User>

const users: User[] = [
    {
        id: 1, name: 'Usuário 1', role: 'member'
    },
    {
        id: 2, name: 'Usuário 2', role: 'member'
    },
    {
        id: 3, name: 'Usuário 3', role: 'admin'
    },
    {
        id: 4, name: 'Usuário 4', role: 'member'
    },
];

console.log(users)

updateUser(2, { name: 'Novo usuário 2', role: 'admin' })
updateUser(3, { name: 'Novo usuário 3' })

addNewUser({ name: 'Usuário 5', role: 'admin' })

console.log(users)

const scores = [14, 21, 33, 42, 59]
const strings = ['peixinho', 'maçã caramelizada']
const people = [{ name: 'nome 1', age: 20 }, { name: 'nome 2', age: 30 }]

// os genéricos servem para lidar com diferentes tipos de dados, além de dar a possibilidade de
// saber qual tipo de dado está sendo manipulado no momento
function getLastItem<Type>(array: Type[]): Type {
    return array[array.length - 1]
}

console.log(getLastItem(scores))
console.log(getLastItem(strings))
console.log(getLastItem(people))
