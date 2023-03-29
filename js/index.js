var aElementImg = document.querySelectorAll(".gallery [data-img]");
var oMask = document.querySelector(".mask");
var oClose = document.querySelector(".close");
var oMaskImg = document.querySelector(".mask img");
var oArrowPrev = document.querySelector(".mask .arrow-prev");
var oArrowNext = document.querySelector(".mask .arrow-next");
var imgList = [];
var index = 0;
for (var i = 0; i < aElementImg.length; i++) {
    imgList.push(aElementImg[i].dataset["img"]);
    aElementImg[i].onclick = function () {
        oMask.style.display = "flex";
        document.body.style.overflow = "hidden";
        oMaskImg.src = this.dataset["img"];
        oMaskImg.onload = function () {
            if (oMaskImg.width < oMaskImg.height) {
                oMaskImg.style.height = "100%";
                oMaskImg.style.width = "auto";
            }
            if (oMaskImg.width > oMaskImg.height) {
                oMaskImg.style.height = "auto";
                oMaskImg.style.width = "80%";
            }
        };
        index = imgList.findIndex((url) => url == this.dataset["img"]);
    };
}
oClose.onclick = function () {
    oMask.style.display = "none";
    document.body.style.overflow = "auto";
    oMaskImg.src = "";
};

oArrowPrev.onclick = function () {
    index--;
    if (index < 0) {
        index = aElementImg.length - 1;
    }
    oMaskImg.src = imgList[index];
    oMaskImg.onload = function () {
        if (oMaskImg.width < oMaskImg.height) {
            oMaskImg.style.height = "100%";
            oMaskImg.style.width = "auto";
        }
        if (oMaskImg.width > oMaskImg.height) {
            oMaskImg.style.height = "auto";
            oMaskImg.style.width = "80%";
        }
    };
};
oArrowNext.onclick = function () {
    index++;
    if (index >= aElementImg.length) {
        index = 0;
    }
    oMaskImg.src = imgList[index];

    oMaskImg.onload = function () {
        if (oMaskImg.width < oMaskImg.height) {
            oMaskImg.style.height = "100%";
            oMaskImg.style.width = "auto";
        }
        if (oMaskImg.width > oMaskImg.height) {
            oMaskImg.style.height = "auto";
            oMaskImg.style.width = "80%";
        }
    };
};
