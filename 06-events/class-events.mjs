import EventEmitter from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likesQty = 0;
        this.on('postLike', (username) => {
            console.log(`                               `);
            console.log(`${username} liked your post    `);
            console.log(`===============================`);
            console.log(`    Likes: ${myPost.likesQty}`);
            console.log(`===============================`);
        });
        this.on('error', (error) => {
            console.error(error);
        });
    };

    like(username) {
        if(!username) {
            return this.emit(
                'error',
                new Error('No username found in the like request')
            );
        }
        this.likesQty += 1;
        this.emit('postLike', username)
    };
};

const myPost = new Post('Bekovski', 'Lorem inpsum dolor sit amet');

setTimeout(() => myPost.like('Anna Whitman'), 1800);
setTimeout(() => myPost.like('John Doe'), 3300);
setTimeout(() => myPost.like('Sam Metis'), 4200);
setTimeout(() => myPost.like(), 4600);
setTimeout(() => myPost.like('Martin McCallister'), 7400);