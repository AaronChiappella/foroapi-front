// models/post.ts
export interface Post {
    id?: number; // ID opcional
    title: string; // Título del post
    longText: string; // Usa longText en lugar de content
    authorEmail: string; // Email del autor
    aliasName?: string; // Alias del autor (opcional)
    urlProfileImage?: string; // URL de la imagen del perfil (opcional)
    topics?: Array<{ id: number; name: string }>; // Temas relacionados con el post

}
