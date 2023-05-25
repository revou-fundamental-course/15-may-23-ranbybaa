function LuasPersegi() {
    var sisiInput = document.getElementById("sisi");
    var outputLuas = document.getElementById("output_luas");
  
    var sisi = parseFloat(sisiInput.value);
    if (isNaN(sisi)) {
      outputLuas.textContent = "Please input the number in the form";
      return;
    }
  
    var luas = sisi * sisi;
    // outputLuas.textContent = "L = S x S\n" + "L = " + sisi + " x " + sisi + "\n" + "L = " + luas;
    outputLuas.innerHTML = "L = S x S<br>" + "L = " + sisi + " x " + sisi + "<br>" + "L = " + luas;
  }
  
  function KelilingPersegi() {
    var sisiInput = document.getElementById("sisi_keliling");
    var outputKeliling = document.getElementById("output_keliling");
  
    var sisi = parseFloat(sisiInput.value);
    if (isNaN(sisi)) {
      outputKeliling.textContent = "Please input the number in the form";
      return;
    }
  
    var keliling = 4 * sisi;
    // outputKeliling.textContent = "K = 4 x S\n" + "K = 4 x " + sisi + "\n" + "K = " + keliling;
    outputKeliling.innerHTML = "K = 4 x S<br>" + "K = 4 x " + sisi + "<br>" + "K = " + keliling;
  }
  
  function hideOutput(outputId) {
    var outputElement = document.getElementById(outputId);
    outputElement.textContent = "";
  }

  function validateNumber(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const numericRegex = /^[0-9]*$/;

    if (!numericRegex.test(keyValue)) {
        event.preventDefault();
        return false;
    }
  }