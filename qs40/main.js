"use strict";
// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(artist_name, album_title) {
    const music_album = {
        artistName: artist_name.split(" ").map((up) => up.charAt(0).toUpperCase() + up.slice(1)).join(" "),
        albumTitle: album_title.charAt(0).toUpperCase() + album_title.slice(1)
    };
    return music_album;
}
//calling function
console.log(make_album("atif aslam", "love"));
//making dictionary1
function dictionary1() {
    return make_album("arjit", "pyaar");
}
//making dictionary2
function dictionary2() {
    return make_album("Honey Singh", "Kalakaar");
}
//making dictionary3
function dictionary3() {
    return make_album("rahat fateh ali khan", "Qawali");
}
//calling above dictionaries
console.log(dictionary1());
console.log(dictionary2());
console.log(dictionary3());
//// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album
function make_Album(artist_name, album_title, NumberOfTrack) {
    if (NumberOfTrack) {
        const music_album = {
            artistName: artist_name.split(" ").map((up) => up.charAt(0).toUpperCase() + up.slice(1)).join(" "),
            albumTitle: album_title.charAt(0).toUpperCase() + album_title.slice(1),
            NumberOftrack: NumberOfTrack
        };
        console.log(music_album);
    }
    else {
        const music_album = {
            artistName: artist_name.split(" ").map((up) => up.charAt(0).toUpperCase() + up.slice(1)).join(" "),
            albumTitle: album_title.charAt(0).toUpperCase() + album_title.slice(1),
        };
        console.log(music_album);
    }
}
//calling func
make_Album("honey singh", "kalakar", 4);
