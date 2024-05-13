document.getElementById('uploadBtn').addEventListener('click', function() {
    var fileList = document.getElementById('fileInput').files;
    var ul = document.getElementById('fileList');

    for (var i = 0; i < fileList.length; i++) {
        var file = fileList[i];
        var li = document.createElement('li');
        var reader = new FileReader();

        reader.onload = function(e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            li.appendChild(img);
        };

        reader.readAsDataURL(file);
        li.textContent = file.name;
        ul.appendChild(li);
    }
});
