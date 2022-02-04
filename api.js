frmLogin.onsubmit = async function(e) {
    e.preventDefault()
    let formData = new FormData(frmLogin)
    let data = {}
    formData.forEach((value, key) => {
        data[key] = value;
    })

    let response = await fetch('https://localhost:7267/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let result = await response.json()
    if (result.success == true)
    {
        localStorage.setItem("token", result.token)
        window.location.href = "index.html"
    }
    else
    {
        alert(result.message)
    }

}