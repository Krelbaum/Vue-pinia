import {defineStore} from "pinia";

export const useMovieStore = defineStore("movieStore", {
    state: () => ({
        movies: [
            {
                id: 1,
                original_titlle: "Spider-Man",
                overview:
                "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays.",
                poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
                release_date: "2002-05-01",
                isWatched: false,
            },
            {
                id:2,
                original_titlle: "The Batman",
                overview:
                    "The Batman[a] is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.",
                poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
                release_date: "2022-03-01",
                isWatched: true,
            },
        ],
        activeTab: 1
    }),
});