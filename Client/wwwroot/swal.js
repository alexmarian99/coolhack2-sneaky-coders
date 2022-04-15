function SwalFireError(text, buttonText) {
	swal.fire({
		text: text,
		icon: "error",
		buttonsStyling: false,
		confirmButtonText: buttonText,
		customClass: {
			confirmButton: "btn font-weight-bold btn-light-primary"
		}
	});
}