//STEP 1
//declare and initialize an array with the address of the photos

let imgGalletyLength = document.getElementById("gallery");
let imgStoke = imgGalletyLength.getElementsByTagName("img");

//STEP 2
//This variable controls the index of the array
// let count = 0;

let countImg = 1;

//Store thr SRC atribute of the img tag in array

let src = [];
for (let i = 0; i < imgStoke.length; i++) {
    src[i] = imgStoke[i].src;
}

// //STEP 3
// //This function loops through the array of photos one by one
// function changeGallery()
//Here you have to create an if else that says that if the counter 'count' is less than the length of the array, the src of the 'gallery', which is the img tag of the html, is equal to count and else, count is equal to 0
//this is how we change the src -> gallery.src = arr[count];

function changeGallery(){
    if(countImg < imgStoke.length) {
        imgStoke[0].src = src[countImg];
        countImg++;
    } else {
        imgStoke[0].src = src[0];
        countImg = 1;
    }
};

// //STEP 4 
// //Here we use the setInterval to change the photos every so often, the seconds you want, 1000 is 1 second
// setInterval(changeGallery, 1000);

setInterval(changeGallery, 4000);

//STEP 5
//Add autumatic descriptions to the photos using jquery
(function (){
    var desc_image = [
        "August 2021, Zelenogradsk. Amazing sunset and slightly churning sea",
        "August 2021, Zelenogradsk. The Baltic Sea breakwaters",
        "August 2021, Zelenogradsk. Waiting for the waves on the evening Baltic Sea",
        "August 2021, Zelenogradsk. After riding the waves on the evening Baltic Sea",
        "August 2021, Zelenogradsk. Watch the Balric Sea sunset",
        "August 2021, Zelenogradsk. The last rays of the setting sun break through the clouds",
        "August 2021, Zelenogradsk. Summer kitesurfing",
        "August 2021, Zelenogradsk. Watching the kitesurfing",
        "August 2022, The Curonian (Courish) Spit. Alone with the sea",
        "August 2022, The Curonian (Courish) Spit. Looking for a way",
        "August 2022, The Curonian (Courish) Spit. The last trace",
        "August 2019, Lysefjord (Norway). Seven Sisters waterfall during the sunset 1/2",
        "August 2019, Lysefjord (Norway). Seven Sisters waterfall during the sunset 2/2",
        "August 2019, Sognefjorden (Norway) 1/2",
        "August 2019, Sognefjorden (Norway) 2/2",
        "August 2019, Nærøyfjorden (Norway). A place hidden from all eyes",
        "August 2019, Sognefjorden (Norway). On the way to Bergen",
        "August 2019, Ålesund (Norway). Molja Lighthouse",
        "August 2019, Stavanger (Norway). Quality Airport Hotel by the runway",
        "August 2019, Stavanger (Norway). View of the colorful houses on Mellomstraen street",
        "August 2019, Stavanger (Norway). Fountain on the lake in Byparken",
        "August 2019, Stavanger (Norway). Cruise ship hiding behind the houses",
        "August 2019, Bergen (Norway). View of the Vestre Torggaten",
        "August 2019, Ålesund (Norway). Aksla Viewpoint",
        "August 2019, Ålesund (Norway). Walking through the streets Notenesgata and Skansegata 1/3",
        "August 2019, Ålesund (Norway). Walking through the streets Notenesgata and Skansegata 2/3",
        "August 2019, Ålesund (Norway). Walking through the streets Notenesgata and Skansegata 3/3",
        "August 2019, Lysefjord (Norway). Breathtaking Preikestolen",
        "Juli 2022, Tula. The sky above",
        "June 2019, Tula. Touch and attraction"
    ],
    i = 0;
    setInterval(function(){
        $("#desc_img").fadeOut(100,function(){
            $(this).html(desc_image[(i = (i + 1) % desc_image.length)]).fadeIn(100);
        });
    }, 4000);
})();

//STEP 6 
//Add autumatic pagination to the photos using jquery

(function (){
    var count_image = [
        "1 / 30",
        "2 / 30",
        "3 / 30",
        "4 / 30",
        "5 / 30",
        "6 / 30",
        "7 / 30",
        "8 / 30",
        "9 / 30",
        "10 / 30",
        "11 / 30",
        "12 / 30",
        "13 / 30",
        "14 / 30",
        "15 / 30",
        "16 / 30",
        "17 / 30",
        "18 / 30",
        "19 / 30",
        "20 / 30",
        "21 / 30",
        "22 / 30",
        "23 / 30",
        "24 / 30",
        "25 / 30",
        "26 / 30",
        "27 / 30",
        "28 / 30",
        "29 / 30",
        "30 / 30",
    ],
    i = 0;
    setInterval(function(){
        $("#count_container").fadeOut(100,function(){
            $(this).html(count_image[(i = (i + 1) % count_image.length)]).fadeIn(100);
        });
    }, 4000);
})();