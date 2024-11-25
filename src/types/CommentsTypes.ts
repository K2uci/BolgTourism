export interface CommentTypes {
    id: number;               // SERIAL PRIMARY KEY
    content: string;          // TEXT NOT NULL
    createdat: string;          // TIMESTAMP DEFAULT NOW()
    updatedat: string;          // TIMESTAMP DEFAULT NOW()
    postid: number;           // INTEGER NOT NULL
    authorid: string;         // INTEGER NOT NULL
}