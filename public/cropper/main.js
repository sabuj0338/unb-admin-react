function CloseDialog(blobImage) {
    if (window.opener != null && !window.opener.closed) {
        // window.parent.croppedBlobImageString = "hello beauty";
        window.opener.croppedBlobImageString = blobImage;
        window.opener.getPopupData(blobImage);
        // var txtName = window.opener.document.getElementById("txtName");
        // txtName.value = document.getElementById("ddlNames").value;
    }
    window.close();
}

window.onload = function () {
    'use strict';
    const queryString = window.location.search;
    // alert(queryString);
    const urlParams = new URLSearchParams(queryString);
    const imageUrl = urlParams.get('image');
    let imageId = imageUrl;
    // let parentPreviewdImage = window.opener.document.getElementById(imageId);
    let canvasPreviewImage = document.getElementById("canvasPreviewImage");

    canvasPreviewImage.src = imageUrl;

    var Cropper = window.Cropper;
    var URL = window.URL || window.webkitURL;
    var container = document.querySelector('.img-container');
    var image = container.getElementsByTagName('img').item(0);
    var dataWidth = document.getElementById('width');
    var dataHeight = document.getElementById('height');

    var imageW = 1200;
    var imageH = 630;

    var options = {
        cropBoxResizable: false,
        viewMode: 1,
        aspectRatio: 1.90476190476,
        initialAspectRatio: 1.90476190476,
        ready: function (e) {
            // console.log("e.type");
            cropper['setDragMode']('move');
        },
        crop: function (e) {
            var data = e.detail;
            
            dataHeight.innerText = Math.round(data.height);
            imageH = Math.round(data.height);
            dataWidth.innerText = Math.round(data.width);
            imageW = Math.round(data.width);
        },
    };
    var cropper = new Cropper(image, options);

    // Methods
    document.getElementById("crop").addEventListener('click', crop);
    function crop(event) {
        var e = event || window.event;
        var canvas;
        var data;

        if (!cropper) {
            return;
        }
        data = {
            option: { width: imageW || 320, height: imageH || 180 } || undefined,
        };
        canvas = cropper.getCroppedCanvas(data.option);
        canvas.toBlob(function (blob) {
            let url = URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = function() {
                var base64data = reader.result;	
                CloseDialog(base64data);
             }
        });
    };
};

