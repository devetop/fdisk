    //function calculatePercentage() {
    //    var totalSpace = parseFloat(document.getElementById('totalSpace').value);
    //    var usageSpace = parseFloat(document.getElementById('usageSpace').value);
    //    var freePercentage = parseFloat(document.getElementById('freePercentage').value);

    //    if (isNaN(totalSpace) || isNaN(usageSpace) || isNaN(freePercentage)) {
    //        document.getElementById('result').innerHTML = "Please enter valid numbers.";
    //        return;
    //    }

    //    var percentage = ((totalSpace - usageSpace) / totalSpace) * 100;
    //    document.getElementById('result').innerHTML = "Free Disk Space Percentage: " + percentage.toFixed(2) + "%";
    //}
    function calculatePercentage() {
        const totalSpaceField = document.getElementById("totalSpace");
        const usageSpaceField = document.getElementById("usageSpace");
        const freePercentageField = document.getElementById("freePercentage");

        let totalSpace = parseFloat(totalSpaceField.value);
        let usageSpace = parseFloat(usageSpaceField.value);
        let freePercentage = parseFloat(freePercentageField.value);

        if (!isNaN(totalSpace) && !isNaN(usageSpace)) {
            freePercentageField.value = ((totalSpace - usageSpace) / totalSpace * 100);
        } else if (!isNaN(totalSpace) && !isNaN(freePercentage)) {
            usageSpaceField.value = (totalSpace - (freePercentage / 100 * totalSpace));
        } else if (!isNaN(usageSpace) && !isNaN(freePercentage)) {
            totalSpaceField.value = (usageSpace / (1 - freePercentage / 100));
        } else {
            alert("ISI DENGAN BENAR YGY");
        }
    }
    function resetFields() {
        document.getElementById("totalSpace").value = '';
        document.getElementById("usageSpace").value = '';
        document.getElementById("freePercentage").value = '';
    }
