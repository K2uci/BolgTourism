export interface PostTypes {
    id: number;                // SERIAL PRIMARY KEY
    title: string;            // VARCHAR(255) NOT NULL
    content: string;          // TEXT NOT NULL
    image: string;           // VARCHAR(255) (opcional)
    published: boolean;      // BOOLEAN DEFAULT FALSE (opcional)
    createdat: string;         // TIMESTAMP DEFAULT NOW() (opcional)
    updatedat: string;         // TIMESTAMP DEFAULT NOW() (opcional)
    authorId: number;         // INTEGER NOT NULL
    destinationId?: number;   // INTEGER (opcional)
    commentcount?: number; 
    likecount?: number;
}