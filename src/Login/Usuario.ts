export interface UserData{
    id: number
    nome: string
    email: string
    photo: string
    role:[
        'admin' | 'moderator' | 'user'
    ]
}
