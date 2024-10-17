// models/post.ts
export interface Post {
    id?: number; // ID opcional
    title: string; 
    content: string; 
    authorEmail: string;
    aliasName?: string;
    urlProfileImage?: string; 
    topics?: Array<{ id: number; name: string }>; 

}
