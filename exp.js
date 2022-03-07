async function  submit() {
    document.getElementByTagName("form")[0].value

   let res = await fetch("http://localhost:5000/jsonapi",{method:"POST",body:document.getElementByTagName("form")[0].value});
  console.log(res.body)
  }
