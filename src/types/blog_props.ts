interface blog_props{
    id?: number;
    title?: string; 
    content?: string; 
    image_url?: string; 
    category?: string | null;  
    created_at?: Date | undefined;
}

export default blog_props;