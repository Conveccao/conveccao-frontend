export interface DadosUsuario{
    id: number
    nome: string
    email: string
    photo: string
    credenciais: {
        email: string,
    }
    role:[
        'admin' | 'moderator' | 'user'
    ]
}
