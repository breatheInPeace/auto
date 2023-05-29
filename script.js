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
        "August, 2021. Zelenogradsk, Ocean breakwaves",
        "August, 2021. Zelenogradsk. Sunset and the surfing at the Baltic Sea 1/3.",
        "August, 2021. Zelenogradsk. Sunset and the surfing at the Baltic Sea 2/3.",
        "August, 2021. Zelenogradsk. Sunset and the surfing at the Balric Sea 3/3.",
        "August, 2021. Zelenogradsk. Summer sunset at the Baltic Sea.",
        "August, 2021. Zelenogradsk. Summer kitesurfing at the shore.",
        "August, 2019. Lysefjord, Norway. Seven Sisters waterfall in the evening 1/2.",
        "August, 2019. Lysefjord, Norway. Seven Sisters waterfall in the evening 2/2.",
        "August, 2019. Norway. Spectacular fjord 1/2.",
        "August, 2019. Norway. Spectacular fjord 2/2.",
        "August, 2021. Zelenogradsk. Summer kitesurfing at the shore."
    ],
    i = 0;
    setInterval(function(){
        $("#desc_img").fadeOut(100,function(){
            $(this).html(desc_image[(i = (i + 1) % desc_image.length)]).fadeIn(100);
        });
    }, 4000);
})();