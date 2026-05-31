let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openLightbox(src){

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightbox-img").src=src;

    images.forEach((img,index)=>{
        if(img.src===src){
            currentIndex=index;
        }
    });
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

function changeImage(step){

    currentIndex += step;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
    images[currentIndex].src;
}

function filterImages(category){

    images.forEach(img=>{

        if(category==="all"){
            img.style.display="block";
        }

        else if(img.classList.contains(category)){
            img.style.display="block";
        }

        else{
            img.style.display="none";
        }
    });
}