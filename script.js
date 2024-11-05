const form = document.getElementById('form');

function submitForm(id) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputElement = document.querySelectorAll('#' + id + ' input');
        const errorMessage = document.querySelector('#' + id);
        const existingError = errorMessage.querySelector('.error-message');

        if (existingError) {
            existingError.remove();
        }

        let isValid = true;
        if (inputElement[0].type === 'radio') {
            isValid = Array.from(inputElement).some(input => input.checked);
        } else {
            isValid = inputElement[0].value.trim() !== '';
        }

        if (!isValid) {
            const error = document.createElement('div');
            error.classList.add('error-message');
            error.innerHTML = id + ' tidak boleh kosong';
            errorMessage.appendChild(error);
            error.style.color = 'red';
        }
    });
}

submitForm('name');
submitForm('email')
submitForm('gender');
submitForm('Alamat');

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value || "Tidak ditentukan";
    const job = document.querySelector("select[name='job']").value;
    const message = document.querySelector("textarea[name='message']").value;
    const agreement = document.querySelector("input[name='agreement']").checked;

    if (!agreement) {
        alert("Anda harus menyetujui syarat dan ketentuan.");
        return;
    }

    const phone = "+6288271894771"; 
    const whatsappUrl = `https://wa.me/${phone}?text=` + encodeURIComponent(
        `Halo, berikut adalah detail yang diisi:\n\n` +
        `Nama: ${name}\n` +
        `Email: ${email}\n` +
        `Jenis Kelamin: ${gender}\n` +
        `Pekerjaan: ${job}\n` +
        `Pesan: ${message}`
    );

    // Redirect ke WhatsApp
    window.open(whatsappUrl, "_blank");
});
